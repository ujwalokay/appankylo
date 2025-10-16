import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { MapPin, Monitor, Gamepad2, Menu, Bell, ChevronRight, Trophy, Percent, Glasses, Car } from "lucide-react";
import type { Cafe } from "@shared/schema";

export default function CafeList() {
  const { data: cafes, isLoading } = useQuery<Cafe[]>({
    queryKey: ["/api/cafes"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(258,68%,8%)] to-[hsl(258,68%,12%)]">
        <div className="text-white animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(258,68%,8%)] to-[hsl(258,68%,12%)] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 glass-effect border-b border-purple-500/20">
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <button 
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover-glow"
                data-testid="button-menu"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
              <div className="flex items-center gap-3">
                <img
                  src="/attached_assets/WhatsApp_Image_2025-10-10_at_18.36.58_1fb5438e-removebg-preview_1760599705429.png"
                  alt="Ankylo Gaming"
                  className="w-10 h-10 animate-float"
                  data-testid="img-logo"
                />
                <div>
                  <div className="text-xs text-purple-300">dombivli west</div>
                  <div className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ANKYLO GAMING
                  </div>
                </div>
              </div>
            </div>
            <button className="relative p-2 rounded-xl bg-purple-500/20 hover-glow" data-testid="button-notifications">
              <Bell className="w-5 h-5 text-purple-300" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full animate-glow-pulse" />
            </button>
          </div>
          
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-white mb-1 animate-fade-in" data-testid="text-page-title">
              Discover Gaming Cafes
            </h1>
            <p className="text-purple-300 text-sm">Find your next gaming destination</p>
          </div>
        </div>
      </header>

      {/* Cafes Grid */}
      <div className="px-5 mt-6 space-y-5">
        {cafes?.map((cafe, index) => (
          <Link key={cafe.id} href={`/cafe/${cafe.id}`}>
            <div 
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-purple-500/30 hover-glow animate-slide-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-cafe-${cafe.id}`}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(258,68%,12%)] via-transparent to-transparent z-10" />
                <img
                  src={cafe.image}
                  alt={cafe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 z-20">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full glass-effect">
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="text-white font-semibold text-sm" data-testid={`text-rating-${cafe.id}`}>{cafe.rating}</span>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-purple-300 transition-colors" data-testid={`text-cafe-name-${cafe.id}`}>
                      {cafe.name}
                    </h3>
                    <div className="flex items-center gap-2 text-purple-300 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span data-testid={`text-location-${cafe.id}`}>{cafe.location}</span>
                      <span className="text-purple-500">•</span>
                      <span data-testid={`text-distance-${cafe.id}`}>{cafe.distance}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Availability */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="px-3 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Monitor className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-purple-300">PC</span>
                    </div>
                    <div className="text-white font-semibold" data-testid={`text-pc-availability-${cafe.id}`}>
                      {cafe.pcAvailable}/{cafe.pcTotal}
                    </div>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-pink-500/10 border border-pink-500/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Gamepad2 className="w-4 h-4 text-pink-400" />
                      <span className="text-xs text-pink-300">PS5</span>
                    </div>
                    <div className="text-white font-semibold" data-testid={`text-ps5-availability-${cafe.id}`}>
                      {cafe.ps5Available}/{cafe.ps5Total}
                    </div>
                  </div>
                  {cafe.vrTotal && cafe.vrTotal > 0 && (
                    <div className="px-3 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Glasses className="w-4 h-4 text-blue-400" />
                        <span className="text-xs text-blue-300">VR</span>
                      </div>
                      <div className="text-white font-semibold" data-testid={`text-vr-availability-${cafe.id}`}>
                        {cafe.vrAvailable}/{cafe.vrTotal}
                      </div>
                    </div>
                  )}
                  {cafe.carSimTotal && cafe.carSimTotal > 0 && (
                    <div className="px-3 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Car className="w-4 h-4 text-orange-400" />
                        <span className="text-xs text-orange-300">Racing Sim</span>
                      </div>
                      <div className="text-white font-semibold" data-testid={`text-carsim-availability-${cafe.id}`}>
                        {cafe.carSimAvailable}/{cafe.carSimTotal}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 glass-effect border-t border-purple-500/20">
        <div className="flex justify-around items-center h-20 max-w-[500px] mx-auto px-5">
          <button className="flex flex-col items-center gap-1 group" data-testid="button-nav-home">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transition-transform group-hover:scale-110">
              <img src="/figmaAssets/group-304.png" alt="Home" className="w-6 h-6" />
            </div>
            <span className="text-xs text-purple-300 font-medium">Home</span>
          </button>
          <Link href="/tournament">
            <button className="flex flex-col items-center gap-1 group" data-testid="button-nav-tournament">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center transition-all group-hover:bg-purple-500/30">
                <Trophy className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-xs text-purple-500/50 font-medium">Tournament</span>
            </button>
          </Link>
          <Link href="/offers">
            <button className="flex flex-col items-center gap-1 group" data-testid="button-nav-offers">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center transition-all group-hover:bg-purple-500/30">
                <Percent className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-xs text-purple-500/50 font-medium">Offers</span>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
