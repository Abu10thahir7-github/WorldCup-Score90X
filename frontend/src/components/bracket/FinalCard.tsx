'use client';

import Image from 'next/image';
import { BracketMatch } from '@/types/bracket';
import { CalendarDays, Clock3 } from 'lucide-react';

interface FinalCardProps {
  match?: BracketMatch;
}

export default function FinalCard({ match }: FinalCardProps) {
  if (!match) {
    return (
      <div className="w-64 !h-fit rounded-3xl border border-slate-200 bg-navy-blue shadow-sm">
        <div className="p-6 text-center">
          <p className="text-lg font-bold">Final</p>

          <div className="mt-8 space-y-4">
            <div className="h-8 rounded bg-slate-100 animate-pulse" />
            <div className="h-8 rounded bg-slate-100 animate-pulse" />
          </div>

          <div className="mt-8 text-sm text-slate-400">Awaiting finalists</div>
        </div>
      </div>
    );
  }

  const date = new Date(match.utcDate);

  const homeScore = match.score.fullTime.home;
  const awayScore = match.score.fullTime.away;

  return (
    <div className="w-72 rounded-3xl border border-slate-200 bg-white shadow-md transition hover:shadow-xl">
      {/* Header */}

      <div className="border-b px-6 py-4 text-center">
        <h2 className="text-xl font-bold text-slate-900">🏆 Final</h2>
      </div>

      {/* Date */}

      <div className="flex items-center justify-center gap-2 pt-4 text-sm text-slate-500">
        <CalendarDays size={16} />
        {date.toLocaleDateString()}
      </div>

      <div className="flex items-center justify-center gap-2 pb-5 text-2xl font-bold">
        <Clock3 size={18} />
        {date.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>

      {/* Teams */}

      <div className="space-y-4 px-6">
        {/* Home */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={match.homeTeam.crest}
              alt={match.homeTeam.name}
              width={34}
              height={34}
              unoptimized
            />

            <span className="font-semibold">{match.homeTeam.name}</span>
          </div>

          <span className="text-2xl font-bold">{homeScore ?? '-'}</span>
        </div>

        {/* Away */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={match.awayTeam.crest}
              alt={match.awayTeam.name}
              width={34}
              height={34}
              unoptimized
            />

            <span className="font-semibold">{match.awayTeam.name}</span>
          </div>

          <span className="text-2xl font-bold">{awayScore ?? '-'}</span>
        </div>
      </div>

      {/* Status */}

      <div className="mt-6 border-t px-6 py-4">
        <div
          className={`rounded-full py-2 text-center text-sm font-semibold
            ${
              match.status === 'FINISHED'
                ? 'bg-green-100 text-green-700'
                : match.status === 'LIVE'
                  ? 'bg-red-100 text-red-600'
                  : 'bg-slate-100 text-slate-600'
            }`}
        >
          {match.status}
        </div>
      </div>
    </div>
  );
}
