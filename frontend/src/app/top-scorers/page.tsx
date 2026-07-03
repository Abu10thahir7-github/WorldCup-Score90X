'use client';

import MiniGroupOverview from '@/components/OverView.tsx/miniGroupOverview';
import TopScorerCard from '@/components/topScores/TopScoresCard';
import MiniTeamSection from '@/components/ui/MiniTeamSection';
import { useTopScorers } from '@/hooks/use-top-scorers';

export default function TopScorers() {
  const { data, isLoading, isError } = useTopScorers();
console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load scorers.</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-2 md:p-4 lg:p-5">
      {/* Main Content */}
      <div className="w-full lg:w-[75%]">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
          {data?.map((scorer, index) => (
            <TopScorerCard key={scorer.player.id} scorer={scorer} rank={index + 1} />
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-[25%] lg:sticky lg:top-4 h-fit space-y-4">
        <MiniGroupOverview />
        <MiniTeamSection />
      </div>
    </div>
  );
}
