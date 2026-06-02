'use client';

import { SectionTitle } from '@/components/shared/section-title';
import { LiveMatchCard } from '@/components/matches/live-match-card';
import { useLiveMatches } from '@/hooks/use-live-matches';
import { ErrorMessage } from '@/components/shared/error-message';

export default function LiveMatchesPage() {
  const { data, isError, isLoading } = useLiveMatches();

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <SectionTitle
        title="Live matches"
        description="Follow each ongoing FIFA World Cup 2026 clash."
      />
      {isError && <ErrorMessage />}
      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-64 rounded-3xl bg-slate-800/80" />
          <div className="h-64 rounded-3xl bg-slate-800/80" />
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data?.length ? (
            data.map((match) => <LiveMatchCard key={match.id} match={match} />)
          ) : (
            <p className="text-slate-400">No live matches right now.</p>
          )}
        </div>
      )}
    </div>
  );
}
