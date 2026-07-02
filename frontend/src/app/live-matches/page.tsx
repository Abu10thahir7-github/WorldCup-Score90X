'use client';

import { SectionTitle } from '@/components/shared/section-title';
import { LiveMatchCard } from '@/components/matches/live-match-card';
import { useLiveMatches } from '@/hooks/use-live-matches';
import { ErrorMessage } from '@/components/shared/error-message';
import { ClipboardCheck, ClockFadingIcon, Radio } from 'lucide-react';
import MiniGroupOverview from '@/components/OverView.tsx/miniGroupOverview';
import MiniTeamSection from '@/components/ui/MiniTeamSection';

export default function LiveMatchesPage() {
  const { data, isError, isLoading } = useLiveMatches();

  const matches = data || [];

  const today = new Date().toLocaleDateString('en-CA');

  const todayMatches = matches.filter(
    (match) => new Date(match.utcDate).toLocaleDateString('en-CA') === today,
  );

  const liveMatches = todayMatches.filter((match) => ['IN_PLAY', 'PAUSED'].includes(match.status));

  const finishedMatches = todayMatches.filter((match) => match.status === 'FINISHED');

  const upcomingMatches = todayMatches.filter((match) =>
    ['TIMED', 'SCHEDULED'].includes(match.status),
  );

  return (
  <div className="mx-auto flex   flex-col gap-6 p-4 lg:flex-row lg:items-start">

    {/* Main Content */}
    <main className="w-full lg:flex-1">
      <SectionTitle
        title="Today's Matches"
        description="Follow all FIFA World Cup 2026 matches happening today."
      />

      {isError && <ErrorMessage />}

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="h-64 animate-pulse rounded-3xl bg-slate-800/80" />
          <div className="h-64 animate-pulse rounded-3xl bg-slate-800/80" />
          <div className="hidden xl:block h-64 animate-pulse rounded-3xl bg-slate-800/80" />
        </div>
      ) : (
        <div className="space-y-8">

          {/* Live */}
          <section className="rounded-2xl ">
            <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold text-red-400">
              <Radio size={18} />
              Live Matches ({liveMatches.length})
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {liveMatches.length ? (
                liveMatches.map((match) => (
                  <div className='border border-red-500/30 bg-red-500/10 p-2'>

                  <LiveMatchCard key={match.id} match={match} />
                  </div>
                ))
              ) : (
                <p className="text-slate-400">
                  No live matches right now.
                </p>
              )}
            </div>
          </section>

          {/* Upcoming */}
          <section>
            <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold text-yellow-400">
              <ClockFadingIcon size={18} />
              Upcoming Matches ({upcomingMatches.length})
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {upcomingMatches.length ? (
                upcomingMatches.map((match) => (
                  <LiveMatchCard key={match.id} match={match} />
                ))
              ) : (
                <p className="text-slate-400">
                  No upcoming matches today.
                </p>
              )}
            </div>
          </section>

          {/* Finished */}
          <section>
            <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold text-green-400">
              <ClipboardCheck size={18} />
              Finished Matches ({finishedMatches.length})
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {finishedMatches.length ? (
                finishedMatches.map((match) => (
                  <LiveMatchCard key={match.id} match={match} />
                ))
              ) : (
                <p className="text-slate-400">
                  No finished matches today.
                </p>
              )}
            </div>
          </section>

        </div>
      )}
    </main>

    {/* Sidebar */}
    <aside className="w-full lg:sticky lg:top-4 lg:w-[320px] lg:flex-shrink-0">
      <div className="space-y-4">
        <MiniGroupOverview />
        <MiniTeamSection />
      </div>
    </aside>

  </div>
);
}
