'use client';

import { Person } from '@/types';
import Image from 'next/image';
import ClubColors from '../ui/ColorsBadges';
import ColorBadges from '../ui/ColorsBadges';
import { Calendar } from 'lucide-react';

interface PlayerProfileCardProps {
  player: Person;
}
export default function PlayerCurrectTeam({ player }: PlayerProfileCardProps) {
  const team = player.currentTeam;

  const imageSrc =
    team.crest || 'https://i.pinimg.com/736x/f8/ac/88/f8ac888d041ec047923567995f7444fc.jpg';
  return (
    <div className="rounded-3xl border border-color   p-2  ">
      <h3 className=" text-sm font-semibold mb-1">Current Team</h3>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className=' flex'>

              <Image
                src={imageSrc}
                alt={team.name || team.name}

                width={100}
                height={100}
                className="object-contain "
                unoptimized
              />

            <div className='text-sm'>
              <span className="flex gap-2"> <Calendar size={16}/>
                <p> Founded </p>
                <p>{player.currentTeam.name}</p>
              </span>

              <span className="flex gap-2">
                <p>Stadium </p>
                <p>{player.currentTeam.founded}</p>
              </span>

              <span className="flex gap-2">
                <p>Adderss </p>
                <p>{player.currentTeam.address}</p>
              </span>

              <span className="flex gap-2">
                <p>Website </p>
                <p>{player.currentTeam.website}</p>
              </span>

              <span className="flex gap-2">
                <p>Club Colors </p>
                <ColorBadges
                  colors={team.clubColors}
                  className=" "
                  titleClassName=" "
                  colorsWrapperClassName="gap-3"
                  dotClassName="h-5 w-5  "
                />
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
