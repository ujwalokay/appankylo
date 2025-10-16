import { Link } from "wouter";
import { ArrowLeft, Tag, Calendar, Gift, Percent, Clock, Trophy } from "lucide-react";

export default function Offers() {
  const offers = [
    {
      id: "1",
      title: "Weekend Gaming Blast",
      cafe: "GameZone Arena",
      discount: "30% OFF",
      description: "Get 30% off on all PC and PS5 gaming sessions this weekend!",
      validUntil: "Oct 22, 2025",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop",
      type: "discount",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "2",
      title: "Student Special",
      cafe: "Pixel Palace",
      discount: "₹50/hour",
      description: "Students get flat ₹50/hour rate! Show your student ID.",
      validUntil: "Oct 31, 2025",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop",
      type: "special",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "3",
      title: "Free Tournament Entry",
      cafe: "Elite Esports Hub",
      discount: "FREE",
      description: "Book 5 hours and get free entry to our weekly tournament!",
      validUntil: "Oct 20, 2025",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop",
      type: "tournament",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: "4",
      title: "Midnight Gaming Deal",
      cafe: "GameZone Arena",
      discount: "40% OFF",
      description: "Night owls rejoice! 40% off from 12 AM to 6 AM.",
      validUntil: "Oct 25, 2025",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop",
      type: "discount",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: "5",
      title: "Birthday Bonanza",
      cafe: "Pixel Palace",
      discount: "2 Hours FREE",
      description: "It's your birthday? Get 2 hours of gaming absolutely free!",
      validUntil: "Dec 31, 2025",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop",
      type: "special",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: "6",
      title: "Squad Savings",
      cafe: "Elite Esports Hub",
      discount: "25% OFF",
      description: "Bring 3+ friends and save 25% on group bookings!",
      validUntil: "Oct 30, 2025",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop",
      type: "discount",
      color: "from-green-500 to-emerald-500"
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
                Special Offers
              </h1>
              <p className="text-purple-300 text-sm">Exclusive deals & promotions</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="mx-5 mt-6 mb-6 relative overflow-hidden rounded-3xl h-40 glass-effect border border-purple-500/30 animate-slide-in-up">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-pink-600/80 flex items-center justify-between px-6">
          <div>
            <h2 className="text-white text-2xl font-bold mb-2">Save Big!</h2>
            <p className="text-purple-100 text-sm">Limited time offers on gaming sessions</p>
          </div>
          <Gift className="w-20 h-20 text-yellow-400 animate-float" />
        </div>
      </div>

      {/* Offers Grid */}
      <div className="px-5 space-y-4">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className="glass-effect rounded-2xl border border-purple-500/30 hover-glow animate-slide-in-up overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
            data-testid={`card-offer-${offer.id}`}
          >
            {/* Offer Image with Gradient Overlay */}
            <div className="relative h-32 overflow-hidden">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${offer.color} opacity-80`}></div>
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <span className="text-white font-bold text-sm">{offer.discount}</span>
              </div>
            </div>

            {/* Offer Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1" data-testid={`text-offer-title-${offer.id}`}>
                    {offer.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-3 h-3 text-purple-400" />
                    <span className="text-purple-300 text-sm" data-testid={`text-cafe-${offer.id}`}>
                      {offer.cafe}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-purple-200 text-sm mb-3" data-testid={`text-description-${offer.id}`}>
                {offer.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-purple-300">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs">Valid until {offer.validUntil}</span>
                </div>
                <button
                  className={`px-4 py-1.5 rounded-lg bg-gradient-to-r ${offer.color} text-white text-sm font-semibold hover-glow`}
                  data-testid={`button-claim-${offer.id}`}
                >
                  Claim Offer
                </button>
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
          <Link href="/tournament">
            <button className="flex flex-col items-center gap-1 group" data-testid="button-nav-tournament">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center transition-all group-hover:bg-purple-500/30">
                <Trophy className="w-6 h-6 text-purple-500/50" />
              </div>
              <span className="text-xs text-purple-500/50 font-medium">Tournament</span>
            </button>
          </Link>
          <button className="flex flex-col items-center gap-1 group" data-testid="button-nav-offers">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transition-transform group-hover:scale-110">
              <Percent className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-purple-300 font-medium">Offers</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
