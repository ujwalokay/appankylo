import { Link } from "wouter";
import { Trophy, Calendar, Users, Award, ChevronRight, ArrowLeft } from "lucide-react";

export default function Tournament() {
  const tournaments = [
    {
      id: "1",
      name: "Valorant Championship",
      game: "Valorant",
      date: "Oct 20, 2025",
      prize: "₹10,000",
      participants: "32/64",
      status: "Open",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop"
    },
    {
      id: "2",
      name: "FIFA Pro League",
      game: "FIFA 24",
      date: "Oct 25, 2025",
      prize: "₹5,000",
      participants: "16/32",
      status: "Open",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop"
    },
    {
      id: "3",
      name: "Call of Duty Battle",
      game: "COD Warzone",
      date: "Oct 18, 2025",
      prize: "₹8,000",
      participants: "64/64",
      status: "Full",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(258,68%,8%)] to-[hsl(258,68%,12%)] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 glass-effect border-b border-purple-500/20">
        <div className="px-5 py-4">
          <div className="flex items-center gap-4 mb-3">
            <Link href="/">
              <button 
                className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center hover-glow"
                data-testid="button-back"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white" data-testid="text-page-title">
                Tournaments
              </h1>
              <p className="text-purple-300 text-sm">Join competitive gaming events</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="mx-5 mt-6 mb-6 relative overflow-hidden rounded-3xl h-40 glass-effect border border-purple-500/30 animate-slide-in-up">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80 flex items-center justify-between px-6">
          <div>
            <h2 className="text-white text-2xl font-bold mb-2">Win Big!</h2>
            <p className="text-purple-100 text-sm">Register for upcoming tournaments</p>
          </div>
          <Trophy className="w-20 h-20 text-yellow-400 animate-float" />
        </div>
      </div>

      {/* Tournaments List */}
      <div className="px-5 space-y-4">
        {tournaments.map((tournament, index) => (
          <div
            key={tournament.id}
            className="glass-effect rounded-2xl border border-purple-500/30 hover-glow animate-slide-in-up overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
            data-testid={`card-tournament-${tournament.id}`}
          >
            <div className="flex gap-4 p-4">
              {/* Tournament Image */}
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={tournament.image}
                  alt={tournament.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tournament Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white font-bold text-lg" data-testid={`text-tournament-name-${tournament.id}`}>
                      {tournament.name}
                    </h3>
                    <p className="text-purple-300 text-sm" data-testid={`text-game-${tournament.id}`}>{tournament.game}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tournament.status === "Open"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                    data-testid={`text-status-${tournament.id}`}
                  >
                    {tournament.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="flex items-center gap-2 text-purple-300 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span data-testid={`text-date-${tournament.id}`}>{tournament.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-300 text-xs">
                    <Users className="w-3 h-3" />
                    <span data-testid={`text-participants-${tournament.id}`}>{tournament.participants}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-bold" data-testid={`text-prize-${tournament.id}`}>{tournament.prize}</span>
                  </div>
                  {tournament.status === "Open" && (
                    <button
                      className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover-glow"
                      data-testid={`button-register-${tournament.id}`}
                    >
                      Register
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 glass-effect border-t border-purple-500/20">
        <div className="flex justify-around items-center h-20 max-w-[500px] mx-auto px-5">
          <Link href="/">
            <button className="flex flex-col items-center gap-1 group" data-testid="button-nav-home">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center transition-all group-hover:bg-purple-500/30">
                <img src="/figmaAssets/group-304.png" alt="Home" className="w-6 h-6 opacity-50" />
              </div>
              <span className="text-xs text-purple-500/50 font-medium">Home</span>
            </button>
          </Link>
          <button className="flex flex-col items-center gap-1 group" data-testid="button-nav-tournament">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transition-transform group-hover:scale-110">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-purple-300 font-medium">Tournament</span>
          </button>
          <button className="flex flex-col items-center gap-1 group" data-testid="button-nav-profile">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center transition-all group-hover:bg-purple-500/30">
              <img src="/figmaAssets/group-293.png" alt="Profile" className="w-6 h-6 opacity-50" />
            </div>
            <span className="text-xs text-purple-500/50 font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
