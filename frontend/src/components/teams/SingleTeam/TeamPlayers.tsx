'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import type { Team } from '@/types';
import Link from 'next/link';

export default function TeamPlayers({ team }: { team: Team }) {


  const groupedPlayers = useMemo(() => {
    return {
      goalkeepers: team?.squad?.filter((p) => p.position?.toLowerCase() === 'goalkeeper'),
      defenders: team?.squad?.filter(
        (p) => p.position?.toLowerCase() === 'defence' || p.position?.toLowerCase() === 'defender',
      ),
      midfielders: team?.squad?.filter(
        (p) =>
          p.position?.toLowerCase() === 'midfield' || p.position?.toLowerCase() === 'midfielder',
      ),
      forwards: team?.squad?.filter(
        (p) =>
          p.position?.toLowerCase() === 'offence' ||
          p.position?.toLowerCase() === 'forward' ||
          p.position?.toLowerCase() === 'attacker',
      ),
    };
  }, [team]);

  const PlayerCard = ({ player }: any) => (
    <Link href={`/players/${player.id}`}>

    <div className="group rounded-xl border border-color bg-slate-950/90 p-3 transition-all duration-300 hover:border-blue-500/40 hover:bg-[#0D1A33]">
      <div className="flex items-center gap-3">
        {/* Player Image */}
        <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-slate-800">
          <Image
            src='https://i.pinimg.com/736x/a1/3d/eb/a13debf6026286cbc805a9ae0f7aa6db.jpg'
            alt={player.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Player Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2">


            <div className="min-w-0">
              <h4 className="truncate text-sm font-semibold text-white">{player.name}</h4>

              <p className="text-xs text-slate-400">{player.dateOfBirth}</p>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
            <span>{player.nationality}</span>
          </div>
        </div>
      </div>
    </div></Link>
  );

  const Section = ({ title, players, color }: { title: string; players: any[]; color: string }) => {
    if (!players?.length) return null;

    return (
      <div className="  ">
        <div className="mb-2 text-xs font-bold uppercase  tracking-[2px] " style={{ color }}>
          {title}
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-2xl border border-color bg-navy-blue p-3">
      {/* Header */}
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg   text-white">Squad</h2>

          <p className="text-sm text-slate-400">{team?.squad?.length || 0} Players</p>
        </div>
      </div>
  <hr className='h-0.5   border-color w-full'/>
      <div className="space-y-2 mt-2">
        {/* Goalkeepers */}
        <Section title="Goalkeepers" players={groupedPlayers.goalkeepers} color="#FACC15" />

        {/* Defenders */}
        <Section title="Defenders" players={groupedPlayers.defenders} color="#3B82F6" />

        {/* Midfielders */}
        <Section title="Midfielders" players={groupedPlayers.midfielders} color="#A855F7" />

        {/* Forwards */}
        <Section title="Forwards" players={groupedPlayers.forwards} color="#EF4444" />
      </div>
    </div>
  );
}
