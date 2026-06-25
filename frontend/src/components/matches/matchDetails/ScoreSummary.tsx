'use client';

import Image from 'next/image';

interface ScoreSummaryProps {
  match: {
    homeTeam: {
      name: string;
      tla: string;
      crest: string;
    };
    awayTeam: {
      name: string;
      tla: string;
      crest: string;
    };
    score: {
      halfTime: {
        home: number | null;
        away: number | null;
      };
      fullTime: {
        home: number | null;
        away: number | null;
      };
    };
  };
}

export default function ScoreSummary({
  match,
}: ScoreSummaryProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-navy-blue">


      {/* Column Headings */}
      <div className="grid grid-cols-[1fr_80px_80px_80px] border-b border-slate-800 px-5 py-3 text-[11px] uppercase tracking-wider text-slate-500">
        <span>    <h3 className="text-sm font-semibold text-white">
          Score Summary
        </h3></span>
        <span className="text-center">1st Half</span>
        <span className="text-center">2nd Half</span>
        <span className="text-center">Full Time</span>
      </div>

      {/* Home Team */}
      <div className="grid grid-cols-[1fr_80px_80px_80px] items-center border-b border-slate-800 px-5 py-4">
        <div className="flex items-center gap-3">
          <Image
            src={match.homeTeam.crest}
            alt={match.homeTeam.name}
            width={24}
            height={24}
            unoptimized
          />

          <div>
            <p className="font-medium text-white">
              {match.homeTeam.name}
            </p>

            <p className="text-xs text-slate-500">
              ({match.homeTeam.tla})
            </p>
          </div>
        </div>

        <div className="text-center font-semibold text-white">
          {match.score.halfTime.home ?? '-'}
        </div>

        <div className="text-center font-semibold text-white">
          {(match.score.fullTime.home ?? 0) -
            (match.score.halfTime.home ?? 0)}
        </div>

        <div className="text-center text-lg font-bold text-green-400">
          {match.score.fullTime.home ?? '-'}
        </div>
      </div>

      {/* Away Team */}
      <div className="grid grid-cols-[1fr_80px_80px_80px] items-center px-5 py-4">
        <div className="flex items-center gap-3">
          <Image
            src={match.awayTeam.crest}
            alt={match.awayTeam.name}
            width={24}
            height={24}
            unoptimized
          />

          <div>
            <p className="font-medium text-white">
              {match.awayTeam.name}
            </p>

            <p className="text-xs text-slate-500">
              ({match.awayTeam.tla})
            </p>
          </div>
        </div>

        <div className="text-center font-semibold text-white">
          {match.score.halfTime.away ?? '-'}
        </div>

        <div className="text-center font-semibold text-white">
          {(match.score.fullTime.away ?? 0) -
            (match.score.halfTime.away ?? 0)}
        </div>

        <div className="text-center text-lg font-bold text-green-400">
          {match.score.fullTime.away ?? '-'}
        </div>
      </div>
    </div>
  );
}