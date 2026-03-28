import { generateTopPlayers, TIERS } from "@/lib/sportsData";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TopPlayersSection({ tier, sport }) {
  const players = generateTopPlayers(tier, sport);
  const tierData = TIERS.find(t => t.id === tier);

  if (players.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading font-bold text-xl uppercase tracking-tight">Top Players</h2>
        <Link to="/players" className="flex items-center gap-1 text-primary text-xs font-mono uppercase tracking-wider hover:underline">
          View All <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {players.slice(0, 6).map((player, i) => {
          const mainStat = Object.entries(player.stats)[0];

          return (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/player/${encodeURIComponent(player.id)}`}
                className="block bg-card border border-border rounded p-4 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      {i < 3 && <Star className="w-3 h-3 text-primary fill-primary" />}
                      <span className="font-heading font-bold text-sm group-hover:text-primary transition">
                        {player.name}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      #{player.number} · {player.position} · {player.year}
                    </p>
                  </div>
                  <span className={`${tierData?.bg} text-background font-mono text-[9px] font-bold px-1.5 py-0.5 rounded`}>
                    {tier}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs truncate mr-2">{player.team}</span>
                  {mainStat && (
                    <div className="flex items-baseline gap-1 flex-shrink-0">
                      <span className="font-mono text-lg font-bold text-primary">{mainStat[1]}</span>
                      <span className="font-mono text-[9px] text-muted-foreground uppercase">{mainStat[0]}</span>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
