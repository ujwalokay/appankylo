import { Link } from "wouter";
import { Trophy, Calendar, Users, Award, ChevronRight, ArrowLeft, MapPin, Clock, BookOpen, Shield, Info, Percent } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Tournament() {
  const [selectedTournament, setSelectedTournament] = useState<string | null>(null);

  const tournaments = [
    {
      id: "1",
      name: "Valorant Championship",
      game: "Valorant",
      date: "Oct 20, 2025",
      time: "3:00 PM - 8:00 PM",
      prize: "₹10,000",
      participants: "32/64",
      status: "Open",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop",
      description: "Join the ultimate Valorant showdown! Compete against the best teams in the region for glory and prizes.",
      venue: "GameZone Arena, Dombivli West",
      entryFee: "₹200 per team",
      format: "5v5 Team Battle",
      rules: [
        "Teams must have 5 players + 1 substitute",
        "All matches will be Best of 3 format",
        "Standard competitive ruleset applies",
        "No cheating or exploits allowed",
        "Players must arrive 30 minutes before match time"
      ],
      regulations: [
        "Valid ID proof required for all participants",
        "Age limit: 16 years and above",
        "Tournament organizers' decision is final",
        "Prize money will be distributed within 7 days",
        "Players must maintain professional conduct"
      ]
    },
    {
      id: "2",
      name: "FIFA Pro League",
      game: "FIFA 24",
      date: "Oct 25, 2025",
      time: "2:00 PM - 7:00 PM",
      prize: "₹5,000",
      participants: "16/32",
      status: "Open",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop",
      description: "Show off your FIFA skills in our Pro League tournament. Compete in 1v1 matches for the championship title.",
      venue: "Pixel Palace, Dombivli East",
      entryFee: "₹150 per player",
      format: "1v1 Single Elimination",
      rules: [
        "6-minute halves with default difficulty settings",
        "No use of legacy defending",
        "Teams from current season only",
        "Single elimination format",
        "Connection issues: 1 rematch allowed"
      ],
      regulations: [
        "Players must use their own PSN/EA account",
        "Age limit: 14 years and above",
        "Unsportsmanlike conduct will lead to disqualification",
        "No outside coaching during matches",
        "Prizes awarded immediately after finals"
      ]
    },
    {
      id: "3",
      name: "Call of Duty Battle",
      game: "COD Warzone",
      date: "Oct 18, 2025",
      time: "4:00 PM - 9:00 PM",
      prize: "₹8,000",
      participants: "64/64",
      status: "Full",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop",
      description: "Battle Royale supremacy! Drop into Warzone and fight your way to the top in this high-stakes tournament.",
      venue: "Elite Esports Hub, Dombivli West",
      entryFee: "₹300 per squad",
      format: "Squad Battle Royale (4 players)",
      rules: [
        "Squads of 4 players each",
        "3 matches - cumulative scoring",
        "Kills and placement both count for points",
        "Default Warzone settings apply",
        "Stream sniping will result in disqualification"
      ],
      regulations: [
        "All players must have Battle.net accounts",
        "Age limit: 18 years and above",
        "No third-party software allowed",
        "Recording of matches may be required",
        "Disputes handled by tournament officials"
      ]
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
            className="glass-effect rounded-2xl border border-purple-500/30 hover-glow animate-slide-in-up overflow-hidden cursor-pointer transition-transform active:scale-[0.98]"
            style={{ animationDelay: `${index * 0.1}s` }}
            data-testid={`card-tournament-${tournament.id}`}
            onClick={() => setSelectedTournament(tournament.id)}
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

      {/* Tournament Details Dialog */}
      <Dialog open={selectedTournament !== null} onOpenChange={(open) => !open && setSelectedTournament(null)}>
        <DialogContent className="bg-[hsl(258,68%,10%)] border-purple-500/30 text-white max-w-[95vw] max-h-[90vh] overflow-y-auto">
          {selectedTournament && (() => {
            const tournament = tournaments.find(t => t.id === selectedTournament);
            if (!tournament) return null;
            
            return (
              <>
                <DialogHeader>
                  <div className="relative w-full h-40 -mx-6 -mt-6 mb-4">
                    <img
                      src={tournament.image}
                      alt={tournament.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(258,68%,10%)] via-transparent to-transparent" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white">{tournament.name}</DialogTitle>
                  <DialogDescription className="text-purple-300">
                    {tournament.game}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Basic Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Info className="w-5 h-5 text-purple-400" />
                      <h3 className="text-lg font-semibold text-white">Tournament Information</h3>
                    </div>
                    <p className="text-purple-200 mb-4">{tournament.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-purple-300">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{tournament.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-300">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{tournament.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{tournament.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-300">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{tournament.participants} Players</span>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-purple-300">Prize Pool:</span>
                        <span className="text-yellow-400 font-bold text-xl">{tournament.prize}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-purple-300">Entry Fee:</span>
                        <span className="text-white font-semibold">{tournament.entryFee}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-300">Format:</span>
                        <span className="text-white font-semibold">{tournament.format}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rules */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-purple-400" />
                      <h3 className="text-lg font-semibold text-white">Tournament Rules</h3>
                    </div>
                    <ul className="space-y-2">
                      {tournament.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-purple-200">
                          <span className="text-purple-400 mt-1">•</span>
                          <span className="text-sm">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Regulations */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-purple-400" />
                      <h3 className="text-lg font-semibold text-white">Regulations</h3>
                    </div>
                    <ul className="space-y-2">
                      {tournament.regulations.map((regulation, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-purple-200">
                          <span className="text-purple-400 mt-1">•</span>
                          <span className="text-sm">{regulation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Register Button */}
                  {tournament.status === "Open" && (
                    <button
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover-glow"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`Registration for ${tournament.name} coming soon!`);
                      }}
                    >
                      Register Now
                    </button>
                  )}
                  {tournament.status === "Full" && (
                    <div className="w-full py-3 rounded-xl bg-red-500/20 text-red-400 font-bold text-center border border-red-500/30">
                      Tournament Full
                    </div>
                  )}
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
}
