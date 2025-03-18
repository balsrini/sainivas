import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
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
