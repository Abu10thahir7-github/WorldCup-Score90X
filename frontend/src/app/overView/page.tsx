'use client';

import LiveNowBanner from '@/components/OverView.tsx/LiveNowBanner';
import LiveMatchesMIniOverView from '@/components/OverView.tsx/liveMatchesMIniOverView';
import MiniGroupOverview from '@/components/OverView.tsx/miniGroupOverview';
import MiniTeamSection from '@/components/ui/MiniTeamSection';
import MinNewsUpdates from '@/components/OverView.tsx/minNewsUpdates';
import { useMatches } from '@/hooks/use-matches';

export default function OverViewClient() {
  const { data = [], isLoading, isError } = useMatches();

  if (isLoading) {
    return (
      <div className="h-[420px] rounded-3xl bg-slate-800/80 m-5" />
    );
  }

  if (isError) {
    return (
      <div className="rounded-3xl border border-red-500/40 bg-red-950/30 p-6 text-red-200">
        Failed to load matches.
      </div>
    );
  }

  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto max-w-[1800px] space-y-2 p-5">

        <section className="grid gap-2 lg:grid-cols-[2fr_380px]">
          <div className="flex flex-col space-y-2">
            <LiveNowBanner data={data} />
            <LiveMatchesMIniOverView data={data} />
          </div>

          <div className="space-y-2">
            <MiniTeamSection />
          </div>
        </section>

        <section className="grid gap-2 lg:grid-cols-[1.3fr_1fr]">
          <MiniGroupOverview />
          <MinNewsUpdates />
        </section>

      </div>
    </main>
  );
}