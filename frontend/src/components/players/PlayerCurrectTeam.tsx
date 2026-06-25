'use client';

import { Person } from '@/types';
import Image from 'next/image';
import ClubColors from '../ui/ColorsBadges';
import ColorBadges from '../ui/ColorsBadges';
import { AppWindow, Calendar, LandPlotIcon, Locate, MapPin, Palette, Trophy } from 'lucide-react';
import { useState } from 'react';

interface PlayerProfileCardProps {
  player: Person;
}
export default function PlayerCurrectTeam({ player }: PlayerProfileCardProps) {
  const team = player.currentTeam;
  console.log(player.currentTeam);
  const [imgError, setImgError] = useState(false);

  const imageSrc =
    team.crest || 'https://i.pinimg.com/736x/f8/ac/88/f8ac888d041ec047923567995f7444fc.jpg';
  return (
    <div className="rounded-3xl border border-color bg-navy-blue  p-2  ">
      <h3 className=" text-sm font-medium mb-1 uppercase ">Current Team</h3>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className=" flex items-start bg-slate-950/90  rounded-2xl py-3 px-2 h-full  gap-3">
            <Image
              src={imageSrc}
              alt={team.name || team.name}
              width={150}
              height={150}
              className="object-contain "
              unoptimized
            />

            <div className="text-sm space-y-2">
              <span className="flex items-center gap-2">
                <h1 className="text-lg font-medium">{player.currentTeam.name} </h1>
                <p className="border border-color py-0.5 px-2 rounded-full text-slate-500 text-xs">
                  {player.currentTeam.tla}
                </p>
              </span>

              <div className="space-y-3">
                <div className="grid grid-cols-[35%_1fr] items-center gap-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Calendar className="text-slate-500" size={16} />
                    <span>Founded</span>
                  </div>
                  <p>{player.currentTeam.founded}</p>
                </div>

               {player.currentTeam.venue&&

              <div className="grid grid-cols-[35%_1fr] items-center gap-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <LandPlotIcon className="text-slate-500" size={16} />
                    <span>Stadium</span>
                  </div>
                  <p>{player.currentTeam.venue}</p>
                </div>
}
                <div className="grid grid-cols-[35%_1fr] items-center gap-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="text-slate-500" size={16} />
                    <span>Address</span>
                  </div>
                  <p>{player.currentTeam.address}</p>
                </div>

                <div className="grid grid-cols-[35%_1fr] items-center gap-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <AppWindow className="text-slate-500" size={16} />
                    <span>Website</span>
                  </div>
                  <a
                    href={player.currentTeam.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 underline hover:text-blue-300 break-all"
                  >
                    {player.currentTeam.website}
                  </a>
                </div>

                <div className="grid grid-cols-[35%_1fr] items-center gap-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Palette className="text-slate-500" size={16} />
                    <span>Club Colors</span>
                  </div>

                  <ColorBadges
                    title={team.clubColors}
                    colors={team.clubColors}
                    titleClassName=""
                    className='flex-col items-start'
                    colorsWrapperClassName="gap-3 "
                    dotClassName="h-5 w-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 ">
          <div className="  bg-slate-950/90   p-2 rounded-2xl">
            <h1 className="text-sm font-[400] mb-1 uppercase ">Area/Country</h1>
            <div className="border border-color flex items-center rounded-2xl p-2 gap-3">
              <img
                src={player.currentTeam.area.flag}
                alt={`${player.name} crest`}
                className="w-10 h-10  rounded-full    object-cover"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = 'none';
                }}
              />
              <hr className="border border-color h-10 w-0.5" />
              <span>
                <h1 className="text-lg">{player.currentTeam.area.name}</h1>
                <p className="text-sm text-slate-500">{player.currentTeam.area.code}</p>
              </span>
            </div>
          </div>
          <div className="p-2 rounded-xl bg-slate-950/90   ">
            <h1 className="text-sm font-[400] mb-1 uppercase ">
              Running Competitions
            </h1>
            <div className="space-y-1">
              {player.currentTeam.runningCompetitions?.map((competition) => (
                <div
                  key={competition.id}
                  className="flex items-center justify-between gap-2 p-2 rounded-lg border border-color"
                >
                  <div className="flex">
                    {!competition.emblem || imgError ? (
                      <div className="h-10 w-10 flex items-center justify-center rounded-lg  ">
                        <Trophy size={20} className="text-slate-400" />
                      </div>
                    ) : (
                      <img
                        src={competition.emblem}
                        alt={competition.name}
                        className="h-10 w-10 object-contain"
                        onError={() => setImgError(true)}
                      />
                    )}
                    <div>
                      <p className="text-sm font-light">{competition.name}</p>
                      <p className="text-xs text-gray-500">{competition.code}</p>
                    </div>
                  </div>
                  <p className="border border-color py-0.5 px-2 rounded-full text-slate-500 text-xs">
                    {competition.type}
                  </p>

                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
