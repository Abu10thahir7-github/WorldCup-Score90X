// components/teams/TeamCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import type { Team } from '@/types';
import { CalendarDays, CalendarDaysIcon, Users } from 'lucide-react';

export default function TeamCard({ team }: { team: Team }) {
  return (
    <Link href={`/teams/${team.id}`}>
      <div className="rounded-2xl border border-white/10 bg-[#081226] p-5 hover:bg-slate-800/50  transition cursor-pointer h-full space-y-2 flex flex-col justify-between">

          <div className="flex gap-4">
            {team.crest && (
              <Image
                src={team.crest}
                alt={team.name}
                width={70}
                height={70}
                className=" "
                priority={false}
                unoptimized
              />
            )}

            <div className="flex flex-col justify-center">
              <h3 className="text-sm  font-semibold">{team.name}</h3>


            </div>
          </div>

        <div className="flex   p-4   items-center justify-between">
          {team.founded && (
            <div className="flex flex-col items-center justify-center ">
              <CalendarDaysIcon className="text-indigo-600" size={23} />
              <p className="text-[10px] text-gray-400">Founded</p>
              <h4 className="font-semibold">{team.founded}</h4>
            </div>
          )}
           <div className=" flex flex-col items-center justify-center">
            <Users className="text-indigo-600" size={23} />
            <p className="text-[10px] text-gray-400">Squad Size</p>
            <h4 className="font-semibold">{team.squad?.length || 0}</h4>
          </div>
        </div>
        <button className="w-full border border-white/10 p-2 rounded-xl      !text-xs text-indigo-700 hover:bg-violet-500 hover:text-white transition">
          View Details →
        </button>
      </div>
    </Link>
  );
}
