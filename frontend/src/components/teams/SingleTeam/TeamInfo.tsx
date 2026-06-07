import type { Team } from '@/types';

export default function TeamInfo({ team }: { team: Team }) {
   const defenders = team?.squad?.filter((p) => p.position === 'Defence').length || 0;
  const midfielders = team?.squad?.filter((p) => p.position === 'Midfield').length || 0;
  const forwards = team?.squad?.filter((p) => p.position === 'Offence').length || 0;
  const goalkeepers = team?.squad?.filter((p) => p.position === 'Goalkeeper').length || 0;

  return (
    <>

      <div className="rounded-3xl bg-slate-900/80 p-6">
        <h3 className="text-xl font-semibold text-white">Team information</h3>
        <ul className="mt-4 space-y-3 text-slate-300">
          <li>
            <span className="font-medium text-slate-100">Country:</span> {team.area?.name}
          </li>
          <li>
            <span className="font-medium text-slate-100">Coach:</span> {team.coach?.name || 'N/A'}
          </li>
          {team.founded && (
            <li>
              <span className="font-medium text-slate-100">Founded:</span> {team.founded}
            </li>
          )}
          {team.website && (
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
          {team.address && (
            <li>
              <span className="font-medium text-slate-100">Address:</span> {team.address}
            </li>
          )}
        </ul>
      </div>
        <aside className="rounded-3xl bg-slate-900/80 p-2">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Squad composition</p>
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
    </>
  );
}
