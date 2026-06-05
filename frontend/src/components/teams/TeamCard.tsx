// components/teams/TeamCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import type { Team } from '@/types';

export default function TeamCard({ team }: { team: Team }) {
  const goalkeepers = team.squad?.filter((p) => p.position === 'Goalkeeper').length || 0;

  const defenders = team.squad?.filter((p) => p.position === 'Defence').length || 0;

  const midfielders = team.squad?.filter((p) => p.position === 'Midfield').length || 0;

  const forwards = team.squad?.filter((p) => p.position === 'Offence').length || 0;

  return (
    <Link href={`/teams/${team.id}`}>
      <div className="rounded-2xl border border-white/10 bg-[#081226] p-5 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/20 transition cursor-pointer h-full">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            {team.crest && (
              <Image
                src={team.crest}
                alt={team.name}
                width={70}
                height={70}
                className="rounded-lg"
                priority={false}
                unoptimized
              />
            )}

            <div className="flex-1">
              <h3 className="text-xl font-semibold">{team.name}</h3>

              <p className="text-gray-400">{team.area?.code || team.tla}</p>

              {team.coach && <p className="text-xs text-gray-500 mt-1">Coach: {team.coach.name}</p>}
            </div>
          </div>

          <div className="w-2 h-2 rounded-full bg-green-500 mt-1" />
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
          {team.founded && (
            <div className="bg-[#0B1831] rounded-lg p-3">
              <p className="text-xs text-gray-400">Founded</p>
              <h4 className="font-semibold">{team.founded}</h4>
            </div>
          )}

          <div className="bg-[#0B1831] rounded-lg p-3">
            <p className="text-xs text-gray-400">Squad Size</p>
            <h4 className="font-semibold">{team.squad?.length || 0}</h4>
          </div>

          <div className="bg-[#0B1831] rounded-lg p-3">
            <p className="text-xs text-gray-400">Goalkeepers</p>
            <h4 className="font-semibold">{goalkeepers}</h4>
          </div>

          <div className="bg-[#0B1831] rounded-lg p-3">
            <p className="text-xs text-gray-400">Midfielders</p>
            <h4 className="font-semibold">{midfielders}</h4>
          </div>
        </div>

        {team.squad && team.squad.length > 0 && (
          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="text-xs text-gray-400 mb-2">Squad Composition</p>
            <div className="grid grid-cols-4 gap-2 text-xs">
              <div>
                <span className="text-violet-400 font-semibold">{goalkeepers}</span>
                <p className="text-gray-500">GK</p>
              </div>
              <div>
                <span className="text-violet-400 font-semibold">{defenders}</span>
                <p className="text-gray-500">DEF</p>
              </div>
              <div>
                <span className="text-violet-400 font-semibold">{midfielders}</span>
                <p className="text-gray-500">MID</p>
              </div>
              <div>
                <span className="text-violet-400 font-semibold">{forwards}</span>
                <p className="text-gray-500">FWD</p>
              </div>
            </div>
          </div>
        )}

        <button className="w-full mt-5 rounded-xl border border-violet-500 py-2.5 text-sm text-violet-400 hover:bg-violet-500 hover:text-white transition">
          View Details →
        </button>
      </div>
    </Link>
  );
}
