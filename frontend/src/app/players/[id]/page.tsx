'use client';

import React from 'react';
import { SectionTitle } from '@/components/shared/section-title';
import { ErrorMessage } from '@/components/shared/error-message';
import { usePerson } from '@/hooks/use-person';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerCurrectTeam from '@/components/players/PlayerCurrectTeam';

interface PlayerDetailsPageProps {
  params: {
    id: string;
  };
}

export default function PlayerDetailsPage({ params }: PlayerDetailsPageProps) {
  const { id } = React.use(params);
  const { data: player, isError, isLoading } = usePerson(id);
 
  if (isError) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <div className="h-72 rounded-3xl bg-slate-800/80" />;
  }

  if (!player) {
    return <ErrorMessage message="Player not found." />;
  }

  return (
    <div className="flex space-x-2 sp m-2">
      <div className="w-[80%] space-y-2">
        <PlayerProfileCard player={player} />
        <PlayerCurrectTeam player={player} />
      </div>
      <div className="team-info space-y-2 h-fit top-2.5 sticky w-[25%]"></div>
    </div>
  );
}
