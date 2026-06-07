'use client';
import { SectionTitle } from '@/components/shared/section-title';
import { useMatch } from '@/hooks/use-match';
import { ErrorMessage } from '@/components/shared/error-message';
import React from 'react';

interface MatchDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function MatchDetailsPage({ params }: MatchDetailsPageProps) {
  const { id } = React.use(params);
  const { data: match, isError, isLoading } = useMatch(id);

  if (isError) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <div className="h-72 rounded-3xl bg-slate-800/80" />;
  }

  if (!match) {
    return <ErrorMessage message="Match not found." />;
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <SectionTitle
        title="Match details"
        description={
          match ? `${match.homeTeam.name} vs ${match.awayTeam.name}` : 'Loading match information'
        }
      />
      {isLoading ? (
        <div className="h-72 rounded-3xl bg-slate-800/80" />
      ) : (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                      {match.round}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">
                      {match.homeTeam.name} vs {match.awayTeam.name}
                    </h2>
                  </div>
                  <p className="rounded-3xl bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950">
                    {match.score.home} - {match.score.away}
                  </p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-slate-400">Kick-off</p>
                    <p className="mt-2 text-base font-medium text-white">
                      {new Date(match.kickOff).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Venue</p>
                    <p className="mt-2 text-base font-medium text-white">{match.venue}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-3xl bg-slate-950/80 p-6">
                <h3 className="text-xl font-semibold text-white">Match events</h3>
                {match.events?.length ? (
                  <ul className="space-y-3">
                    {match.events.map((event) => (
                      <li
                        key={`${event.time}-${event.description}`}
                        className="rounded-3xl border border-slate-800 p-4"
                      >
                        <p className="text-sm text-slate-400">{event.time}</p>
                        <p className="mt-1 text-base text-white">{event.description}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400">No event feed available yet.</p>
                )}
              </div>
            </div>
            <aside className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Teams</p>
              <div className="mt-5 space-y-4">
                <div className="rounded-3xl bg-slate-900/80 p-4">
                  <p className="text-sm text-slate-400">Home</p>
                  <p className="mt-2 text-lg font-semibold text-white">{match.homeTeam.name}</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4">
                  <p className="text-sm text-slate-400">Away</p>
                  <p className="mt-2 text-lg font-semibold text-white">{match.awayTeam.name}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}
