'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  data: any[];
}

export default function LiveNowBanner({ data }: Props) {
  const [current, setCurrent] = useState(0);

  const todayString = new Date().toLocaleDateString('en-CA');

  const matches =
    data?.filter((match) => {
      const matchDay = new Date(match.utcDate).toLocaleDateString('en-CA');

      return matchDay === todayString;
    }) || [];

  useEffect(() => {
    if (matches.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === matches.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [matches.length]);

  if (!matches.length) {
    return (
      <div className="h-[40vh] rounded-xl bg-navy-blue flex items-center justify-center">
        <p className="text-slate-400">No matches available today</p>
      </div>
    );
  }

  const match = matches[current];
  console.log(match);

  return (
    <div className=" liveNowBanner text-center relative h-[40vh] overflow-hidden rounded-xl bg-gradient-to-r from-[#071120] via-[#0c1730] to-[#071120]">
      <div className="flex mt-2 flex-col items-center justify-center">
        <h1 className="uppercase font-bold">Today's Matches</h1>
         <p className="text-xl font-bold text-white">
                {new Date(match.utcDate).toLocaleDateString([], {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
      </div>


      {/* Previous */}
      <button
        onClick={() => setCurrent(current === 0 ? matches.length - 1 : current - 1)}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next */}
      <button
        onClick={() => setCurrent(current === matches.length - 1 ? 0 : current + 1)}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur"
      >
        <ChevronRight size={22} />
      </button>


      {/* Live Badge */}
      <div className="flex justify-center ">
        <span
          className={`
      px-3 py-1 rounded-full
      text-xs font-semibold uppercase

      ${
        match.status === 'IN_PLAY'
          ? 'bg-red-600 text-white animate-pulse'
          : match.status === 'FINISHED'
            ? 'bg-green-600 text-white'
            : 'bg-blue-600 text-white'
      }
    `}
        >
          {match.status}
        </span>
      </div>
      <div className="flex h-fit items-center justify-center gap-5">
        {/* Home Team */}
        <div className=" flex flex-col items-center text-center">
          <Image
            src={match.homeTeam.crest}
            alt={match.homeTeam.name}
            width={120}
            height={120}
            unoptimized
            className="w-[100px] h-[100px] object-contain"
          />

          <h2 className="  text-xl uppercase font-semibold text-white">{match.homeTeam.name}</h2>
        </div>

        <div className="text-center">

          {match.status === 'TIMED' ? (
            <>

              <p className="text-3xl font-semibold text-white">
                {new Date(match.utcDate).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>

              <p className="  text-xs text-slate-400">Kick Off</p>
            </>
          ) : (
            <>
              <div className="text-4xl font-semibold text-white">
                {match.score?.fullTime?.home}
                <span className="mx-6 text-blue-500">-</span>
                {match.score?.fullTime?.away}
              </div>

              <p className="text-sm   text-white">
                {new Date(match.utcDate).toLocaleTimeString([], {
                  hour: 'numeric',
                  minute: '2-digit',
                })}
              </p>
            </>
          )}
        </div>

        {/* Away Team */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={match.awayTeam.crest}
            alt={match.awayTeam.name}
            width={120}
            height={120}
            unoptimized
            className="w-[100px] h-[100px] object-contain"
          />

          <h2 className=" uppercase text-xl font-semibold text-white">{match.awayTeam.name}</h2>
        </div>

      </div>
       <Link className='text-center top-1 right-1 absolute bg-black/40 border border-slate-700/50 text-white py-1 px-2 rounded-xl     text-xs' href={`/matches/${match.id}`}> Match Details <ArrowRight size={14} className="inline-block items-center" /></Link>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {matches.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              current === index ? 'w-8 bg-white' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
