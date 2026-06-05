'use client';
import { SectionTitle } from '@/components/shared/section-title';
import { useTeam } from '@/hooks/use-team';
import { ErrorMessage } from '@/components/shared/error-message';
import Image from 'next/image';
import React from 'react';

interface TeamDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function TeamDetailsPage({ params }: TeamDetailsPageProps) {
  const { id } = React.use(params);
  const { data: team, isError, isLoading } = useTeam(id);

  if (isError) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <div className="h-72 rounded-3xl bg-slate-800/80" />;
  }

  if (!team) {
    return <ErrorMessage message="Team not found." />;
  }

  const defenders = team?.squad?.filter((p) => p.position === 'Defence').length || 0;
  const midfielders = team?.squad?.filter((p) => p.position === 'Midfield').length || 0;
  const forwards = team?.squad?.filter((p) => p.position === 'Offence').length || 0;
  const goalkeepers = team?.squad?.filter((p) => p.position === 'Goalkeeper').length || 0;

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <SectionTitle title="Team profile" description={team?.name ?? 'Loading team information'} />
      {isLoading ? (
        <div className="h-72 rounded-3xl bg-slate-800/80" />
      ) : (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft">
          <div className="grid gap-8 md:grid-cols-[0.9fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <div className="flex items-start gap-4">
                  {team?.crest && (
                    <Image
                      src={team.crest}
                      alt={team.name}
                      width={100}
                      height={100}
                      className="rounded-lg"
                      unoptimized
                    />
                  )}
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Team code</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">{team?.tla}</h2>
                    <p className="mt-4 text-slate-300">
                      {team?.name} ({team?.shortName}) competes in FIFA World Cup 2026.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <h3 className="text-xl font-semibold text-white">Team information</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li>
                    <span className="font-medium text-slate-100">Country:</span> {team?.area?.name}
                  </li>
                  <li>
                    <span className="font-medium text-slate-100">Coach:</span>{' '}
                    {team?.coach?.name || 'N/A'}
                  </li>
                  {team?.founded && (
                    <li>
                      <span className="font-medium text-slate-100">Founded:</span> {team.founded}
                    </li>
                  )}
                  {team?.website && (
                    <li>
                      <span className="font-medium text-slate-100">Website:</span>{' '}
                      <a
                        href={team.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {team.website}
                      </a>
                    </li>
                  )}
                  {team?.address && (
                    <li>
                      <span className="font-medium text-slate-100">Address:</span> {team.address}
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <aside className="rounded-3xl bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Squad composition
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Goalkeepers</span>
                  <span className="font-semibold text-slate-100">{goalkeepers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Defenders</span>
                  <span className="font-semibold text-slate-100">{defenders}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Midfielders</span>
                  <span className="font-semibold text-slate-100">{midfielders}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Forwards</span>
                  <span className="font-semibold text-slate-100">{forwards}</span>
                </div>
                <div className="border-t border-slate-700 pt-4 flex justify-between items-center">
                  <span className="text-slate-300">Total Squad</span>
                  <span className="font-semibold text-slate-100">{team?.squad?.length || 0}</span>
                </div>
              </div>
            </aside>
          </div>

          {team?.squad && team.squad.length > 0 && (
            <div className="mt-8 rounded-3xl bg-slate-950/80 p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Squad roster</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-slate-300 text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-4 font-semibold text-slate-100">Name</th>
                      <th className="text-left py-2 px-4 font-semibold text-slate-100">Position</th>
                      <th className="text-left py-2 px-4 font-semibold text-slate-100">
                        Date of Birth
                      </th>
                      <th className="text-left py-2 px-4 font-semibold text-slate-100">
                        Nationality
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {team.squad.map((player) => (
                      <tr
                        key={player.id}
                        className="border-b border-slate-800 hover:bg-slate-900/50"
                      >
                        <td className="py-3 px-4">{player.name}</td>
                        <td className="py-3 px-4">
                          <span className="inline-block bg-slate-800 rounded px-2 py-1">
                            {player.position}
                          </span>
                        </td>
                        <td className="py-3 px-4">{player.dateOfBirth}</td>
                        <td className="py-3 px-4">{player.nationality}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
