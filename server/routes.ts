import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/cafes", async (_req, res) => {
    const cafes = await storage.getCafes();
    res.json(cafes);
  });

  app.get("/api/cafes/:id", async (req, res) => {
    const cafe = await storage.getCafe(req.params.id);
    if (!cafe) {
      return res.status(404).json({ message: "Cafe not found" });
    }
    res.json(cafe);
  });

  const httpServer = createServer(app);

  return httpServer;
}
