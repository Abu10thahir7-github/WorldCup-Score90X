'use client';

import Link from 'next/link';
import { SectionTitle } from '@/components/shared/section-title';
import { useTopScorers } from '@/hooks/use-top-scorers';
import { ErrorMessage } from '@/components/shared/error-message';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';

export default function TopScorersPage() {
  const { data, isError, isLoading } = useTopScorers();

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <SectionTitle
        title="Top scorers"
        description="See the players shaping the World Cup goal race."
      />
      {isError && <ErrorMessage />}
      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-48 rounded-3xl bg-slate-800/80" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data?.map((scorer) => (
            <Link
              key={scorer.playerId}
              href={`/players/${scorer.playerId}`}
              className="group rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft transition hover:border-slate-700 hover:bg-slate-900"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                {scorer.teamName}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{scorer.playerName}</h3>
              <div className="mt-4 grid gap-2 text-slate-300">
                <p>
                  Goals: <span className="font-semibold text-white">{scorer.goals}</span>
                </p>
                <p>
                  Assists: <span className="font-semibold text-white">{scorer.assists}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
