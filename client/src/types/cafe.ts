export interface GamingCafe {
  id: string;
  name: string;
  location: string;
  distance: string;
  image: string;
  rating: number;
  pcAvailable: number;
  pcTotal: number;
  ps5Available: number;
  ps5Total: number;
  pricePerHour: number;
  openTime: string;
  closeTime: string;
  amenities: string[];
}
