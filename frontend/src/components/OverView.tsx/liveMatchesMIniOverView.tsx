'use client';

import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

interface Props {
  data: any[];
}

export default function LiveMatchesMiniOverView({ data }: Props) {
  const liveMatches =
    data?.filter((match) => match.status === 'IN_PLAY' || match.status === 'PAUSED') || [];

  const [activeTab, setActiveTab] = useState(liveMatches.length > 0 ? 'live' : 'upcoming');
  const today = new Date().toLocaleDateString('en-CA');

  const [selectedDate, setSelectedDate] = useState(today);

  const TABS = [
    ...(liveMatches?.length > 0
      ? [
          {
            id: 'live',
            label: `Live (${liveMatches?.length})`,
          },
        ]
      : []),
    {
      id: 'upcoming',
      label: 'Upcoming',
    },
    {
      id: 'finished',
      label: 'Finished',
    },
  ];

  const filteredMatches =
    data?.filter((match) => {
      const matchDate = new Date(match.utcDate).toLocaleDateString('en-CA');

      const dateMatch = matchDate === selectedDate;

      let statusMatch = true;

      if (activeTab === 'live') {
        statusMatch = match.status === 'IN_PLAY';
      }

      if (activeTab === 'upcoming') {
        statusMatch = match.status === 'TIMED';
      }

      if (activeTab === 'finished') {
        statusMatch = match.status === 'FINISHED';
      }

      return dateMatch && statusMatch;
    }) || [];

  return (
    <div className="bg-slate-900/50 p-2 rounded-xl">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium !text-xs transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-950/70 text-gray-400 hover:bg-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Date Picker */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700/50">
            <Calendar size={16} className="text-gray-400" />

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-transparent text-white !text-xs font-medium focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Matches */}
        <div className="mt-2 space-y-1 px-2 h-[27vh] w-full overflow-auto">
          {filteredMatches.length === 0 ? (
            <div className="flex h-28 items-center justify-center rounded-xl border border-slate-700/30">
              <p className="text-sm text-slate-400">No matches found for {selectedDate}</p>
            </div>
          ) : (
            filteredMatches.map((match) => (
              <div key={match.id} className="group border border-slate-700/20  rounded-xl px-3 py-2">
                <div className="flex items-center justify-between gap-4">
                  {/* Status */}
                  <div className="min-w-fit">
                    <div className="text-xs font-bold text-red-400">{match.status}</div>

                    <p className="text-xs text-gray-500">
                      {new Date(match.utcDate).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>

                  {/* Teams */}
                  <div className="flex-1 flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <img
                        src={match.homeTeam.crest}
                        alt={match.homeTeam.name}
                        className="h-8 w-8"
                      />

                      <span className="text-white font-medium text-xs">{match.homeTeam.name}</span>
                    </div>

                    <div className="mx-6 text-center">
                      {match.status === 'TIMED' ? (
                        <p className="text-sm text-slate-400">VS</p>
                      ) : (
                        <div className="text-lg font-bold text-white">
                          {match.score?.fullTime?.home ?? 0}
                          <span className="mx-2 text-slate-500">-</span>
                          {match.score?.fullTime?.away ?? 0}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3 flex-1 justify-end">
                      <span className="text-white font-medium text-xs">{match.awayTeam.name}</span>

                      <img
                        src={match.awayTeam.crest}
                        alt={match.awayTeam.name}
                        className="h-8 w-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex  justify-center mt-2">
          <Link
            href={'/matches'}
            className="border p-2 rounded-lg border-slate-700/50 bg-slate-950/70 text-blue-700 hover:text-purple-300 font-medium !text-xs transition-colors flex items-center gap-2"
          >
            <Calendar size={15} className="text-white/50" />
            View Full Schedule
          </Link>
        </div>
      </div>
    </div>
  );
}
