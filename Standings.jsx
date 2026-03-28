import { useOutletContext } from "react-router-dom";
import { generateTeams, CONFERENCES, TIERS, SPORTS } from "@/lib/sportsData";
import Sparkline from "@/components/stats/Sparkline";
import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Standings() {
  const { activeTier, activeSport } = useOutletContext();
  const conferences = CONFERENCES[activeTier]?.[activeSport] || [];
  const tierData = TIERS.find(t => t.id === activeTier);
  const sportData = SPORTS.find(s => s.id === activeSport);
  const [selectedConf, setSelectedConf] = useState(null);

  const displayConferences = selectedConf ? [selectedConf] : conferences;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-5 h-5 text-primary" />
          <h1 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight">
            Standings
          </h1>
        </div>
        <p className="text-muted-foreground text-sm">
          <span className={tierData?.color}>{tierData?.name}</span> · {sportData?.icon} {sportData?.name}
        </p>
      </div>

      {/* Conference Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedConf(null)}
          className={`px-3 py-1.5 rounded font-mono text-xs font-semibold uppercase tracking-wider transition ${
            selectedConf === null ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'
          }`}
        >
          All
        </button>
        {conferences.map(conf => (
          <button
            key={conf}
            onClick={() => setSelectedConf(conf)}
            className={`px-3 py-1.5 rounded font-mono text-xs font-semibold uppercase tracking-wider transition ${
              selectedConf === conf ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            {conf}
          </button>
        ))}
      </div>

      {/* Standings Tables */}
      <div className="space-y-8">
        {displayConferences.map(conf => {
          const teams = generateTeams(activeTier, activeSport, conf);

          return (
            <motion.div
              key={conf}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-border bg-secondary/30 flex items-center justify-between">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider">
                  {conf}
                </h3>
                <span className={`${tierData?.color} font-mono text-[10px] uppercase tracking-widest`}>
                  {activeTier}
                </span>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-12 gap-2 px-4 py-2 border-b border-border/50 bg-secondary/10">
                <span className="col-span-1 font-mono text-[10px] text-muted-foreground">#</span>
                <span className="col-span-4 font-mono text-[10px] text-muted-foreground">TEAM</span>
                <span className="col-span-1 font-mono text-[10px] text-muted-foreground text-center">W</span>
                <span className="col-span-1 font-mono text-[10px] text-muted-foreground text-center">L</span>
                <span className="col-span-1 font-mono text-[10px] text-muted-foreground text-center">PCT</span>
                <span className="col-span-1 font-mono text-[10px] text-muted-foreground text-center">CONF</span>
                <span className="col-span-1 font-mono text-[10px] text-muted-foreground text-center">STRK</span>
                <span className="col-span-2 font-mono text-[10px] text-muted-foreground text-center">FORM</span>
              </div>

              {/* Rows */}
              {teams.map((team, i) => {
                // Generate fake "last 10" form data
                const seed = team.id.length + i;
                const formData = Array.from({ length: 10 }, (_, j) =>
                  Math.sin(seed + j * 0.8) > -0.3 ? 1 : 0
                );

                return (
                  <Link
                    key={team.id}
                    to={`/team/${encodeURIComponent(team.id)}`}
                    className="grid grid-cols-12 gap-2 px-4 py-2.5 border-b border-border/30 hover:bg-secondary/20 transition items-center"
                  >
                    <span className="col-span-1 font-mono text-xs text-muted-foreground">{i + 1}</span>
                    <span className="col-span-4 font-heading font-semibold text-sm truncate">
                      {team.ranking && (
                        <span className="text-primary font-mono text-[10px] mr-1">#{team.ranking}</span>
                      )}
                      {team.name}
                    </span>
                    <span className="col-span-1 font-mono text-xs text-center font-bold">{team.wins}</span>
                    <span className="col-span-1 font-mono text-xs text-center text-muted-foreground">{team.losses}</span>
                    <span className="col-span-1 font-mono text-xs text-center">{team.winPct}</span>
                    <span className="col-span-1 font-mono text-[10px] text-center text-muted-foreground">
                      {team.confWins}-{team.confLosses}
                    </span>
                    <span className="col-span-1 font-mono text-xs text-center flex items-center justify-center gap-0.5">
                      {team.streak.startsWith('W') ? (
                        <TrendingUp className="w-3 h-3 text-green-500" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-500" />
                      )}
                      <span className="text-[10px]">{team.streak}</span>
                    </span>
                    <div className="col-span-2">
                      <Sparkline data={formData} height={24} />
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          );
        })}
      </div>

      {conferences.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No conferences available for this tier/sport combination.</p>
        </div>
      )}
    </div>
  );
}
