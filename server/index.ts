import express from "express";
import { registerRoutes } from "./routes";
import { setupVite } from "./vite";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/healthz", (_req, res) => {
  res.status(200).send("OK");
});

registerRoutes(app).then(async (server) => {
  await setupVite(app, server);

  const port = process.env.PORT || 5000;
  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
  });
});
