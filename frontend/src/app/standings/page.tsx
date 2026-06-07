'use client';

import { SectionTitle } from '@/components/shared/section-title';
import { StandingTable } from '@/components/standings/standing-table';
import { useStandings } from '@/hooks/use-standings';
import { ErrorMessage } from '@/components/shared/error-message';

export default function StandingsPage() {
  const { data, isError, isLoading } = useStandings();

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      {isError && <ErrorMessage  />}
      {isLoading ? (
        <div className="h-[420px] rounded-3xl bg-slate-800/80" />
      ) : (
        <StandingTable entries={data ?? []} />
      )}
    </div>
  );
}
