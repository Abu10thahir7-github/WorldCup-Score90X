'use client';

import { ArrowRight } from 'lucide-react';
import { LiveMatchCard } from '@/components/matches/live-match-card';
import { MatchCard } from '@/components/matches/match-card';
import { ScoreBoard } from '@/components/matches/scoreboard';
import { SectionTitle } from '@/components/shared/section-title';
import { useLiveMatches } from '@/hooks/use-live-matches';
import { useMatches } from '@/hooks/use-matches';

export default function HomePage() {
  const { data: liveData } = useLiveMatches();
  const { data: scheduleData } = useMatches();

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-300">Score90X</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              FIFA World Cup 2026 live score experience.
            </h1>
            <p className="mt-4 max-w-2xl text-slate-400">
              Follow match events, standings, top scorers, and team performance in a polished live
              dashboard designed for football fans.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-3xl bg-slate-950/80 px-5 py-4 text-slate-200 shadow-lg shadow-slate-950/20">
            <span className="text-sm font-medium text-brand-100">Live today</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <SectionTitle title="Live action" description="Matches currently in progress." />
            <div className="mt-6 grid gap-4">
              {liveData?.map((match) => (
                <LiveMatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <SectionTitle
              title="Upcoming fixtures"
              description="Stay ready for the next World Cup encounters."
            />
            <div className="mt-6 grid gap-4">
              {scheduleData?.data?.slice(0, 4).map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <SectionTitle title="Scoreboard" description="Key moments and score overview." />
            <div className="mt-6">
              <ScoreBoard matches={scheduleData ?? []} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
