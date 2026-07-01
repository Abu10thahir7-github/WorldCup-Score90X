'use client';

import { useBracket } from '@/hooks/useBracket';
import BracketColumn from './BracketColumn';
import { organizeBracket } from '@/utils/groupBracket';
import FinalCard from './FinalCard';
import { BracketMatch } from '@/types/bracket';
import BracketSkeleton from './BarcketSkeleton';
import { buildBracketTree } from '@/utils/bracketTree';

export default function Bracket( ) {
  const { data = [], isLoading } = useBracket();

  if (isLoading) {
  return <BracketSkeleton />;
}
  // 👇 Add this here
  console.log('Bracket API Data:', data);

const rounds = organizeBracket(data);

const tree = buildBracketTree(rounds);

const leftRound32 = tree.left.last32;
const rightRound32 = tree.right.last32;

const leftRound16 = tree.left.last16;
const rightRound16 = tree.right.last16;

const leftQuarter = tree.left.quarter;
const rightQuarter = tree.right.quarter;

const leftSemi = tree.left.semi;
const rightSemi = tree.right.semi;

const finalMatch = tree.final;


  return (
    <div className="overflow-x-auto bg-[#02081B]">
  <div className="relative flex min-w-[2400px] items-start justify-center gap-20 px-20 py-10">
        <BracketColumn title="Round of 32" matches={leftRound32} gap={22} />

        <BracketColumn title="Round of 16" matches={leftRound16} gap={110} offset={60} />

        <BracketColumn title="Quarterfinal" matches={leftQuarter} gap={260} offset={160} />

        <BracketColumn title="Semifinal" matches={leftSemi} gap={540} offset={360} />

<div className="flex items-center justify-center px-12">
  <FinalCard match={finalMatch} />
</div>
        <BracketColumn title="Semifinal" matches={rightSemi} gap={540} offset={360} />

        <BracketColumn title="Quarterfinal" matches={rightQuarter} gap={260} offset={160} />

        <BracketColumn title="Round of 16" matches={rightRound16} gap={110} offset={60} />

        <BracketColumn title="Round of 32" matches={rightRound32} gap={22} />
      </div>
    </div>
  );
}
