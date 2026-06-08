// app/teams/page.tsx

import { getTeams } from '@/services/teamService';
import TeamCard from './TeamCard';
import type { Team } from '@/types';
import Banner from './banner';
import TeamBanner from '@/public/assets/Images/2026banner.png';

export default async function TeamsPage() {
  const teams = await getTeams();


  return (
    <section className="min-h-screen space-y-2 bg-[#020817] text-white p-4">

      {teams.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No teams found</p>
        </div>
      ) : (
        <div className="grid xl:grid-cols-[1fr_320px] gap-2">
          {/* T0eams Grid */}
          <div className='space-y-2'>
               <Banner
        image={TeamBanner}
        title="FIFA World Cup 2026"
        subtitle="Explore all teams competing in FIFA World Cup."
        height="h-[200px]"
      >

      </Banner>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
              {teams.map((team: Team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-2 h-fit top-2.5 sticky w-[100%] ">
            <div className="bg-[#081226] rounded-2xl p-3 border border-white/10 space-y-2">
              <div className="flex justify-between">
                <p className=" text-sm font-semibold text-white">Filters</p>
                <p className="text-sm text-indigo-500"> Clear All</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-slate-950/90  p-2 text-sm rounded-xl w-full"
                />
              </div>
            </div>

            <div className="bg-[#081226] rounded-2xl p-3 border border-white/10">
              <h3 className=" text-sm font-semibold mb-1">Quick Stats</h3>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-slate-950/90  p-4">
                  <h4 className="text-sm font-bold">{teams.length}</h4>
                  <p className="text-gray-400 text-xs">Teams</p>
                </div>

                <div className="rounded-xl bg-slate-950/90  p-4">
                  <h4 className="text-sm font-bold">
                    {new Set(teams.map((t: Team) => t.area?.code || t.tla)).size}
                  </h4>
                  <p className="text-gray-400 text-xs">Countries</p>
                </div>
              </div>

              <div className="bg-[#081226] rounded-2xl p-2  ">
                <h3 className="text-sm font-semibold mb-1">Squad Statistics</h3>

                <div className="space-y2 rounded-xl bg-slate-950/90  p-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Total Players</span>
                    <span className="font-semibold">
                      {teams.reduce((sum, team) => sum + (team.squad?.length || 0), 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Avg Squad Size</span>
                    <span className="font-semibold">
                      {teams.length > 0
                        ? Math.round(
                            teams.reduce((sum, team) => sum + (team.squad?.length || 0), 0) /
                              teams.length,
                          )
                        : 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
