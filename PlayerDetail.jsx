import { useParams, Link } from "react-router-dom";
import { generateTeams, generatePlayers, getPlayerRadarData, CONFERENCES, TIERS, SPORTS } from "@/lib/sportsData";
import StatRadar from "@/components/stats/StatRadar";
import { ArrowLeft, Award, Hash, Calendar } from "lucide-react";
import { motion } from "framer-motion";

function findPlayer(playerId) {
  // Parse the player ID to find the team
  const parts = playerId.split('-player-');
  if (parts.length !== 2) return null;
  const teamId = parts[0];
  const teamParts = teamId.split('-');
  if (teamParts.length < 3) return null;

  const tier = teamParts[0];
  const sport = teamParts[1];
  const confParts = teamParts.slice(2, -1).join('-');

  const teams = generateTeams(tier, sport, confParts);
  const teamIdx = parseInt(teamParts[teamParts.length - 1]);
  const team = teams[teamIdx];
  if (!team) return null;

  const players = generatePlayers(team);
  const playerIdx = parseInt(parts[1]);
  return players[playerIdx] || null;
}

export default function PlayerDetail() {
  const { id } = useParams();
  const player = findPlayer(decodeURIComponent(id));

  if (!player) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
        <p className="text-muted-foreground text-lg mb-4">Player not found.</p>
        <Link to="/players" className="text-primary hover:underline font-mono text-sm">
          ← Back to Players
        </Link>
      </div>
    );
  }

  const tierData = TIERS.find(t => t.id === player.tier);
  const sportData = SPORTS.find(s => s.id === player.sport);
  const radarData = getPlayerRadarData(player);
  const stats = Object.entries(player.stats);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <Link to="/players" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-6 transition">
        <ArrowLeft className="w-4 h-4" /> Back to Players
      </Link>

      {/* Player Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded p-6 md:p-8 mb-8"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`${tierData?.bg} text-background font-mono text-xs font-bold px-2 py-1 rounded`}>
                {player.tier}
              </span>
              <span className="text-primary font-mono text-xs uppercase tracking-widest">
                {sportData?.icon} {sportData?.name}
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-2">
              {player.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1.5">
                <Hash className="w-4 h-4" /> {player.number}
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4" /> {player.position}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {player.year}
              </span>
            </div>

            <p className="text-muted-foreground text-sm mt-2">{player.team}</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded p-6"
        >
          <h2 className="font-heading font-bold text-lg uppercase tracking-tight mb-4">
            Performance Matrix
          </h2>
          <StatRadar data={radarData} />
        </motion.div>

        {/* Stat Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded p-6"
        >
          <h2 className="font-heading font-bold text-lg uppercase tracking-tight mb-4">
            Season Statistics
          </h2>
          <div className="space-y-3">
            {stats.map(([key, val], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center justify-between py-2 border-b border-border/30"
              >
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {key}
                </span>
                <span className="font-mono text-lg font-bold text-primary">
                  {val}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
