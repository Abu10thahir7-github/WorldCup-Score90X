'use client';

import Image from 'next/image';
import { Match } from '@/types';

interface Props {
  match: Match;
}

export default function BracketMatchCard({ match }: Props) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-3">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">

          <Image
            src={match.homeTeam.crest}
            alt={match.homeTeam.name}
            width={24}
            height={24}
            unoptimized
          />

          <span>{match.homeTeam.tla}</span>
        </div>

        <span>{match.score.fullTime.home ?? '-'}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">

          <Image
            src={match.awayTeam.crest}
            alt={match.awayTeam.name}
            width={24}
            height={24}
            unoptimized
          />

          <span>{match.awayTeam.tla}</span>
        </div>

        <span>{match.score.fullTime.away ?? '-'}</span>
      </div>

    </div>
  );
}