import { ArrowRight, ArrowRightCircle, ArrowRightCircleIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { ROUTES } from '@/constants/routes';
import { useStandings } from '@/hooks/use-standings';

function MiniGroupOverview() {
  const { data, isLoading, error } = useStandings();

  if (isLoading) return <div>Loading groups...</div>;
  if (error) return <div>Failed to load groups</div>;

  const groups = data ?? [];

  return (
    <div className=" miniOverView bg-slate-900/50 overflow-hidden p-4 rounded-xl ">
      <div className="flex mb-2 flex-row justify-between ">
        <h1 className="text-sm">Groups OverView</h1>
        <Link className="text-sm text-blue-700 flex flex-row gap-2" href={ROUTES.standings}>
          View All Groups <ArrowRight size={16} className="mt-0.5" />{' '}
        </Link>
      </div>
      <div className="Allgroups flex gap-2 overflow-auto">
        {groups.slice(0, 4).map((group) => (
          <div
            key={`${group.stage}-${group.group}`}
            className="group w-62 h-52 flex-shrink-0 rounded-2xl border p-3 border-slate-800/50  bg-slate-950/70 "
          >
            <table className="h-full w-full">
              <thead>
                <tr className="">
                  <th className="text-left text-sm font-light ">{group.group}</th>

                  <th className="text-xs text-center opacity-50 font-light">PTS</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {group.table.map((entry) => (
                  <tr key={entry.team.id} className="">
                    <td className="  text-white">
                      <div className="flex items-center gap-3">
                        <span className=" ">{entry.position}</span>
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

                    <td className=" text-center   text-white">{entry.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiniGroupOverview;
