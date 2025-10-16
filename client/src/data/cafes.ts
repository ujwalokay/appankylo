import { GamingCafe } from '../types/cafe';

export const gamingCafes: GamingCafe[] = [
  {
    id: '1',
    name: 'GTA Gaming Arena',
    location: 'Dombivli West',
    distance: '0.5 km',
    image: '/figmaAssets/frame-16.png',
    rating: 4.5,
    pcAvailable: 8,
    pcTotal: 20,
    ps5Available: 2,
    ps5Total: 5,
    pricePerHour: 150,
    openTime: '10:00 AM',
    closeTime: '11:00 PM',
    amenities: ['High-Speed WiFi', 'RGB Setup', 'Snacks Available', 'AC Room']
  },
  {
    id: '2',
    name: 'Valorant Gaming Hub',
    location: 'Dombivli East',
    distance: '1.2 km',
    image: '/figmaAssets/frame-17.png',
    rating: 4.8,
    pcAvailable: 12,
    pcTotal: 25,
    ps5Available: 3,
    ps5Total: 6,
    pricePerHour: 180,
    openTime: '11:00 AM',
    closeTime: '12:00 AM',
    amenities: ['Premium Gaming Chairs', '4K Monitors', 'Cafe', 'Private Rooms']
  },
  {
    id: '3',
    name: 'Dota Champions Cafe',
    location: 'Kalyan West',
    distance: '2.5 km',
    image: '/figmaAssets/rectangle-134.png',
    rating: 4.3,
    pcAvailable: 5,
    pcTotal: 15,
    ps5Available: 1,
    ps5Total: 3,
    pricePerHour: 120,
    openTime: '09:00 AM',
    closeTime: '10:00 PM',
    amenities: ['Budget Friendly', 'Tournament Ready', 'Parking Available']
  },
  {
    id: '4',
    name: 'Elite Gaming Zone',
    location: 'Thane',
    distance: '5.8 km',
    image: '/figmaAssets/rectangle-135.png',
    rating: 4.9,
    pcAvailable: 15,
    pcTotal: 30,
    ps5Available: 4,
    ps5Total: 8,
    pricePerHour: 200,
    openTime: '10:00 AM',
    closeTime: '01:00 AM',
    amenities: ['VIP Lounges', 'Professional Setup', 'Food Court', 'Event Space']
  }
];
