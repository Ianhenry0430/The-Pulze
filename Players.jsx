import { useOutletContext } from "react-router-dom";
import { generateTopPlayers, TIERS, SPORTS, getStatLabels } from "@/lib/sportsData";
import { Link } from "react-router-dom";
import { Users, Star, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Players() {
  const { activeTier, activeSport } = useOutletContext();
  const tierData = TIERS.find(t => t.id === activeTier);
  const sportData = SPORTS.find(s => s.id === activeSport);

  // Get players across all tiers for the active sport
  const allPlayers = TIERS.flatMap(tier =>
    generateTopPlayers(tier.id, activeSport)
  );

  const statLabels = getStatLabels(activeSport);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-5 h-5 text-primary" />
          <h1 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight">
            Top Players
          </h1>
        </div>
        <p className="text-muted-foreground text-sm">
          {sportData?.icon} {sportData?.name} · All Tiers
        </p>
      </div>

      {/* Player Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPlayers.map((player, i) => {
          const pTier = TIERS.find(t => t.id === player.tier);
          const stats = Object.entries(player.stats).slice(0, 4);

          return (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to={`/player/${encodeURIComponent(player.id)}`}
                className="block bg-card border border-border rounded p-5 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      {i < 3 && <Star className="w-3.5 h-3.5 text-primary fill-primary" />}
                      <span className="font-heading font-bold text-base group-hover:text-primary transition">
                        {player.name}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      #{player.number} · {player.position} · {player.year}
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">{player.team}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`${pTier?.bg} text-background font-mono text-[9px] font-bold px-1.5 py-0.5 rounded`}>
                      {player.tier}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-2 mt-3 pt-3 border-t border-border/50">
                  {stats.map(([key, val]) => (
                    <div key={key} className="text-center">
                      <div className="font-mono text-sm font-bold text-primary">{val}</div>
                      <div className="font-mono text-[9px] text-muted-foreground uppercase">{key}</div>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {allPlayers.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No player data available for this sport.</p>
        </div>
      )}
    </div>
  );
}
