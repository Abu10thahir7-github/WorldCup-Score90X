import { ResponsiveContainer, Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';
import type { Match } from '@/types';

interface ScoreBoardProps {
  matches: Match[];
}

export function ScoreBoard({ matches }: ScoreBoardProps) {
  const safeMatches = Array.isArray(matches) ? matches : [];

const chartData = safeMatches.slice(0, 6).map((match) => ({
  label: `${match.homeTeam.name} vs ${match.awayTeam.name}`,
  total:
    (match.score?.fullTime?.home ?? 0) +
    (match.score?.fullTime?.away ?? 0),
}));
  return (
    <div className="h-[320px] rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Scoreboard</p>
          <h3 className="text-xl font-semibold text-white">Match goal trends</h3>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#818cf8" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="label"
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            interval={0}
            angle={-30}
            textAnchor="end"
            height={75}
          />
          <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={false} axisLine={false} />
          <Tooltip
            wrapperClassName="rounded-3xl bg-slate-950/95 text-slate-100 shadow-soft"
            contentStyle={{ border: 'none', background: 'transparent' }}
          />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8b5cf6"
            fill="url(#scoreGradient)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
