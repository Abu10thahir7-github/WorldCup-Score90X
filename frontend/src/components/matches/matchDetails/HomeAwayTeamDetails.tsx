import Image from 'next/image';
import { Home, Plane } from 'lucide-react';

interface MatchDetailsProps {
  match: any;
}

function TeamCard({
  team,
  title,
  icon,
}: {
  team: any;
  title: string;
  icon: React.ReactNode;

}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-navy-blue    p-2">
      {/* Header */}
      <div className="mb-1 flex items-center ">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl  ">{icon}</div>

        <h3 className="  flex items-center gap-2 text-lg font-medium text-white">{title}</h3>
      </div>

      <div className="flex flex-col gap-2 lg:flex-row">
        {/* Logo */}
        <div className="flex p-2 ">
          <Image
            src={team.crest}
            alt={team.name}
            width={110}
            height={110}
            unoptimized
            className="  object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex-1">
          <h4 className="text-xl font-bold text-white">{team.name}</h4>

          <p className="text-xs text-slate-400">{team.shortName}</p>

          <div className="space-y-1 text-sm">
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">TLA</span>
              <span className=" text-white">{team.tla}</span>
            </div>

            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Short Name</span>
              <span className=" text-white">{team.shortName}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Team ID</span>
              <span className=" text-white">{team.id}</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default function HomeAwayTeamDetails({ match }: MatchDetailsProps) {
  return (
    <div className="grid gap-2 lg:grid-cols-2">
      <TeamCard team={match.homeTeam} title="Home Team" icon={<Home size={18} />} />

      <TeamCard team={match.awayTeam} title="Away Team" icon={<Plane size={18} />} />
    </div>
  );
}
