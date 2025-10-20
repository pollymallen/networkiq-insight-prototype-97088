import { Issuer, type Client, generators } from "openid-client";
import session from "express-session";
import type { Express, RequestHandler } from "express";
import memoize from "memoizee";
import connectPg from "connect-pg-simple";
import { storage } from "./storage.js";

if (!process.env.REPLIT_DOMAINS) {
  throw new Error("Environment variable REPLIT_DOMAINS not provided");
}

const getOidcConfig = memoize(
  async () => {
    const issuer = await Issuer.discover("https://replit.com/oidc");
    return issuer;
  },
  { maxAge: 3600 * 1000 }
);

function getClient(issuer: any, domain: string): Client {
  return new issuer.Client({
    client_id: process.env.REPL_ID!,
    response_types: ["code"],
    redirect_uris: [`https://${domain}/api/callback`],
    token_endpoint_auth_method: "none",
  });
}

export function getSession() {
  const sessionTtl = 7 * 24 * 60 * 60 * 1000;
  const pgStore = connectPg(session);
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: false,
    ttl: sessionTtl,
    tableName: "sessions",
  });
  return session({
    secret: process.env.SESSION_SECRET!,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: sessionTtl,
    },
  });
}

export async function setupAuth(app: Express) {
  app.set("trust proxy", 1);
  app.use(getSession());

  const issuer = await getOidcConfig();

  app.get("/api/login", async (req, res) => {
    try {
      const client = getClient(issuer, req.hostname);
      const state = generators.state();
      const nonce = generators.nonce();
      const code_verifier = generators.codeVerifier();
      const code_challenge = generators.codeChallenge(code_verifier);

      (req.session as any).state = state;
      (req.session as any).nonce = nonce;
      (req.session as any).code_verifier = code_verifier;

      const authUrl = client.authorizationUrl({
        scope: "openid email profile offline_access",
        state,
        nonce,
        code_challenge,
        code_challenge_method: "S256",
      });

      res.redirect(authUrl);
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).send("Login failed");
    }
  });

  app.get("/api/callback", async (req, res) => {
    try {
      const client = getClient(issuer, req.hostname);
      const params = client.callbackParams(req);
      const sessionState = (req.session as any).state;
      const sessionNonce = (req.session as any).nonce;
      const codeVerifier = (req.session as any).code_verifier;

      if (params.state !== sessionState) {
        return res.status(400).send("State mismatch");
      }

      const tokenSet = await client.callback(
        `https://${req.hostname}/api/callback`,
        params,
        { state: sessionState, nonce: sessionNonce, code_verifier: codeVerifier }
      );

      const claims = tokenSet.claims();

      await storage.upsertUser({
        id: claims.sub as string,
        email: (claims.email as string) || null,
        firstName: (claims.first_name as string) || null,
        lastName: (claims.last_name as string) || null,
        profileImageUrl: (claims.profile_image_url as string) || null,
      });

      (req.session as any).user = {
        claims,
        access_token: tokenSet.access_token,
        refresh_token: tokenSet.refresh_token,
        expires_at: claims.exp,
      };

      delete (req.session as any).state;
      delete (req.session as any).nonce;
      delete (req.session as any).code_verifier;

      res.redirect("/");
    } catch (error) {
      console.error("Callback error:", error);
      res.redirect("/api/login");
    }
  });

  app.get("/api/logout", async (req, res) => {
    const postLogoutRedirect = `${req.protocol}://${req.hostname}`;
    
    req.session.destroy(() => {
      const logoutUrl = issuer.end_session_endpoint
        ? `${issuer.end_session_endpoint}?client_id=${process.env.REPL_ID}&post_logout_redirect_uri=${encodeURIComponent(postLogoutRedirect)}`
        : postLogoutRedirect;
      
      res.redirect(logoutUrl);
    });
  });
}

export const isAuthenticated: RequestHandler = async (req, res, next) => {
  const user = (req.session as any).user;

  if (!user || !user.expires_at) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const now = Math.floor(Date.now() / 1000);
  if (now <= user.expires_at) {
    return next();
  }

  const refreshToken = user.refresh_token;
  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const issuer = await getOidcConfig();
    const client = getClient(issuer, req.hostname);
    const tokenSet = await client.refresh(refreshToken);
    const claims = tokenSet.claims();

    user.claims = claims;
    user.access_token = tokenSet.access_token;
    user.refresh_token = tokenSet.refresh_token;
    user.expires_at = claims.exp;

    return next();
  } catch (error) {
    console.error("Token refresh error:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
