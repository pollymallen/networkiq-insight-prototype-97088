import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";
import type { ViteDevServer } from "vite";

export async function setupVite(app: Express, server: any) {
  const vite: ViteDevServer = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: { server },
    },
    appType: "spa",
  });

  app.use(vite.middlewares);

  app.get("/*splat", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientPath = path.resolve(process.cwd(), "index.html");
      let template = fs.readFileSync(clientPath, "utf-8");
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
