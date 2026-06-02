'use client';

import { SectionTitle } from '@/components/shared/section-title';
import { TeamCard } from '@/components/teams/team-card';
import { useTeams } from '@/hooks/use-teams';
import { ErrorMessage } from '@/components/shared/error-message';

export default function TeamsPage() {
  const { data, isError, isLoading } = useTeams();

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <SectionTitle
        title="Teams"
        description="Browse national squads competing in the 2026 World Cup."
      />
      {isError && <ErrorMessage />}
      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="h-56 rounded-3xl bg-slate-800/80" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data?.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      )}
    </div>
  );
}
