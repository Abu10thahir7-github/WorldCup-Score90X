'use client';

import { getPlayerImage } from '@/services/playersImage';
import { TopScorer } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Trophy, Goal, Shirt, Flag } from 'lucide-react';

interface Props {
  scorer: TopScorer;
  rank: number;
}

export default function TopScorerCard({ scorer, rank }: Props) {
  const [image, setImage] = useState('/player-placeholder.png');

  useEffect(() => {
    if (!scorer?.player) return;

    getPlayerImage(scorer.player.name).then((img) => {
      if (img) setImage(img);
    });
  }, [scorer]);

  if (!scorer?.player) return null;
 const top3 =
    rank === 1
      ? 'bg-yellow-400'
      : rank === 2
      ? 'bg-gray-400/70'
      : rank === 3
      ? 'bg-amber-950'
      : ' bg-gray-700/50';
  return (
    <Link href={`/players/${scorer.player.id}`} className="relative border border-slate-900 p-5">
      {/* Rank */}
      <div className="absolute left-4 top-4 z-20">
        <div className={`flex h-10 w-10 items-center  justify-center rounded-xl   text-white   font-bold shadow-lg ${top3}`}>
           {rank}
        </div>
      </div>
      <div className="absolute right-4 top-4 z-20">
        <div className=" text-center">
          <Image
            src={scorer.team.crest}
            alt={scorer.team.name}
            width={20}
            height={20}
            className="rounded-xl object-contain h-10 w-10"
          />
          <p className='text-xs'>{scorer.team.tla}</p>
        </div>
      </div>

      {/* Player */}
      <div className=" flex flex-col items-center  ">
        <Image
          src={image}
          alt={scorer.player.name}
          width={200}
          height={200}
          className="   "
          unoptimized
        />
      </div>

      {/* Stats */}
      <div className='absolute bottom-0 z-10 left-0 right-0 flex flex-col items-center justify-center gap-1   '>
        {/* Player Name */}
        <div className="  text-center">
          <h2 className="text-xl font-bold text-white drop-shadow-lg">{scorer.player.name}</h2>
        </div>
        <div className="flex w-full px-5 p-2 justify-between ">
          <div className="rounded-2xl    text-center">
            <p className="text-xl font-bold text-yellow-400">{scorer.goals}</p>
            <span className="text-xs text-slate-400">Goals</span>
          </div>

          <div className="rounded-2xl   text-center">
            <p className="text-xl font-bold text-white">{scorer.assists ?? 0}</p>
            <span className="text-xs text-slate-400">Assists</span>
          </div>

          <div className="rounded-2xl    text-center">
            <p className="text-xl font-bold text-white">{scorer.playedMatches}</p>
            <span className="text-xs text-slate-400">Matches</span>
          </div>
        </div>
                {/* Bottom Fade */}
      </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#081226] via-[#081226]/80 to-transparent" />
    </Link>
  );
}
