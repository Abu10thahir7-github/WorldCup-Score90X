'use client';

import MiniGroupOverview from '@/components/OverView.tsx/miniGroupOverview';
import TopScorerCard from '@/components/topScores/TopScoresCard';
import MiniTeamSection from '@/components/ui/MiniTeamSection';
import { useTopScorers } from '@/hooks/use-top-scorers';

export default function TopScorers() {
  const { data, isLoading, isError } = useTopScorers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load scorers.</div>;
  }

  return (
    <div className="m-5 flex">
      <div className="grid pt-2 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-2 w-[80%]">
        {data?.map((scorer, index) => (
          <TopScorerCard key={scorer.player.id} scorer={scorer} rank={index + 1} />
        ))}
      </div>
      <div className="h-fit w-[25%] top-1 sticky space-y-2 p-2">
        <MiniGroupOverview />
        <MiniTeamSection />

      </div>
    </div>
  );
}
