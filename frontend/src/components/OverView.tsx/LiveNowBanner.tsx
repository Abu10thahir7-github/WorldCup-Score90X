'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import messi from '@/public/assets/Images/messi.png';
import ronaldo from '@/public/assets/Images/ronaldo.png';
const LiveNowBanner = () => {
  return (
    <div className=" liveNowBanner relative rounded-xl w-full overflow-hidden bg-amber-300 !h-[40vh]  ">
      <Image src={messi} className="absolute left-0" alt="messi" width={200} height={100} />
      <Image src={ronaldo} className="absolute right-0" alt="messi" width={200} height={100} />
      <p className="liveTextStatus absolute  uppercase  m-2.5 text-white bg-red-600 px-3 py-1 rounded-full text-xs  ">
        Live Now
      </p>

      <div className="liveDetails flex flex-col justify-center items-center h-full space-y-5">
        <p className="groupStage">Group Stage ● Group A</p>
        <div className="liveTeamsNames flex items-center  ">
          <p className="team1 text-xl lg:text-2xl font-black text-white">Argentina</p>
          <p className="border rounded-full p-2  font-black">vs</p>
          <p className="team2 text-xl lg:text-2xl font-black text-white">England</p>
        </div>
        <div className="flex items-center justify-center gap-8  ">
          {/* Argentina Score */}
          <div className="text-center flex">
            <div className="mt-3 space-y-1 flex flex-col text-white/80 text-sm">
              <p className="font-semibold">23' Messi</p>
              <p className="font-semibold">64' Alvarez</p>
            </div>{' '}
            <p className="text-6xl lg:text-7xl font-black text-white">2</p>
          </div>

          {/* Match Time */}
          <div className="flex flex-col items-center gap-2">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
              <p className="text-white text-2xl lg:text-3xl font-bold">78:45</p>{' '}
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">
                2nd Half
              </p>
            </div>
          </div>

          {/* Brazil Score */}
          <div className="text-center flex">
            {' '}
            <p className="text-6xl lg:text-7xl font-black text-white">2</p>
            <div className="mt-3 space-y-1    text-white/80 text-sm">
              <p className="font-semibold">15' Neymar Jr.</p>
              <p className="font-semibold">77' Vinicius Jr.</p>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveNowBanner;
