'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, Trophy, Flag, Users, MapPin } from 'lucide-react';

import { useMatch } from '@/hooks/use-matchDetails';
import { ErrorMessage } from '@/components/shared/error-message';
import { MatchDetails } from '@/components/matches/matchDetails/match-details';

interface MatchDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}



export default function MatchDetailsPage({ params }: MatchDetailsPageProps) {
  const { id } = React.use(params);

  const { data: match, isLoading, isError } = useMatch(id);

console.log(
  match
);


if (  !match) {
  return <ErrorMessage message="Match data unavailable" />;
}


  if (isLoading) {
    return <div className="h-96 animate-pulse rounded-3xl bg-slate-800/70" />;
  }

  return (
<>
<div>
<div className='w-[75%]'>

    <MatchDetails match={match} />
</div>
<div>
  
</div>
</div>
   </>
  );
}
