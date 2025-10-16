import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { ArrowLeft, MapPin, Monitor, Gamepad2, Star, Clock } from "lucide-react";
import type { Cafe } from "@shared/schema";

export default function CafeDetail() {
  const [, params] = useRoute("/cafe/:id");
  const cafeId = params?.id;

  const { data: cafe, isLoading } = useQuery<Cafe>({
    queryKey: ["/api/cafes", cafeId],
    enabled: !!cafeId,
  });

  if (isLoading || !cafe) {
    return (
      <div className="bg-[#1c1a29] min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const pcPercentage = (cafe.pcAvailable / cafe.pcTotal) * 100;
  const ps5Percentage = (cafe.ps5Available / cafe.ps5Total) * 100;

  return (
    <div className="bg-[#1c1a29] min-w-[375px] min-h-screen">
      <div className="relative">
        <img
          src={cafe.image}
          alt={cafe.name}
          className="w-full h-64 object-cover"
        />
        <Link href="/">
          <button 
            className="absolute top-6 left-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm"
            data-testid="button-back"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
        </Link>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1c1a29] to-transparent h-24" />
      </div>

      <div className="px-5 -mt-8 relative z-10">
        <h1 className="text-white text-3xl font-bold mb-2" data-testid="text-cafe-name">{cafe.name}</h1>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white" data-testid="text-rating">{cafe.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span data-testid="text-location">{cafe.location}</span>
            <span className="mx-1">•</span>
            <span data-testid="text-distance">{cafe.distance}</span>
          </div>
        </div>

        <div className="bg-[#252336] rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-[#4d438a]" />
              <span className="text-white font-semibold">PC Availability</span>
            </div>
            <span className="text-white" data-testid="text-pc-count">{cafe.pcAvailable}/{cafe.pcTotal}</span>
          </div>
          <div className="w-full bg-[#1c1a29] rounded-full h-2">
            <div 
              className="bg-[#4d438a] h-2 rounded-full transition-all"
              style={{ width: `${pcPercentage}%` }}
              data-testid="progress-pc"
            />
          </div>
          <div className="mt-1 text-xs text-gray-400">
            {cafe.pcAvailable > 0 ? `${cafe.pcAvailable} PCs available now` : "All PCs occupied"}
          </div>
        </div>

        <div className="bg-[#252336] rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-[#4d438a]" />
              <span className="text-white font-semibold">PS5 Availability</span>
            </div>
            <span className="text-white" data-testid="text-ps5-count">{cafe.ps5Available}/{cafe.ps5Total}</span>
          </div>
          <div className="w-full bg-[#1c1a29] rounded-full h-2">
            <div 
              className="bg-[#4d438a] h-2 rounded-full transition-all"
              style={{ width: `${ps5Percentage}%` }}
              data-testid="progress-ps5"
            />
          </div>
          <div className="mt-1 text-xs text-gray-400">
            {cafe.ps5Available > 0 ? `${cafe.ps5Available} PS5 consoles available` : "All consoles occupied"}
          </div>
        </div>

        <div className="bg-[#252336] rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-[#4d438a]" />
            <span className="text-white font-semibold">Pricing</span>
          </div>
          <div className="text-2xl text-[#4d438a] font-bold" data-testid="text-price">₹{cafe.pricePerHour}/hour</div>
        </div>

        <div className="bg-[#252336] rounded-xl p-4 mb-4">
          <h3 className="text-white font-semibold mb-2">About</h3>
          <p className="text-gray-400 text-sm" data-testid="text-description">{cafe.description}</p>
        </div>

        <div className="bg-[#252336] rounded-xl p-4 mb-6">
          <h3 className="text-white font-semibold mb-3">Amenities</h3>
          <div className="flex flex-wrap gap-2">
            {cafe.amenities.map((amenity, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-[#1c1a29] text-gray-300 rounded-full text-sm"
                data-testid={`text-amenity-${index}`}
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        <button 
          className="w-full bg-[#4d438a] text-white font-semibold py-4 rounded-xl mb-6 hover:bg-[#5d4f9a] transition-colors"
          data-testid="button-book"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
