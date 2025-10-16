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
        vrAvailable: 2,
        vrTotal: 3,
        carSimAvailable: 1,
        carSimTotal: 2,
        pricePerHour: 100,
        description: "Premium gaming cafe with high-end PCs, latest consoles, VR headsets, and racing simulators. Perfect for competitive gaming.",
        amenities: ["High-speed WiFi", "Air Conditioned", "Snacks & Drinks", "Premium Headsets", "VR Gaming", "Racing Simulators"],
        phone: "+91 9876543210",
        whatsapp: "+919876543210",
        latitude: 19.2183,
        longitude: 73.0869,
        pcGames: ["GTA V", "Valorant", "CS:GO", "Fortnite", "PUBG", "Minecraft"],
        ps5Games: ["FIFA 24", "Spider-Man 2", "God of War", "Gran Turismo 7"],
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
        vrAvailable: null,
        vrTotal: null,
        carSimAvailable: null,
        carSimTotal: null,
        pricePerHour: 80,
        description: "Cozy gaming spot with great ambiance and friendly staff. Family-friendly environment.",
        amenities: ["WiFi", "AC", "Food & Beverages", "Parking"],
        phone: "+91 9876543211",
        whatsapp: "+919876543211",
        latitude: 19.2203,
        longitude: 73.0889,
        pcGames: ["Valorant", "Dota 2", "League of Legends", "Apex Legends", "Rocket League"],
        ps5Games: ["Call of Duty", "FIFA 24", "Mortal Kombat 11"],
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
        vrAvailable: 1,
        vrTotal: 2,
        carSimAvailable: 2,
        carSimTotal: 2,
        pricePerHour: 120,
        description: "Professional esports training center with tournament-grade equipment, VR zone, and racing simulators.",
        amenities: ["Ultra-fast WiFi", "AC", "Streaming Setup", "Gaming Chairs", "Snack Bar", "VR Zone", "Racing Sims"],
        phone: "+91 9876543212",
        whatsapp: "+919876543212",
        latitude: 19.2193,
        longitude: 73.0879,
        pcGames: ["CS:GO", "Valorant", "Rainbow Six Siege", "Overwatch 2", "Fortnite", "PUBG"],
        ps5Games: ["FIFA 24", "NBA 2K24", "UFC 5", "Tekken 8", "Street Fighter 6"],
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
        vrAvailable: null,
        vrTotal: null,
        carSimAvailable: null,
        carSimTotal: null,
        pricePerHour: 90,
        description: "Budget-friendly gaming cafe with good specs and comfortable seating.",
        amenities: ["WiFi", "AC", "Beverages"],
        phone: "+91 9876543213",
        whatsapp: "+919876543213",
        latitude: 19.2437,
        longitude: 73.1355,
        pcGames: ["GTA V", "Minecraft", "Valorant", "CS:GO"],
        ps5Games: ["FIFA 24", "Spider-Man"],
      },
    ];

    initialCafes.forEach((cafe) => {
      const id = randomUUID();
      this.cafes.set(id, { 
        ...cafe, 
        id,
        vrAvailable: cafe.vrAvailable ?? null,
        vrTotal: cafe.vrTotal ?? null,
        carSimAvailable: cafe.carSimAvailable ?? null,
        carSimTotal: cafe.carSimTotal ?? null,
      });
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
