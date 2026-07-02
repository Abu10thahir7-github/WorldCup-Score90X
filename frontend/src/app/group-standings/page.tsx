'use client';

import { SectionTitle } from '@/components/shared/section-title';
import { StandingTable } from '@/components/standings/groupStanding-table';
import { useStandings } from '@/hooks/use-standings';
import { ErrorMessage } from '@/components/shared/error-message';

export default function StandingsPage() {
  const { data, isError, isLoading } = useStandings();
console.log(data);

  return (
    <div className="">

      {isError && <ErrorMessage  />}
      {isLoading ? (
        <div className="h-[420px] rounded-3xl bg-slate-800/80" />
      ) : (
        <StandingTable entries={data ?? []} />
      )}
    </div>
  );
}
