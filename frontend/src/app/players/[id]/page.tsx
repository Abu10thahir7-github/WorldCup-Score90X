'use client';

import React from 'react';
import { SectionTitle } from '@/components/shared/section-title';
import { ErrorMessage } from '@/components/shared/error-message';
import { usePerson } from '@/hooks/use-person';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';

interface PlayerDetailsPageProps {
  params: {
    id: string;
  };
}

export default function PlayerDetailsPage({ params }: PlayerDetailsPageProps) {
  const { id } = React.use(params);
  const { data: player, isError, isLoading } = usePerson(id);

  console.log('id' + id);

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
    <div className="mx-auto max-w-5xl space-y-8">
      <SectionTitle
        title="Player profile"
        description={`${player.name} · ${player.currentTeam.name}`}
      />
      <PlayerProfileCard player={player} />
    </div>
  );
}
