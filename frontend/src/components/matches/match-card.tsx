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

  return (
   <Link href={`/matches/${match.id}`}>
  <div className="grid grid-cols-[180px_1fr_140px] items-center gap-6 rounded-2xl border border-slate-800 bg-[#081226] p-5 hover:border-blue-500/30 transition-all">

    {/* Date & Time */}
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-slate-300">
        <Calendar size={14} />
        <span>{formattedDate}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-slate-400">
        <Clock size={14} />
        <span>{formattedTime}</span>
      </div>
    </div>

    {/* Teams */}
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">

      {/* Home */}
      <div className="flex items-center gap-3">
        <Image
          src={match.homeTeam.crest}
          alt={match.homeTeam.name}
          width={56}
          height={56}
          className="h-14 w-14 object-contain"
          unoptimized
        />

        <h3 className="font-semibold text-white">
          {match.homeTeam.name}
        </h3>
      </div>

      {/* Score */}
      <div className="text-center min-w-[90px]">
        {homeScore !== null && awayScore !== null ? (
          <>
            <div className="text-3xl font-bold text-white">
              {homeScore} : {awayScore}
            </div>
            <p className="text-xs text-slate-500">FULL TIME</p>
          </>
        ) : (
          <>
            <div className="text-2xl font-bold text-white">VS</div>
            <p className="text-xs text-slate-500">Scheduled</p>
          </>
        )}
      </div>

      {/* Away */}
      <div className="flex items-center justify-end gap-3">
        <h3 className="text-right font-semibold text-white">
          {match.awayTeam.name}
        </h3>

        <Image
          src={match.awayTeam.crest}
          alt={match.awayTeam.name}
          width={56}
          height={56}
          className="h-14 w-14 object-contain"
          unoptimized
        />
      </div>
    </div>

    {/* Details */}
    <div className="flex justify-end">
      <span className="flex items-center gap-2 text-sm font-medium text-blue-400">
        Match Details
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </div>

  </div>
</Link>
  );
}
