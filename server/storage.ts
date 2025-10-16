import { type Cafe, type InsertCafe } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getCafes(): Promise<Cafe[]>;
  getCafe(id: string): Promise<Cafe | undefined>;
}

export class MemStorage implements IStorage {
  private cafes: Map<string, Cafe>;

  constructor() {
    this.cafes = new Map();
    this.initializeCafes();
  }

  private initializeCafes() {
    const initialCafes: InsertCafe[] = [
      {
        name: "GameZone Arena",
        location: "Dombivli West",
        distance: "0.5 km",
        image: "/figmaAssets/frame-16.png",
        rating: 4.5,
        pcAvailable: 8,
        pcTotal: 12,
        ps5Available: 2,
        ps5Total: 4,
        pricePerHour: 100,
        description: "Premium gaming cafe with high-end PCs and latest consoles. Perfect for competitive gaming.",
        amenities: ["High-speed WiFi", "Air Conditioned", "Snacks & Drinks", "Premium Headsets"],
      },
      {
        name: "Pixel Palace",
        location: "Dombivli East",
        distance: "1.2 km",
        image: "/figmaAssets/frame-17.png",
        rating: 4.3,
        pcAvailable: 5,
        pcTotal: 10,
        ps5Available: 3,
        ps5Total: 3,
        pricePerHour: 80,
        description: "Cozy gaming spot with great ambiance and friendly staff. Family-friendly environment.",
        amenities: ["WiFi", "AC", "Food & Beverages", "Parking"],
      },
      {
        name: "Elite Esports Hub",
        location: "Dombivli West",
        distance: "0.8 km",
        image: "/figmaAssets/rectangle-121.png",
        rating: 4.7,
        pcAvailable: 10,
        pcTotal: 15,
        ps5Available: 4,
        ps5Total: 5,
        pricePerHour: 120,
        description: "Professional esports training center with tournament-grade equipment.",
        amenities: ["Ultra-fast WiFi", "AC", "Streaming Setup", "Gaming Chairs", "Snack Bar"],
      },
      {
        name: "Gamer's Paradise",
        location: "Kalyan",
        distance: "3.5 km",
        image: "/figmaAssets/rectangle-130.png",
        rating: 4.2,
        pcAvailable: 6,
        pcTotal: 8,
        ps5Available: 1,
        ps5Total: 2,
        pricePerHour: 90,
        description: "Budget-friendly gaming cafe with good specs and comfortable seating.",
        amenities: ["WiFi", "AC", "Beverages"],
      },
    ];

    initialCafes.forEach((cafe) => {
      const id = randomUUID();
      this.cafes.set(id, { ...cafe, id });
    });
  }

  async getCafes(): Promise<Cafe[]> {
    return Array.from(this.cafes.values());
  }

  async getCafe(id: string): Promise<Cafe | undefined> {
    return this.cafes.get(id);
  }
}

export const storage = new MemStorage();
