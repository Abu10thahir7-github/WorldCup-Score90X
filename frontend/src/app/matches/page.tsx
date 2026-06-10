'use client';

import { useState } from 'react';
import { MatchCard } from '@/components/matches/match-card';
import { useMatches } from '@/hooks/use-matches';

export default function Matches() {
  const { data, isError, isLoading } = useMatches();
  console.log(data);

  const [selectedDate, setSelectedDate] = useState('all');

  if (isLoading) {
    return <div className="h-[420px] rounded-3xl bg-slate-800/80" />;
  }

  if (isError) {
    return (
      <div className="rounded-3xl border border-red-500/40 bg-red-950/30 p-6 text-red-200">
        Failed to load matches.
      </div>
    );
  }

  const matches = data || [];

  const dates = [
    'all',
    ...new Set(matches.map((match) => new Date(match.utcDate).toISOString().split('T')[0])),
  ];

  const filteredMatches =
    selectedDate === 'all'
      ? matches
      : matches.filter(
          (match) => new Date(match.utcDate).toISOString().split('T')[0] === selectedDate,
        );

  return (
    <div className="flex space-x-2 sp m-2">
      <div className="w-[80%] space-y-2">
        <div className=" space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-white">FIFA World Cup 2026 Fixtures</h1>
            <p className="mt-2 text-slate-400">Browse all scheduled World Cup matches.</p>
          </div>

          {/* Date Filter */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`rounded-xl px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedDate === date
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-[#081226] text-slate-300 border border-slate-700 hover:border-blue-500'
                }`}
              >
                {date === 'all'
                  ? 'All Matches'
                  : new Date(date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                    })}
              </button>
            ))}
          </div>

          {/* Match Count */}
          <div className="text-sm text-slate-400">Showing {filteredMatches.length} matches</div>

          {/* Matches */}
          <div className="grid gap-5">
            {filteredMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </div>
      <div className="team-info space-y-2 h-fit top-2.5 sticky w-[25%]"></div>
    </div>
  );
}
