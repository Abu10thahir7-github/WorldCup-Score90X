'use client';
import { SectionTitle } from '@/components/shared/section-title';
import { useTeam } from '@/hooks/use-team';
import { ErrorMessage } from '@/components/shared/error-message';
import Image from 'next/image';
import React from 'react';
import SingleTeam from '@/components/teams/SingleTeam/TeamProfileBanner';
import TeamInfo from '@/components/teams/SingleTeam/TeamInfo';
import TeamPlayers from '@/components/teams/SingleTeam/TeamPlayers';
import CoachCard from '@/components/teams/SingleTeam/CoachCard';

interface TeamDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

// type Team = {
//   crest?: string;

//   name?: string;
//   shortName?: string;
//   tla?: string;
//   area?: { name?: string } | null;
//   coach?: { name?: string } | null;
//   founded?: number | string;
//   website?: string;
//   address?: string;

// };

export default function TeamDetailsPage({ params }: TeamDetailsPageProps) {
  const { id } = React.use(params);
  const { data: team, isError, isLoading } = useTeam(id);
  console.log('team ID ' + id);

  if (isError) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <div className="h-72 rounded-3xl bg-slate-800/80" />;
  }

  if (!team) {
    return <ErrorMessage message="Team not found." />;
  }

  return (
    <div className="    ">
      {isLoading ? (
        <div className="h-72 rounded-3xl bg-slate-800/80" />
      ) : (
        <div className="flex space-x-2 sp m-2">
          <div className="w-[80%] space-y-2">
            <SingleTeam team={team} />
            <CoachCard coach={team.coach} />

            <TeamPlayers team={team} />
          </div>
          <div className="team-info space-y-2 h-fit top-2.5 sticky w-[25%]">
            <TeamInfo team={team} />
          </div>
        </div>
      )}
    </div>
  );
}
