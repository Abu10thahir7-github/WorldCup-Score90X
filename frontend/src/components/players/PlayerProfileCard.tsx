'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Person } from '@/types';
import { CircleAlertIcon } from 'lucide-react';
import { getPlayerImage } from '@/services/playersImage';
import { useState } from 'react';

interface PlayerProfileCardProps {
  player: Person;
}

function formatLastUpdated(date: string) {
  const d = new Date(date);

  return (
    d
      .toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'UTC',
      })
      .replace(',', '')
      .toUpperCase() + ' (UTC)'
  );
}

export default function PlayerProfileCard({ player }: PlayerProfileCardProps) {
  const team = player.currentTeam;
  const imageSrc =
    team.crest || 'https://i.pinimg.com/736x/f8/ac/88/f8ac888d041ec047923567995f7444fc.jpg';

  const [image, setImage] = useState('/player-placeholder.png');
  getPlayerImage(player.name).then((img) => {
    if (img) setImage(img);
  });
  function generatePlayerAbout(player: Person) {
    const age = player.dateOfBirth
      ? Math.floor(
          (Date.now() - new Date(player.dateOfBirth).getTime()) / (1000 * 60 * 60 * 24 * 365.25),
        )
      : null;

    return `${player.name} is a professional footballer from ${
      player.nationality
    } who plays as a ${player.position.toLowerCase()}${
      player.shirtNumber ? ` wearing shirt number ${player.shirtNumber}` : ''
    } for ${player.currentTeam.name}. ${
      age ? `At ${age} years old, ` : ''
    }he is known for his dedication, technical ability, tactical awareness, and contributions on the pitch. Throughout his career, ${
      player.name
    } has represented his club and country with professionalism and consistency, earning recognition from teammates, coaches, and supporters alike.`;
  }

  const about = generatePlayerAbout(player);
  return (
    <div>
      <div className="rounded-3x player-profile-bg border border-slate-800 rounded-xl   p-6 shadow-soft">
        <div className="grid gap-6 lg:grid-cols-[30%_1fr]">
          <div className="    text-center">
            <Image
              src={image}
              alt={player.name}
              width={200}
              height={200}
              className="rounded-3xl object-contain w-full h-full"
            />
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Player profile</p>
            <div className="flex justify-between">
              <div>
                <h1 className=" mb-2 text-4xl font-semibold text-white">{player.name}</h1>
                <div className="flex items-center gap-4">
                  <img
                    src={player.currentTeam.area.flag}
                    alt={`${player.name} crest`}
                    className="w-fit h-6     object-cover"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = 'none';
                    }}
                  />
                  <p className=" text-sm  ">
                    {player.nationality} •{' '}
                    <span className="text-yellow-400">{player.position}</span>
                  </p>
                </div>
              </div>

              <div className="relative mr-10  h-20 w-20 overflow-hidden rounded-3xl  ">
                <Image
                  src={imageSrc}
                  alt={team.name || player.name}
                  fill
                  className="object-contain "
                  unoptimized
                />
              </div>
            </div>

            <div className="border border-color bg-gray-700/10 flex justify-between rounded-xl p-4">
              <div className="flex flex-col   items-center">
                <p className=" uppercase text-xs text-slate-400">Shirt Number</p>
                <p className="font-medium  text-sm">{player.shirtNumber}</p>
              </div>

              <div className="flex flex-col   items-center">
                <p className=" uppercase text-xs text-slate-400">Date Of Birth</p>
                <p className="font-medium  text-sm">{player.dateOfBirth}</p>
              </div>
              <div className="flex flex-col   items-center">
                <p className=" uppercase text-xs text-slate-400">Nationality</p>
                <p className="font-medium  text-sm">{player.nationality}</p>
              </div>
              <div className="flex flex-col   items-center">
                <p className=" uppercase text-xs text-slate-400">Position</p>
                <p className="font-medium  text-sm">{player.position}</p>
              </div>
            </div>

            <h1 className="text-[13px] text-slate-300">{about}</h1>
            <p className="uppercase mt-5 text-slate-500 flex gap-2 text-xs">
              <CircleAlertIcon size={15} /> Last updated: {formatLastUpdated(player.lastUpdated)}
            </p>
          </div>
        </div>
      </div>{' '}
    </div>
  );
}
