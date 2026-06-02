'use client';
import { SectionTitle } from '@/components/shared/section-title';
import { useTeam } from '@/hooks/use-team';
import { ErrorMessage } from '@/components/shared/error-message';

interface TeamDetailsPageProps {
  params: {
    id: string;
  };
}

export default function TeamDetailsPage({ params }: TeamDetailsPageProps) {
  const { data: team, isError, isLoading } = useTeam(params.id);

  if (isError) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <div className="h-72 rounded-3xl bg-slate-800/80" />;
  }

  if (!team) {
    return <ErrorMessage message="Team not found." />;
  }

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
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Team code</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">{team?.code}</h2>
                <p className="mt-4 text-slate-300">
                  {team?.name} is competing in Group {team?.group} for FIFA World Cup 2026.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <h3 className="text-xl font-semibold text-white">Team details</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li>
                    <span className="font-medium text-slate-100">Coach:</span> {team?.coach}
                  </li>
                  <li>
                    <span className="font-medium text-slate-100">Stadium:</span> {team?.stadium}
                  </li>
                  <li>
                    <span className="font-medium text-slate-100">FIFA ranking:</span>{' '}
                    {team?.ranking}
                  </li>
                </ul>
              </div>
            </div>
            <aside className="rounded-3xl bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Recent form</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {team?.recentForm.map((result, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-100"
                  >
                    {result}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}
