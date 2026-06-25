'use client';

import MiniGroupOverview from '@/components/OverView.tsx/miniGroupOverview';
import MinNewsUpdates from '@/components/OverView.tsx/minNewsUpdates';
import StandingColumnInfo from '@/components/standings/StandingColumnInfo';
import { TableStanding } from '@/components/standings/tableStanding';
import { useStandings } from '@/hooks/use-standings';

export default function TableStandingPage() {
  const { data, isLoading, isError } = useStandings();

  if (isLoading) {
    return <div className="h-[400px] rounded-3xl bg-slate-900 animate-pulse" />;
  }

  if (isError) {
    return <div className="text-red-500">Failed to load standings</div>;
  }

  return (
    <div className="w-full   flex gap-2 p-3.5">
      <div className="flex-1">
        {/* Table */}
        <TableStanding entries={data ?? []} />
      </div>

      <div className="space-y-1 h-fit   top-2.5 sticky w-[25%]">
        <StandingColumnInfo />
        <MiniGroupOverview />
        <MinNewsUpdates />
      </div>
    </div>
  );
}
