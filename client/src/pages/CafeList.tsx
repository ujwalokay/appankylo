import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { MapPin, Monitor, Gamepad2, Menu } from "lucide-react";
import type { Cafe } from "@shared/schema";

export default function CafeList() {
  const { data: cafes, isLoading } = useQuery<Cafe[]>({
    queryKey: ["/api/cafes"],
  });

  if (isLoading) {
    return (
      <div className="bg-[#1c1a29] min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#1c1a29] min-w-[375px] min-h-screen pb-20">
      <header className="sticky top-0 bg-[#1c1a29] z-10 pb-4">
        <div className="flex items-center justify-between px-5 pt-11 pb-3">
          <div className="flex items-center gap-3">
            <button 
              className="w-[30px] h-[30px] flex items-center justify-center"
              data-testid="button-menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
            <div className="flex items-center gap-2">
              <img
                src="/attached_assets/WhatsApp_Image_2025-10-10_at_18.36.58_1fb5438e-removebg-preview_1760599705429.png"
                alt="Ankylo Gaming"
                className="w-8 h-8"
                data-testid="img-logo"
              />
              <div>
                <div className="text-[10px] text-gray-400">dombivli west</div>
                <div className="text-[11px] font-bold text-white">ANKYLO GAMING</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-[27px] h-[27px]"
              alt="Notifications"
              src="/figmaAssets/group-7.png"
              data-testid="img-notifications"
            />
            <div className="absolute top-0 right-0 w-[9px] h-[9px] bg-[#eb5757] rounded-full" />
          </div>
        </div>
        
        <div className="px-5 mt-4">
          <h1 className="text-white text-2xl font-bold" data-testid="text-page-title">Gaming Cafes Near You</h1>
          <p className="text-gray-400 text-sm mt-1">Find the perfect spot to game</p>
        </div>
      </header>

      <div className="px-5 mt-6 space-y-4">
        {cafes?.map((cafe) => (
          <Link key={cafe.id} href={`/cafe/${cafe.id}`}>
            <div 
              className="bg-[#252336] rounded-xl overflow-hidden cursor-pointer hover:bg-[#2d2a42] transition-colors"
              data-testid={`card-cafe-${cafe.id}`}
            >
              <div className="relative h-40">
                <img
                  src={cafe.image}
                  alt={cafe.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg" data-testid={`text-cafe-name-${cafe.id}`}>{cafe.name}</h3>
                  <div className="flex items-center gap-1 text-gray-300 text-xs mt-1">
                    <MapPin className="w-3 h-3" />
                    <span data-testid={`text-location-${cafe.id}`}>{cafe.location}</span>
                    <span className="mx-1">•</span>
                    <span data-testid={`text-distance-${cafe.id}`}>{cafe.distance}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-400">★</span>
                  <span className="text-white text-sm" data-testid={`text-rating-${cafe.id}`}>{cafe.rating}</span>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Monitor className="w-4 h-4 text-[#4d438a]" />
                    <span className="text-white" data-testid={`text-pc-availability-${cafe.id}`}>
                      {cafe.pcAvailable}/{cafe.pcTotal} PC
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Gamepad2 className="w-4 h-4 text-[#4d438a]" />
                    <span className="text-white" data-testid={`text-ps5-availability-${cafe.id}`}>
                      {cafe.ps5Available}/{cafe.ps5Total} PS5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#1c1a29] border-t border-[#2a2740]">
        <div className="flex justify-around items-center h-16 max-w-[500px] mx-auto">
          <button className="flex flex-col items-center gap-1 text-[#4d438a]" data-testid="button-nav-home">
            <img src="/figmaAssets/group-304.png" alt="Home" className="w-6 h-6" />
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500" data-testid="button-nav-games">
            <img src="/figmaAssets/group-291.png" alt="Games" className="w-6 h-6" />
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500" data-testid="button-nav-profile">
            <img src="/figmaAssets/group-293.png" alt="Profile" className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </div>
  );
}
