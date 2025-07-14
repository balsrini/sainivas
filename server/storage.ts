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
          "https://images.unsplash.com/photo-1489269637500-aa0e75768394",
          "https://images.unsplash.com/photo-1713832139686-42a1d84ad763",
          "https://images.unsplash.com/photo-1713832140683-127683601a67"
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
          "https://images.unsplash.com/photo-1713832139677-7fefa9ee3df0",
          "https://images.unsplash.com/photo-1713832139677-a03a41b602e3",
          "https://images.unsplash.com/photo-1713832139688-79676097edde"
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
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
          "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e",
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
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
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
          "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
          "https://images.unsplash.com/photo-1564078516393-cf04bd966897"
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
          "https://images.unsplash.com/photo-1554995207-c18c203602cb",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
          "https://images.unsplash.com/photo-1616137466211-f939a420be84"
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
          "https://images.unsplash.com/photo-1484154218962-a197022b5858",
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
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
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
          "https://images.unsplash.com/photo-1565538810643-b5bdb714032a",
          "https://images.unsplash.com/photo-1574362848149-11496d93a7c7"
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
          "https://images.unsplash.com/photo-1560185009-5bf9f2849488",
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
          "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d"
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
          "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15",
          "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92",
          "https://images.unsplash.com/photo-1586105251261-72a756497a11"
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
