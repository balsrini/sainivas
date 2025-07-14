import { enquiries, flats, type Enquiry, type InsertEnquiry, type Flat, type InsertFlat } from "@shared/schema";

export interface IStorage {
  getFlats(): Promise<Flat[]>;
  getFlatById(id: number): Promise<Flat | null>;
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
}

export class MemStorage implements IStorage {
  private enquiries: Map<number, Enquiry>;
  private flats: Map<number, Flat>;
  private currentEnquiryId: number;

  constructor() {
    this.enquiries = new Map();
    this.flats = new Map();
    this.currentEnquiryId = 1;
    this.initializeFlats();
  }

  private initializeFlats() {
    const sampleFlats: Flat[] = [
      {
        id: 1,
        title: "Modern Studio Apartment",
        description: "A beautifully designed studio apartment with contemporary furnishings and city views.",
        price: "$1,200/month",
        bedrooms: 1,
        bathrooms: 1,
        area: "450 sq ft",
        images: [
          "/images/apt1-img1.jpg",
          "/images/apt1-img2.jpg",
          "/images/apt1-img3.jpg"
        ],
        features: ["City Views", "Furnished", "Air Conditioning", "High-Speed Internet"]
      },
      {
        id: 2,
        title: "Luxury One Bedroom",
        description: "Spacious one-bedroom apartment with premium amenities and modern kitchen.",
        price: "$1,800/month",
        bedrooms: 1,
        bathrooms: 1,
        area: "650 sq ft",
        images: [
          "/images/apt2-img1.jpg",
          "/images/apt2-img2.jpg",
          "/images/apt2-img3.jpg"
        ],
        features: ["Luxury Finishes", "In-Unit Laundry", "Balcony", "Gym Access"]
      },
      {
        id: 3,
        title: "Executive Two Bedroom",
        description: "Premium two-bedroom apartment perfect for professionals and small families.",
        price: "$2,400/month",
        bedrooms: 2,
        bathrooms: 2,
        area: "900 sq ft",
        images: [
          "/images/apt3-img1.jpg",
          "/images/apt3-img2.jpg",
          "/images/apt3-img3.jpg"
        ],
        features: ["Master Suite", "Walk-in Closet", "Modern Kitchen", "City Views"]
      },
      {
        id: 4,
        title: "Penthouse Suite",
        description: "Exclusive penthouse with panoramic city views and luxury amenities.",
        price: "$3,500/month",
        bedrooms: 3,
        bathrooms: 2,
        area: "1,200 sq ft",
        images: [
          "/images/apt4-img1.jpg",
          "/images/apt4-img2.jpg",
          "/images/apt4-img3.jpg"
        ],
        features: ["Panoramic Views", "Private Terrace", "Concierge Service", "Premium Location"]
      },
      {
        id: 5,
        title: "Cozy Loft Apartment",
        description: "Industrial-style loft with high ceilings and exposed brick walls.",
        price: "$1,600/month",
        bedrooms: 1,
        bathrooms: 1,
        area: "700 sq ft",
        images: [
          "/images/apt5-img1.jpg",
          "/images/apt5-img2.jpg",
          "/images/apt5-img3.jpg"
        ],
        features: ["High Ceilings", "Exposed Brick", "Hardwood Floors", "Artist District"]
      },
      {
        id: 6,
        title: "Garden View Studio",
        description: "Peaceful studio apartment overlooking beautiful landscaped gardens.",
        price: "$1,100/month",
        bedrooms: 1,
        bathrooms: 1,
        area: "400 sq ft",
        images: [
          "/images/apt6-img1.jpg",
          "/images/apt6-img2.jpg",
          "/images/apt6-img3.jpg"
        ],
        features: ["Garden Views", "Quiet Location", "Natural Light", "Pet Friendly"]
      },
      {
        id: 7,
        title: "Urban Two Bedroom",
        description: "Contemporary two-bedroom in the heart of the city with modern amenities.",
        price: "$2,200/month",
        bedrooms: 2,
        bathrooms: 1,
        area: "850 sq ft",
        images: [
          "/images/apt7-img1.jpg",
          "/images/apt7-img2.jpg",
          "/images/apt7-img3.jpg"
        ],
        features: ["Central Location", "Modern Appliances", "Storage Space", "Transit Access"]
      },
      {
        id: 8,
        title: "Waterfront Apartment",
        description: "Stunning apartment with direct water views and premium finishes.",
        price: "$2,800/month",
        bedrooms: 2,
        bathrooms: 2,
        area: "950 sq ft",
        images: [
          "/images/apt8-img1.jpg",
          "/images/apt8-img2.jpg",
          "/images/apt8-img3.jpg"
        ],
        features: ["Water Views", "Premium Finishes", "Marina Access", "Resort-Style Living"]
      },
      {
        id: 9,
        title: "Family Three Bedroom",
        description: "Spacious three-bedroom apartment ideal for families with children.",
        price: "$2,900/month",
        bedrooms: 3,
        bathrooms: 2,
        area: "1,100 sq ft",
        images: [
          "/images/apt9-img1.jpg",
          "/images/apt9-img2.jpg",
          "/images/apt9-img3.jpg"
        ],
        features: ["Family Friendly", "Near Schools", "Play Area", "Safe Neighborhood"]
      }
    ];

    sampleFlats.forEach(flat => {
      this.flats.set(flat.id, flat);
    });
  }

  async getFlats(): Promise<Flat[]> {
    return Array.from(this.flats.values());
  }

  async getFlatById(id: number): Promise<Flat | null> {
    return this.flats.get(id) || null;
  }

  async createEnquiry(insertEnquiry: InsertEnquiry): Promise<Enquiry> {
    const id = this.currentEnquiryId++;
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
