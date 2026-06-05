// app/teams/page.tsx

import { getTeams } from '@/services/teamService';
import TeamCard from './TeamCard';
import type { Team } from '@/types';

export default async function TeamsPage() {
  const teams = await getTeams();

  return (
    <section className="min-h-screen bg-[#020817] text-white p-8">
      <div className="flex justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold">Teams</h1>

          <p className="text-gray-400">Explore all teams competing in FIFA World Cup</p>
        </div>
      </div>

      {teams.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No teams found</p>
        </div>
      ) : (
        <div className="grid xl:grid-cols-[1fr_320px] gap-8">
          {/* Teams Grid */}
          <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
              {teams.map((team: Team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#081226] rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4">Quick Stats</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-[#0B1831] p-4">
                  <h4 className="text-2xl font-bold">{teams.length}</h4>
                  <p className="text-gray-400 text-sm">Teams</p>
                </div>

                <div className="rounded-xl bg-[#0B1831] p-4">
                  <h4 className="text-2xl font-bold">
                    {new Set(teams.map((t: Team) => t.area?.code || t.tla)).size}
                  </h4>
                  <p className="text-gray-400 text-sm">Countries</p>
                </div>
              </div>
            </div>

            <div className="bg-[#081226] rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4">Squad Statistics</h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Total Players</span>
                  <span className="font-semibold">
                    {teams.reduce((sum, team) => sum + (team.squad?.length || 0), 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
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
      )}
    </section>
  );
}
