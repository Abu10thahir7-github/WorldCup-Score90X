import type { Match } from '@/types';

interface LiveMatchCardProps {
  match: Match;
}

export function LiveMatchCard({ match }: LiveMatchCardProps) {
  return (
    <div className="rounded-3xl border border-rose-500/20 bg-rose-500/5 p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-rose-300">Live now</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            {match.homeTeam.name} vs {match.awayTeam.name}
          </h3>
        </div>
        <div className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-100">
          {match.score.home} - {match.score.away}
        </div>
      </div>
      <div className="mt-5 grid gap-3 rounded-3xl bg-slate-950/70 p-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-slate-400">Venue</p>
          <p className="mt-2 font-medium text-white">{match.venue}</p>
        </div>
        <div>
          <p className="text-sm text-slate-400">Kick-off</p>
          <p className="mt-2 font-medium text-white">
            {new Date(match.kickOff).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
}
