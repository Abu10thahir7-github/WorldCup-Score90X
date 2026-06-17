import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface MatchCardProps {
  match: any;
}

export function MatchCard({ match }: MatchCardProps) {
  const matchDate = new Date(match.utcDate);

  const formattedDate = matchDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const formattedTime = matchDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  const homeScore = match.score?.fullTime?.home;
  const awayScore = match.score?.fullTime?.away;
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
  return (
    <Link href={`/matches/${match.id}`}>
      <div className="group rounded-2xl border border-slate-800 bg-navy-blue p-4 transition-all hover:border-blue-500/30">
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_140px] items-center gap-5">
          {/* Date & Time */}

          <div className="flex justify-between lg:block space-y-1">
            <div className="flex items-center gap-2 text-xs text-white">
              <Calendar className="text-green-500" size={14} />
              <span>{formattedDate}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-white">
              <Clock className="text-green-500" size={14} />
              <span>{formattedTime}</span>
            </div>
          </div>

          {/* Teams */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            {/* Home */}
            <div className="flex  flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <Image
                src={match.homeTeam.crest}
                alt={match.homeTeam.name}
                width={56}
                height={56}
                className="h-12 w-12 sm:h-14 sm:w-14  object-contain"
                unoptimized
              />

              <h3 className="text-center sm:text-left text-sm font-medium text-white">
                {match.homeTeam.name}
              </h3>
            </div>

            {/* Score */}
            <div className="text-center min-w-[70px] sm:min-w-[90px]">
              {homeScore !== null && awayScore !== null ? (
                <>
                  <div className="text-xl sm:text-3xl font-bold text-white">
                    {homeScore} : {awayScore}
                  </div>
                  <p className="text-xs text-slate-500"> {currentStatus?.label || match.status}</p>
                </>
              ) : (
                <>
                  <div className="text-base sm:text-sm  space-y-1 text-white">VS</div>
                  <p className="text-xs text-slate-500">
                    {currentStatus?.label || match.status}
                  </p>
                </>
              )}
            </div>

            {/* Away */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2 sm:gap-3">
              <h3 className="text-center sm:text-right text-sm font-medium font-semibold text-white">
                {match.awayTeam.name}
              </h3>

              <Image
                src={match.awayTeam.crest}
                alt={match.awayTeam.name}
                width={56}
                height={56}
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex justify-center lg:justify-end border-t lg:border-t-0 border-slate-800 pt-3 lg:pt-0">
            <span className="flex items-center gap-2 text-xs font-medium text-blue-400">
              Match Details
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
