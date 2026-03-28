import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function StatRadar({ data, color = "hsl(185, 100%, 49%)" }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full h-64 md:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="hsl(0, 0%, 20%)" />
          <PolarAngleAxis
            dataKey="stat"
            tick={{ fill: 'hsl(0, 0%, 55%)', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Stats"
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
