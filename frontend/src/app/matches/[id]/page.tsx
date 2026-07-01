'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, Trophy, Flag, Users, MapPin } from 'lucide-react';

import { useMatch } from '@/hooks/use-matchDetails';
import { ErrorMessage } from '@/components/shared/error-message';
import { MatchDetails } from '@/components/matches/matchDetails/match-details';
import MatchLiveScoreBanner from '@/components/matches/matchDetails/matchLiveScoreBanner';
import HomeAwayTeamDetails from '@/components/matches/matchDetails/HomeAwayTeamDetails';
import MatchReferees from '@/components/matches/matchDetails/matchReferees';
import VenueCard from '@/components/matches/matchDetails/VenueCard';
import ScoreSummary from '@/components/matches/matchDetails/ScoreSummary';
import MiniGroupOverview from '@/components/OverView.tsx/miniGroupOverview';

interface MatchDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function MatchDetailsPage({ params }: MatchDetailsPageProps) {
  const { id } = React.use(params);

  const { data: match, isLoading, isError } = useMatch(id);

  console.log(match);

  
  if (isLoading) {
    return <div className="h-96 animate-pulse rounded-3xl bg-slate-800/70" />;
  }

  if (!match) {
    return <ErrorMessage message="Match data unavailable" />;
  }


  return (
    <>
      <div className='flex'>
        <div className="w-[75%] space-y-2 p-2">
          <MatchLiveScoreBanner match={match} />
          <MatchDetails match={match} />
          <HomeAwayTeamDetails match={match} />
          <div className="flex gap-2">
            <VenueCard venue={match.venue || 'TBA'} />
            <MatchReferees match={match} />
          </div>
          <ScoreSummary match={match} />
        </div>
        <div className="w-[25%] h-fit sticky top-2 ">
          <MiniGroupOverview />
        </div>
      </div>
    </>
  );
}
