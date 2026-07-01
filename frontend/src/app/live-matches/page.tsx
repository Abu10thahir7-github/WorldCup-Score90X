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
    (match) =>
      new Date(match.utcDate).toLocaleDateString('en-CA') === today
  );

  const liveMatches = todayMatches.filter((match) =>
    ['IN_PLAY', 'PAUSED'].includes(match.status)
  );

  const finishedMatches = todayMatches.filter(
    (match) => match.status === 'finished'
  );

  const upcomingMatches = todayMatches.filter((match) =>
    ['TIMED', 'SCHEDULED'].includes(match.status)
  );

  return (
    <div className='w-full   flex gap-2 p-3.5'>


    <div className="w-full">
      <SectionTitle
        title="Today's Matches"
        description="Follow all FIFA World Cup 2026 matches happening today."
      />

      {isError && <ErrorMessage />}

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-64 rounded-3xl bg-slate-800/80 animate-pulse" />
          <div className="h-64 rounded-3xl bg-slate-800/80 animate-pulse" />
        </div>
      ) : (
        <div className="space-y-3">
          {/* Live Matches */}
          <section className='border border-red-600/50 bg-red-600/20 p-3 rounded-xl '>
            <h2 className="mb-4 flex items-center gap-2 text-sm font-medium text-red-500">
              <Radio size={18} /> Live Matches ({liveMatches.length})
            </h2>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {liveMatches.length > 0 ? (
                liveMatches.map((match) => (
                  <LiveMatchCard
                    key={match.id}
                    match={match}
                  />
                ))
              ) : (
                <p className="text-slate-400">
                  No live matches right now.
                </p>
              )}
            </div>
          </section>

          {/* Upcoming Matches */}
          <section>
            <h2 className="mb-4 text-sm flex items-center gap-2 font-medium text-yellow-400">
            <ClockFadingIcon size={18} /> Upcoming Matches ({upcomingMatches.length})
            </h2>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {upcomingMatches.length > 0 ? (
                upcomingMatches.map((match) => (
                  <LiveMatchCard
                    key={match.id}
                    match={match}
                  />
                ))
              ) : (
                <p className="text-slate-400">
                  No upcoming matches today.
                </p>
              )}
            </div>
          </section>

          {/* Finished Matches */}
          <section>
            <h2 className="mb-4 text-sm flex items-center gap-2 font-medium text-green-500">
              <ClipboardCheck  size={18} /> Finished Matches ({finishedMatches.length})
            </h2>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {finishedMatches.length > 0 ? (
                finishedMatches.map((match) => (
                  <LiveMatchCard
                    key={match.id}
                    match={match}
                  />
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
    </div>
    <div className='space-y-1 h-fit   top-2.5 sticky w-[25%]'>
<MiniGroupOverview />
<MiniTeamSection />
    </div>
     </div>
  );
}