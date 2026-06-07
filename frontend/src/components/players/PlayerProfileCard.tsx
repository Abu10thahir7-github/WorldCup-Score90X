'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Person } from '@/types';

interface PlayerProfileCardProps {
  player: Person;
}

function formatDate(date: string) {
  try {
    return new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return date;
  }
}

export default function PlayerProfileCard({ player }: PlayerProfileCardProps) {
  const team = player.currentTeam;
  const imageSrc = team.crest || 'https://i.pinimg.com/736x/f8/ac/88/f8ac888d041ec047923567995f7444fc.jpg';

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-soft">
      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-4 text-center">
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-3xl bg-slate-800">
            <Image
              src={imageSrc}
              alt={team.name || player.name}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.35em] text-slate-400">Team crest</p>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Player profile</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">{player.name}</h1>
            <p className="mt-1 text-sm text-slate-300">
              #{player.shirtNumber} · {player.position} · {player.nationality}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Date of birth</p>
              <p className="mt-2 text-sm text-white">{formatDate(player.dateOfBirth)}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Last updated</p>
              <p className="mt-2 text-sm text-white">{formatDate(player.lastUpdated)}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Section</p>
              <p className="mt-2 text-sm text-white">{player.section}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Nationality</p>
              <p className="mt-2 text-sm text-white">{player.nationality}</p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900/80 p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Current team</p>
            <Link
              href={`/teams/${team.id}`}
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-200"
            >
              {team.name}
            </Link>
            {team.venue && <p className="mt-2 text-sm text-slate-300">Venue: {team.venue}</p>}
            {team.contract?.start && team.contract?.until && (
              <p className="mt-2 text-sm text-slate-300">
                Contract: {team.contract.start} → {team.contract.until}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
