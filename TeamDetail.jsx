import { useParams, Link } from "react-router-dom";
import { generateTeams, generatePlayers, CONFERENCES, TIERS, SPORTS } from "@/lib/sportsData";
import Sparkline from "@/components/stats/Sparkline";
import { ArrowLeft, Trophy, Users, TrendingUp, TrendingDown, Star } from "lucide-react";
import { motion } from "framer-motion";

function findTeam(teamId) {
  const parts = teamId.split('-');
  if (parts.length < 4) return null;
  const tier = parts[0];
  const sport = parts[1];
  const idx = parseInt(parts[parts.length - 1]);
  const conf = parts.slice(2, -1).join('-');

  const teams = generateTeams(tier, sport, conf);
  return teams[idx] || null;
}

export default function TeamDetail() {
  const { id } = useParams();
  const team = findTeam(decodeURIComponent(id));

  if (!team) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
        <p className="text-muted-foreground text-lg mb-4">Team not found.</p>
        <Link to="/standings" className="text-primary hover:underline font-mono text-sm">
          ← Back to Standings
        </Link>
      </div>
    );
  }

  const tierData = TIERS.find(t => t.id === team.tier);
  const sportData = SPORTS.find(s => s.id === team.sport);
  const players = generatePlayers(team);

  // Generate fake momentum data
  const seed = team.id.length;
  const momentumData = Array.from({ length: 10 }, (_, i) =>
    Math.round(50 + 30 * Math.sin(seed + i * 0.7) + Math.random() * 20)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <Link to="/standings" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-6 transition">
        <ArrowLeft className="w-4 h-4" /> Back to Standings
      </Link>

      {/* Team Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded p-6 md:p-8 mb-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`${tierData?.bg} text-background font-mono text-xs font-bold px-2 py-1 rounded`}>
                {team.tier}
              </span>
              <span className="text-primary font-mono text-xs uppercase tracking-widest">
                {sportData?.icon} {sportData?.name}
              </span>
              <span className="text-muted-foreground font-mono text-xs">{team.conference}</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-1">
              {team.name}
            </h1>
            {team.ranking && (
              <span className="text-primary font-mono text-sm font-bold">Ranked #{team.ranking}</span>
            )}
          </div>

          {/* Quick Stats */}
          <div className="flex gap-6">
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-primary">{team.wins}</div>
              <div className="font-mono text-[10px] text-muted-foreground uppercase">Wins</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-bold">{team.losses}</div>
              <div className="font-mono text-[10px] text-muted-foreground uppercase">Losses</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-bold">{team.winPct}</div>
              <div className="font-mono text-[10px] text-muted-foreground uppercase">PCT</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-bold flex items-center gap-1">
                {team.streak.startsWith('W') ? (
                  <TrendingUp className="w-5 h-5 text-green-500" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-500" />
                )}
                {team.streak}
              </div>
              <div className="font-mono text-[10px] text-muted-foreground uppercase">Streak</div>
            </div>
          </div>
        </div>

        {/* Momentum */}
        <div className="mt-6 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              Last 10 Games Momentum
            </span>
          </div>
          <Sparkline data={momentumData} height={48} />
        </div>
      </motion.div>

      {/* Roster */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card border border-border rounded overflow-hidden"
      >
        <div className="px-4 md:px-6 py-4 border-b border-border flex items-center gap-2">
          <Users className="w-4 h-4 text-primary" />
          <h2 className="font-heading font-bold text-lg uppercase tracking-tight">Roster</h2>
          <span className="text-muted-foreground font-mono text-xs ml-2">({players.length} players)</span>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 px-4 md:px-6 py-2 border-b border-border/50 bg-secondary/10">
          <span className="col-span-1 font-mono text-[10px] text-muted-foreground">#</span>
          <span className="col-span-4 font-mono text-[10px] text-muted-foreground">NAME</span>
          <span className="col-span-2 font-mono text-[10px] text-muted-foreground">POS</span>
          <span className="col-span-1 font-mono text-[10px] text-muted-foreground">YR</span>
          <span className="col-span-4 font-mono text-[10px] text-muted-foreground">KEY STAT</span>
        </div>

        {players.map((player, i) => {
          const mainStat = Object.entries(player.stats)[0];

          return (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.03 }}
            >
              <Link
                to={`/player/${encodeURIComponent(player.id)}`}
                className="grid grid-cols-12 gap-2 px-4 md:px-6 py-2.5 border-b border-border/30 hover:bg-secondary/20 transition items-center"
              >
                <span className="col-span-1 font-mono text-xs text-muted-foreground">{player.number}</span>
                <span className="col-span-4 font-heading font-semibold text-sm truncate hover:text-primary transition">
                  {player.name}
                </span>
                <span className="col-span-2 font-mono text-xs text-muted-foreground">{player.position}</span>
                <span className="col-span-1 font-mono text-xs text-muted-foreground">{player.year}</span>
                <span className="col-span-4 flex items-center gap-1">
                  {mainStat && (
                    <>
                      <span className="font-mono text-sm font-bold text-primary">{mainStat[1]}</span>
                      <span className="font-mono text-[9px] text-muted-foreground uppercase">{mainStat[0]}</span>
                    </>
                  )}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
