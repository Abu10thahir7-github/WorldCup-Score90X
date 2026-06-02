import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Match } from '@/types';

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition hover:border-brand-400/30 hover:shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{match.round}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">
            {match.homeTeam.name} vs {match.awayTeam.name}
          </h3>
        </div>
        <p className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200">
          {match.status === 'live' ? 'Live' : 'Upcoming'}
        </p>
      </div>
      <div className="mt-6 grid gap-3 rounded-3xl bg-slate-950/70 p-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-slate-400">Kick-off</p>
          <p className="mt-2 text-base font-medium text-white">
            {new Date(match.kickOff).toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-sm text-slate-400">Venue</p>
          <p className="mt-2 text-base font-medium text-white">{match.venue}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <Link
          href={`/matches/${match.id}`}
          className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
        >
          Match details
          <ArrowRight className="h-4 w-4" />
        </Link>
        <div className="text-right text-sm text-slate-400">
          <p>{match.homeTeam.name}</p>
          <p>{match.awayTeam.name}</p>
        </div>
      </div>
    </div>
  );
}
