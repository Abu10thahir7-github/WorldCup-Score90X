import MatchCountdown from "@/components/ui/CountDown";
import Image from "next/image";

interface MatchDetailsProps {
  match: any;
}
export default function MatchLiveScoreBanner( {match}:MatchDetailsProps) {
    const matchDate = new Date(match.utcDate);

  const formattedDate = matchDate.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const formattedTime = matchDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
   const statusConfig = {
    TIMED: {
      label: 'Scheduled',
      className: 'bg-blue-500/15 text-blue-400 border border-blue-500/20',
    },
    IN_PLAY: {
      label: 'Live',
      className: 'bg-red-500/15 text-red-400 border border-red-500/20 animate-pulse',
    },
    PAUSED: {
      label: 'Half Time',
      className: 'bg-amber-500/15 text-amber-400 border border-amber-500/20',
    },
    FINISHED: {
      label: 'Full Time',
      className: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20',
    },
    POSTPONED: {
      label: 'Postponed',
      className: 'bg-orange-500/15 text-orange-400 border border-orange-500/20',
    },
    CANCELLED: {
      label: 'Cancelled',
      className: 'bg-slate-500/15 text-slate-400 border border-slate-500/20',
    },
    SUSPENDED: {
      label: 'Suspended',
      className: 'bg-purple-500/15 text-purple-400 border border-purple-500/20',
    },
    AWARDED: {
      label: 'Awarded',
      className: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20',
    },
  } as const;
  const currentStatus = statusConfig[match.status as keyof typeof statusConfig];

  console.log(match);

  return (
   <div className="overflow-hidden match-details-hero rounded-xl border border-slate-800 bg-[#081226]">
        <div className="py-6">
          <div className=" gap-2  rounded-full bg-blue-600/20 px-4 py-2 text-xs font-medium text-blue-400 flex justify-center w-fit m-auto mb-3">
            <p className="">{match.stage?.replaceAll('_', ' ') ?? 'TBA'}</p>•
            <p className="  ">{match.group?.replaceAll('_', ' ') ?? 'TBA'}</p>•
            <p className="  ">MATCH DAY {match.matchday}</p>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-3">
            {/* HOME */}
            <div className="text-center">
              <Image
                src={match.homeTeam.crest}
                alt={match.homeTeam.name}
                width={120}
                height={120}
                className="mx-auto"
                unoptimized
              />

              <h2 className="mt-4 text-2xl font-bold text-white">{match.homeTeam.name}</h2>


              <p className="text-slate-400 text-sm">{match.homeTeam.tla}</p>

            </div>

            {/* CENTER */}
            <div className="text-center ">
              <div className="text-center">
                <p className=" text-sm text-white">{formattedDate}</p>

                <div className=" ">
                  <h1 className="text-2xl font-bold text-white tracking-tight">
                    {formattedTime.split(' ')[0]} {formattedTime.split(' ')[1]}
                  </h1>
                </div>
              </div>

              <div className="">
                {match.score.fullTime.home !== null ? (
                  <h1 className="text-6xl font-black text-white">
                    {match.score.fullTime.home}
                    <span className="mx-4">:</span>
                    {match.score.fullTime.away}
                  </h1>
                ) : (
                  <h1 className="text-xl font-medium text-white">VS</h1>
                )}
              </div>

              <span
                className={`inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold ${currentStatus?.className}`}
              >
                {currentStatus?.label || match.status}
              </span>
              <div className="opacity-70">
                <MatchCountdown kickOff={match.utcDate} />
              </div>
            </div>

            {/* AWAY */}
            <div className="text-center">
              <Image
                src={match.awayTeam.crest}
                alt={match.awayTeam.name}
                width={120}
                height={120}
                className="mx-auto"
                unoptimized
              />

              <h2 className="mt-4 text-2xl font-bold text-white">{match.awayTeam.name}</h2>

              <p className="text-slate-400 text-sm">{match.awayTeam.tla}</p>
            </div>
          </div>
        </div>
      </div>
  );}