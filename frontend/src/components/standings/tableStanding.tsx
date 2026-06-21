import { StandingGroup } from '@/types';
import Link from 'next/link';
import { useMemo } from 'react';

interface StandingTableProps {
  entries: StandingGroup[];
}

export function TableStanding({ entries }: StandingTableProps) {
  const overallStandings = useMemo(() => {
    return entries
      .flatMap((group) => group.table)
      .sort((a, b) => {
        if (b.points !== a.points) {
          return b.points - a.points;
        }

        if (b.goalDifference !== a.goalDifference) {
          return b.goalDifference - a.goalDifference;
        }

        return b.goalsFor - a.goalsFor;
      });
  }, [entries]);
  return (
    <div className="w-full flex gap-4">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-white">FIFA World Cup 2026 Rankings</h2>

        <p className="text-slate-400 mt-1">Overall tournament standings</p>

        <div className="mt-5 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80">
          <table className="w-full text-sm">
            <thead className="bg-slate-950">
              <tr>
                <th className="px-4 py-4 text-left">#</th>
                <th className="px-4 py-4 text-left">Team</th>
                <th className="px-3 py-4 text-center">P</th>
                <th className="px-3 py-4 text-center">W</th>
                <th className="px-3 py-4 text-center">D</th>
                <th className="px-3 py-4 text-center">L</th>
                <th className="px-3 py-4 text-center">GF</th>
                <th className="px-3 py-4 text-center">GA</th>
                <th className="px-3 py-4 text-center">GD</th>
                <th className="px-3 py-4 text-center">PTS</th>
              </tr>
            </thead>

            <tbody>
              {overallStandings.map((team, index) => (
                <tr
                  key={team.team.id}
                  className="border-t border-slate-800 hover:bg-slate-800/40 transition"
                >
                  <td className="px-4 py-4">
                    <span
                      className={`font-bold ${index < 8 ? 'text-green-400' : 'text-slate-300'}`}
                    >
                      {index + 1}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <Link href={`/teams/${team.team.id}`} className="flex items-center gap-3">
                      <img
                        src={team.team.crest}
                        alt={team.team.name}
                        className="h-8 w-8  object-contain"
                      />

                      <div>
                        <p className="font-medium underline text-white">{team.team.name}</p>

                        <p className="text-xs text-slate-500">{team.team.tla}</p>
                      </div>
                    </Link>
                  </td>

                  <td className="text-center text-slate-300">{team.playedGames}</td>

                  <td className="text-center text-slate-300">{team.won}</td>

                  <td className="text-center text-slate-300">{team.draw}</td>

                  <td className="text-center text-slate-300">{team.lost}</td>

                  <td className="text-center text-slate-300">{team.goalsFor}</td>

                  <td className="text-center text-slate-300">{team.goalsAgainst}</td>

                  <td className="text-center text-slate-300">
                    {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                  </td>

                  <td className="text-center font-bold text-indigo-400">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
