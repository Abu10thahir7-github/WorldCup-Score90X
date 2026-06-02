import Link from 'next/link';
import type { Team } from '@/types';

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <Link
      href={`/teams/${team.id}`}
      className="group block rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition hover:border-brand-400/30 hover:bg-slate-900"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-lg font-semibold text-white">
          {team.code}
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{team.group}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{team.name}</h3>
        </div>
      </div>
      <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
        <div>
          <p className="font-medium text-slate-100">Coach</p>
          <p>{team.coach}</p>
        </div>
        <div>
          <p className="font-medium text-slate-100">Stadium</p>
          <p>{team.stadium}</p>
        </div>
      </div>
    </Link>
  );
}
