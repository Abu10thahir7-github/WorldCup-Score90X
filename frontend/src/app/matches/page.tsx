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
    <div className="mx-2 lg:mx-4">
  <div className="flex flex-col lg:flex-row gap-4">

    {/* Main Content */}
    <div className="w-full lg:w-[75%] space-y-2">

      {/* Header */}
      <div className='py-5'>
        <h1 className="text-xl md:text-3xl font-bold text-white">
          FIFA World Cup 2026 Fixtures
        </h1>

        <p className="mt-2 text-sm md:text-base text-slate-400">
          Browse all scheduled World Cup matches.
        </p>
      </div>

      {/* Date Filter */}
      <div className="flex gap-3  overflow-x-auto pb-2 scrollbar-hide">
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`rounded-xl px-4 py-2 !text-xs font-medium whitespace-nowrap transition-all duration-300 ${
              selectedDate === date
                ? 'bg-blue-600 text-white  '
                : 'bg-[#081226] text-slate-300  hover:border-blue-500'
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
      <div className="text-xs bg-navy-blue w-fit px-3 py-2 rounded-full text-slate-400">
        Showing {filteredMatches.length} matches
      </div>

      {/* Matches */}
      <div className="grid gap-2">
        {filteredMatches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
          />
        ))}
      </div>
    </div>

    {/* Sidebar */}
    <aside
      className="
        w-full
        lg:w-[25%]
        lg:sticky
        lg:top-4
        h-fit
        space-y-4
      "
    >
      <div className="rounded-2xl border border-slate-800 bg-[#081226] p-4">
        <h3 className="font-semibold text-white">
          Tournament Info
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          FIFA World Cup 2026
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-[#081226] p-4">
        <h3 className="font-semibold text-white">
          Quick Stats
        </h3>
      </div>
    </aside>

  </div>
</div>
  );
}
