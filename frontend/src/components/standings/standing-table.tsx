import type { StandingGroup } from '@/types';

interface StandingTableProps {
  entries: StandingGroup[];
}

export function StandingTable({ entries }: StandingTableProps) {
  const normalizedEntries = Array.isArray(entries) ? entries : [];

  if (!normalizedEntries.length) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center text-slate-400">
        No standings available yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 p-2.5">
      {normalizedEntries.map((group) => (
        <div
          key={`${group.stage}-${group.group}`}
          className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-soft"
        >
          <div className="border-b border-slate-800 bg-slate-950/90 px-6 py-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{group.stage}</p>
              <p className="text-lg font-semibold text-white">{group.group}</p>
            </div>
          </div>

          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-slate-950/90 text-left text-slate-400">
              <tr>
                <th className="px-4 py-4">Team</th>
                <th className="px-4 py-4">P</th>
                <th className="px-4 py-4">W</th>
                <th className="px-4 py-4">D</th>
                <th className="px-4 py-4">L</th>
                <th className="px-4 py-4">GD</th>
                <th className="px-4 py-4">Pts</th>
              </tr>
            </thead>
            <tbody>
              {group.table.map((entry) => (
                <tr key={entry.team.id} className="border-t border-slate-800 hover:bg-slate-950/70">
                  <td className="px-4 py-4 text-white">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">{entry.position}.</span>
                      <img
                        src={entry.team.crest}
                        alt={`${entry.team.name} crest`}
                        className="w-6 h-6 rounded-full object-cover"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          img.style.display = 'none';
                        }}
                      />
                      <span className="truncate">{entry.team.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-300">{entry.playedGames}</td>
                  <td className="px-4 py-4 text-slate-300">{entry.won}</td>
                  <td className="px-4 py-4 text-slate-300">{entry.draw}</td>
                  <td className="px-4 py-4 text-slate-300">{entry.lost}</td>
                  <td className="px-4 py-4 text-slate-300">{entry.goalDifference}</td>
                  <td className="px-4 py-4 font-semibold text-white">{entry.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
