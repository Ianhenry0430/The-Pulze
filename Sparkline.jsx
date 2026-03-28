import { Line, LineChart, ResponsiveContainer } from 'recharts';

export default function Sparkline({ data, color = "hsl(185, 100%, 49%)", height = 40 }) {
  if (!data || data.length === 0) return null;

  const chartData = data.map((value, i) => ({ idx: i, value }));

  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
