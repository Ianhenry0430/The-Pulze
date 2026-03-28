import { useOutletContext } from "react-router-dom";
import HeroSection from "@/components/home/HeroSection";
import NewsFeed from "@/components/home/NewsFeed";
import QuickStandings from "@/components/home/QuickStandings";
import TopPlayersSection from "@/components/home/TopPlayersSection";
import ConferenceExplorer from "@/components/home/ConferenceExplorer";
import { TIERS, SPORTS } from "@/lib/sportsData";

export default function Home() {
  const { activeTier, activeSport } = useOutletContext();
  const tierData = TIERS.find(t => t.id === activeTier);
  const sportData = SPORTS.find(s => s.id === activeSport);

  return (
    <div>
      <HeroSection tier={activeTier} sport={activeSport} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
        {/* Tier/Sport Indicator */}
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <span className={`${tierData?.bg} text-background font-mono text-xs font-bold px-2.5 py-1 rounded`}>
            {tierData?.short}
          </span>
          <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest">
            {sportData?.icon} {sportData?.name}
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest">
            2025-26 Season
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - News */}
          <div className="lg:col-span-2">
            <NewsFeed tier={activeTier} sport={activeSport} />
          </div>

          {/* Right Column - Standings */}
          <div>
            <QuickStandings tier={activeTier} sport={activeSport} />
          </div>
        </div>

        {/* Top Players */}
        <TopPlayersSection tier={activeTier} sport={activeSport} />

        {/* Conference Explorer */}
        <ConferenceExplorer tier={activeTier} sport={activeSport} />
      </div>
    </div>
  );
}
