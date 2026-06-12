import MatchCountdown from '@/components/ui/CountDown';
import { Calendar, Clock, Trophy, Flag, Users, MapPin } from 'lucide-react';
import Image from 'next/image';
interface MatchDetailsProps {
  match: any;
}

export function MatchDetails({ match }: MatchDetailsProps) {
  function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
    return (
      <div className="flex items-center justify-between border-b border-slate-800/70 p-2">
        <span className="text-sm text-slate-400">{label}</span>
        <span className="text-sm text-white">{value}</span>
      </div>
    );
  }

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
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* HERO */}
      <div className="overflow-hidden match-details-hero rounded-3xl border border-slate-800 bg-[#081226]">
        <div className="py-6">
          <div className=" gap-2  rounded-full bg-blue-600/20 px-4 py-2 text-xs font-medium text-blue-400 flex justify-center w-fit m-auto mb-3">
            <p className="">{match.stage.replaceAll('_', ' ')}</p>•
            <p className="  ">{match.group.replaceAll('_', ' ')}</p>•
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

              <p className="text-slate-400 text-sm">{match.homeTeam.shortName}</p>
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

              <p className="text-slate-400 text-sm">{match.awayTeam.shortName}</p>
            </div>
          </div>
        </div>
      </div>

      {/* INFO GRID */}
      <div className="grid gap-2 lg:grid-cols-2">
        {/* MATCH INFO */}
        <div className="rounded-xl border border-slate-800 bg-[#081226]  px-2">

          <h3 className="mb-2 p-2 flex items-center gap-2 text-lg font-semibold text-white">
            <Flag size={17} />
            Match Information
          </h3>

          <div className="">
            <InfoRow label="Competition" value={match.competition.name} />
            <InfoRow label="Stage" value={match.stage} />

            <InfoRow label="Group" value={match.group} />

            <InfoRow label="Matchday" value={match.matchday} />

            <InfoRow label="Venue" value={match.venue || 'TBA'} />

            <InfoRow label="Status" value={match.status} />

            <InfoRow label="Updated" value={new Date(match.lastUpdated).toLocaleString()} />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-[#081226] p-6">
          
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
              <Trophy size={20} />
              Competition Details
            </h3>
            <div className="flex gap-5">
              <Image
                src={match.competition.emblem}
                alt={match.competition.name}
                width={90}
                height={90}
                unoptimized
              />

              <div>
                <h4 className="text-2xl font-bold text-white">{match.competition.name}</h4>

                <p className="text-slate-400">Code: {match.competition.code}</p>

                <p className="text-slate-400">Type: {match.competition.type}</p>

                <p className="text-slate-400">Area: {match.area.name}</p>
              </div>
            </div>{' '}

          </div>
        </div>

        {/* HOME TEAM */}
        <div className="rounded-3xl border border-slate-800 bg-[#081226] p-6">
          <h3 className="mb-5 text-xl font-semibold text-white">Home Team</h3>

          <div className="flex items-center gap-4">
            <Image
              src={match.homeTeam.crest}
              alt={match.homeTeam.name}
              width={80}
              height={80}
              unoptimized
            />

            <div>
              <h4 className="text-xl font-bold text-white">{match.homeTeam.name}</h4>

              <p className="text-slate-400">{match.homeTeam.shortName}</p>

              <p className="text-slate-400">{match.homeTeam.tla}</p>
            </div>
          </div>
        </div>

        {/* AWAY TEAM */}
        <div className="rounded-3xl border border-slate-800 bg-[#081226] p-6">
          <h3 className="mb-5 text-xl font-semibold text-white">Away Team</h3>

          <div className="flex items-center gap-4">
            <Image
              src={match.awayTeam.crest}
              alt={match.awayTeam.name}
              width={80}
              height={80}
              unoptimized
            />

            <div>
              <h4 className="text-xl font-bold text-white">{match.awayTeam.name}</h4>

              <p className="text-slate-400">{match.awayTeam.shortName}</p>

              <p className="text-slate-400">{match.awayTeam.tla}</p>
            </div>
          </div>
        </div>

        {/* SCORE */}
        <div className="rounded-3xl border border-slate-800 bg-[#081226] p-6">
          <h3 className="mb-6 text-xl font-semibold text-white">Score</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-slate-900 p-5 text-center">
              <p className="text-slate-400">Full Time</p>

              <h2 className="mt-2 text-4xl font-bold text-white">
                {match.score.fullTime.home ?? '-'}:{match.score.fullTime.away ?? '-'}
              </h2>
            </div>

            <div className="rounded-2xl bg-slate-900 p-5 text-center">
              <p className="text-slate-400">Half Time</p>

              <h2 className="mt-2 text-4xl font-bold text-white">
                {match.score.halfTime.home ?? '-'}:{match.score.halfTime.away ?? '-'}
              </h2>
            </div>
          </div>
        </div>

        {/* REFEREES */}
        <div className="rounded-3xl border border-slate-800 bg-[#081226] p-6">
          <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
            <Users size={20} />
            Referees
          </h3>

          {match.referees?.length ? (
            <div className="space-y-3">
              {match.referees.map((ref: any, index: number) => (
                <div key={index} className="rounded-xl bg-slate-900 p-3">
                  {ref.name}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-400">Referees not assigned yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
