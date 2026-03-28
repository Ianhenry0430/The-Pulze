import { generateTeams, CONFERENCES } from "@/lib/sportsData";
import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function QuickStandings({ tier, sport }) {
  const conferences = CONFERENCES[tier]?.[sport] || [];
  const topConference = conferences[0];

  if (!topConference) {
    return (
      <div className="bg-card border border-border rounded p-6">
        <p className="text-muted-foreground text-sm">No standings data available for this tier/sport combination.</p>
      </div>
    );
  }

  const teams = generateTeams(tier, sport, topConference);

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-heading font-bold text-xl uppercase tracking-tight">Standings</h2>
          <p className="text-muted-foreground font-mono text-xs mt-0.5">{topConference} Conference</p>
        </div>
        <Link to="/standings" className="flex items-center gap-1 text-primary text-xs font-mono uppercase tracking-wider hover:underline">
          Full Standings <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="bg-card border border-border rounded overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-12 gap-2 px-4 py-2.5 border-b border-border bg-secondary/30">
          <span className="col-span-1 font-mono text-[10px] text-muted-foreground uppercase">#</span>
          <span className="col-span-5 font-mono text-[10px] text-muted-foreground uppercase">Team</span>
          <span className="col-span-1 font-mono text-[10px] text-muted-foreground uppercase text-center">W</span>
          <span className="col-span-1 font-mono text-[10px] text-muted-foreground uppercase text-center">L</span>
          <span className="col-span-2 font-mono text-[10px] text-muted-foreground uppercase text-center">PCT</span>
          <span className="col-span-2 font-mono text-[10px] text-muted-foreground uppercase text-center">STRK</span>
        </div>

        {/* Rows */}
        {teams.slice(0, 8).map((team, i) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={`/team/${encodeURIComponent(team.id)}`}
              className="grid grid-cols-12 gap-2 px-4 py-2.5 border-b border-border/50 hover:bg-secondary/20 transition items-center"
            >
              <span className="col-span-1 font-mono text-xs text-muted-foreground">{i + 1}</span>
              <span className="col-span-5 font-heading font-semibold text-sm truncate">
                {team.ranking && (
                  <span className="text-primary font-mono text-[10px] mr-1.5">#{team.ranking}</span>
                )}
                {team.name}
              </span>
              <span className="col-span-1 font-mono text-xs text-center font-bold">{team.wins}</span>
              <span className="col-span-1 font-mono text-xs text-center text-muted-foreground">{team.losses}</span>
              <span className="col-span-2 font-mono text-xs text-center">{team.winPct}</span>
              <span className="col-span-2 font-mono text-xs text-center flex items-center justify-center gap-1">
                {team.streak.startsWith('W') ? (
                  <TrendingUp className="w-3 h-3 text-green-500" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-500" />
                )}
                {team.streak}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
