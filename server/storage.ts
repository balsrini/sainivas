import { enquiries, type Enquiry, type InsertEnquiry } from "@shared/schema";

export interface IStorage {
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
}

export class MemStorage implements IStorage {
  private enquiries: Map<number, Enquiry>;
  private currentId: number;

  constructor() {
    this.enquiries = new Map();
    this.currentId = 1;
  }

  async createEnquiry(insertEnquiry: InsertEnquiry): Promise<Enquiry> {
    const id = this.currentId++;
    const enquiry: Enquiry = {
      ...insertEnquiry,
      id,
      createdAt: new Date()
    };
    this.enquiries.set(id, enquiry);
    return enquiry;
  }
}

export const storage = new MemStorage();
