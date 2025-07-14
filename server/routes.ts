import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/flats", async (req, res) => {
    try {
      const flats = await storage.getFlats();
      res.json(flats);
    } catch (error) {
      res.status(500).json({ message: "Failed to get flats" });
    }
  });

  app.get("/api/flats/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const flat = await storage.getFlatById(id);
      if (!flat) {
        res.status(404).json({ message: "Flat not found" });
        return;
      }
      res.json(flat);
    } catch (error) {
      res.status(500).json({ message: "Failed to get flat" });
    }
  });

  app.post("/api/enquiries", async (req, res) => {
    try {
      const enquiryData = insertEnquirySchema.parse(req.body);
      const enquiry = await storage.createEnquiry(enquiryData);
      res.status(201).json(enquiry);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Failed to create enquiry" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
