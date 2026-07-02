'use client';

import MiniGroupOverview from '@/components/OverView.tsx/miniGroupOverview';
import MinNewsUpdates from '@/components/OverView.tsx/minNewsUpdates';
import StandingColumnInfo from '@/components/standings/StandingColumnInfo';
import { TableStanding } from '@/components/standings/tableStanding';
import { useStandings } from '@/hooks/use-standings';

export default function TableStandingPage() {
  const { data, isLoading, isError } = useStandings();

  if (isLoading) {
    return (
      <div className="h-[400px] rounded-3xl bg-slate-900 animate-pulse" />
    );
  }

  if (isError) {
    return (
      <div className="text-red-500">
        Failed to load standings
      </div>
    );
  }

  return (
    <div className="w-full p-3 lg:p-4">
      <div className="flex flex-col xl:flex-row gap-4">
        {/* LEFT */}
        <div className="flex-1 min-w-0">
          <TableStanding entries={data ?? []} />
        </div>

        {/* RIGHT */}
        <aside className="w-full xl:w-[360px] shrink-0 space-y-4 xl:sticky xl:top-3 h-fit">
          <StandingColumnInfo />

          <MiniGroupOverview />

          <MinNewsUpdates />
        </aside>
      </div>
    </div>
  );
}