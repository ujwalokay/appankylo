import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { ArrowLeft, MapPin, Monitor, Gamepad2, Star, Phone, Map, Sparkles } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(258,68%,8%)] to-[hsl(258,68%,12%)]">
        <div className="text-white animate-pulse">Loading...</div>
      </div>
    );
  }

  const pcPercentage = (cafe.pcAvailable / cafe.pcTotal) * 100;
  const ps5Percentage = (cafe.ps5Available / cafe.ps5Total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(258,68%,8%)] to-[hsl(258,68%,12%)]">
      {/* Hero Image */}
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(258,68%,8%)] via-transparent to-transparent z-10" />
        <img
          src={cafe.image}
          alt={cafe.name}
          className="w-full h-full object-cover animate-fade-in"
        />
        <Link href="/">
          <button 
            className="absolute top-6 left-4 w-12 h-12 rounded-2xl glass-effect flex items-center justify-center hover-glow z-20"
            data-testid="button-back"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
        </Link>
      </div>

      {/* Content */}
      <div className="px-5 -mt-16 relative z-10 pb-8">
        {/* Title Card */}
        <div className="glass-effect rounded-3xl p-5 mb-4 border border-purple-500/30 animate-slide-in-up">
          <h1 className="text-3xl font-bold text-white mb-3" data-testid="text-cafe-name">{cafe.name}</h1>
          
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-semibold" data-testid="text-rating">{cafe.rating}</span>
            </div>
            <div className="flex items-center gap-2 text-purple-300">
              <MapPin className="w-4 h-4" />
              <span className="text-sm" data-testid="text-location">{cafe.location}</span>
              <span className="text-purple-500">•</span>
              <span className="text-sm" data-testid="text-distance">{cafe.distance}</span>
            </div>
          </div>
        </div>

        {/* Availability Cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="glass-effect rounded-2xl p-4 border border-purple-500/30 hover-glow animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-white font-semibold">PC</span>
            </div>
            <div className="text-2xl font-bold text-white mb-2" data-testid="text-pc-count">
              {cafe.pcAvailable}/{cafe.pcTotal}
            </div>
            <div className="w-full bg-purple-900/40 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${pcPercentage}%` }}
                data-testid="progress-pc"
              />
            </div>
            <div className="mt-2 text-xs text-purple-300">
              {cafe.pcAvailable > 0 ? 'Available Now' : 'Fully Booked'}
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-4 border border-pink-500/30 hover-glow animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-pink-400" />
              </div>
              <span className="text-white font-semibold">PS5</span>
            </div>
            <div className="text-2xl font-bold text-white mb-2" data-testid="text-ps5-count">
              {cafe.ps5Available}/{cafe.ps5Total}
            </div>
            <div className="w-full bg-pink-900/40 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${ps5Percentage}%` }}
                data-testid="progress-ps5"
              />
            </div>
            <div className="mt-2 text-xs text-pink-300">
              {cafe.ps5Available > 0 ? 'Available Now' : 'Fully Booked'}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="glass-effect rounded-2xl p-5 mb-4 border border-purple-500/30 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            About
          </h3>
          <p className="text-purple-200 text-sm leading-relaxed" data-testid="text-description">{cafe.description}</p>
        </div>

        {/* Games Section */}
        <div className="glass-effect rounded-2xl p-5 mb-4 border border-purple-500/30 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-purple-400" />
            Available Games
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-semibold">PC Games</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cafe.pcGames.map((game, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs font-medium hover-glow"
                    data-testid={`text-pc-game-${index}`}
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Gamepad2 className="w-4 h-4 text-pink-400" />
                <span className="text-pink-300 text-sm font-semibold">PS5 Games</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cafe.ps5Games.map((game, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 rounded-lg bg-pink-500/20 border border-pink-500/30 text-pink-200 text-xs font-medium hover-glow"
                    data-testid={`text-ps5-game-${index}`}
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="glass-effect rounded-2xl p-5 mb-6 border border-purple-500/30 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-white font-bold text-lg mb-4">Amenities</h3>
          <div className="flex flex-wrap gap-2">
            {cafe.amenities.map((amenity, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 text-sm font-medium"
                data-testid={`text-amenity-${index}`}
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href={`tel:${cafe.phone}`}
            className="h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white font-semibold hover-glow flex items-center justify-center gap-2 transition-all active:scale-95"
            data-testid="button-call"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm">Call</span>
          </a>
          <a 
            href={`https://wa.me/${cafe.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white font-semibold hover-glow flex items-center justify-center transition-all active:scale-95"
            data-testid="button-whatsapp"
          >
            <SiWhatsapp className="w-6 h-6" />
          </a>
          <a 
            href={`https://www.google.com/maps?q=${cafe.latitude},${cafe.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white font-semibold hover-glow flex items-center justify-center gap-2 transition-all active:scale-95"
            data-testid="button-map"
          >
            <Map className="w-5 h-5" />
            <span className="text-sm">Map</span>
          </a>
        </div>
      </div>
    </div>
  );
}
