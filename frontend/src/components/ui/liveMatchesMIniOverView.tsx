'use client';

import React, { useState } from 'react';
import { Heart, Calendar, Bell, Star } from 'lucide-react';

interface Match {
  id: string;
  status: 'live' | 'ht' | 'upcoming' | 'finished';
  time: string;
  group: string;
  team1: {
    name: string;
    flag: string;
    score?: number;
  };
  team2: {
    name: string;
    flag: string;
    score?: number;
  };
  isFavorite?: boolean;
  isNotified?: boolean;
}

const MATCHES: Match[] = [
  {
    id: '1',
    status: 'live',
    time: "78'",
    group: 'Group C',
    team1: { name: 'Argentina', flag: '🇦🇷', score: 2 },
    team2: { name: 'Brazil', flag: '🇧🇷', score: 2 },
  },
  {
    id: '2',
    status: 'live',
    time: "65'",
    group: 'Group D',
    team1: { name: 'France', flag: '🇫🇷', score: 1 },
    team2: { name: 'Germany', flag: '🇩🇪', score: 0 },
  },
  {
    id: '3',
    status: 'ht',
    time: 'HT',
    group: 'Group A',
    team1: { name: 'USA', flag: '🇺🇸', score: 0 },
    team2: { name: 'Mexico', flag: '🇲🇽', score: 0 },
  },
];

const TABS = [

  { id: 'live', label: 'Live (3)', active: true },
  { id: 'upcoming', label: 'Upcoming', active: false },
  { id: 'finished', label: 'Finished', active: false },
];

export default function liveMatchesMIniOverView() {
  const [activeTab, setActiveTab] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('2026-06-12');

  const toggleFavorite = (matchId: string) => {
    setFavorites((prev) =>
      prev.includes(matchId) ? prev.filter((id) => id !== matchId) : [...prev, matchId],
    );
  };

  const toggleNotification = (matchId: string) => {
    setNotifications((prev) =>
      prev.includes(matchId) ? prev.filter((id) => id !== matchId) : [...prev, matchId],
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return '  text-red-400';
      case 'ht':
        return '  text-red-400';
      case 'upcoming':
        return '  text-gray-400';
      default:
        return '  text-gray-400';
    }
  };

  const getStatusText = (status: string, time: string) => {
    if (status === 'live' || status === 'ht') {
      return (
        <>
          <span className="text-xs font-bold tracking-wider">
            {status === 'live' ? 'LIVE' : 'HT'}
          </span>
          <span className="text-xs font-bold text-green-600 ml-2">{time}</span>
        </>
      );
    }
    return <span className="text-xs text-gray-400">{time}</span>;
  };

  return (
    <div className="bg-slate-900/50 p-2 rounded-xl">
      <div className="    ">
        {/* Header Section */}
        <div className="flex  items-center justify-between  ">
          <div className="flex gap-3  overflow-x-auto  ">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium !text-xs transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white  '
                    : 'bg-slate-950/70 text-gray-400 hover:bg-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Date Selector */}
          <div className="flex items-center gap-2  px-4 py-2 rounded-lg border border-slate-700/50">
            <Calendar size={16} className="text-gray-400" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-transparent text-white !text-xs font-medium focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Matches Container */}
        <div className="mt-1">
          {MATCHES.map((match) => (
            <div
              key={match.id}
              className="group   border border-slate-700/20 rounded-xl px-3 py-2 transition-all  "
            >
              {/* Match Row */}
              <div className="flex items-center justify-between gap-4">
                {/* Left Section - Status & Group */}
                <div className="min-w-fit">
                  <div className={`${getStatusColor(match.status)}    inline-block  `}>
                    {getStatusText(match.status, match.time)}
                  </div>
                  <p className="text-xs text-gray-500 font-medium">{match.group}</p>
                </div>

                {/* Center Section - Teams & Score */}
                <div className="flex-1 flex items-center justify-between">
                  {/* Team 1 */}
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl">{match.team1.flag}</span>
                    <span className="text-white font-medium text-xs">{match.team1.name}</span>
                  </div>

                  {/* Score */}
                  <div className="mx-6 text-center">
                    {match.team1.score !== undefined && match.team2.score !== undefined ? (
                      <>
                        <div className="text-lg font-bold text-white">
                          {match.team1.score}
                          <span className="text-gray-500 mx-2">-</span>
                          {match.team2.score}
                        </div>
                        <p className="text-xs text-gray-500 font-medium mt-1">
                          {match.status === 'ht' ? 'Half-Time' : 'Group Stage'}
                        </p>
                      </>
                    ) : (
                      <p className="text-sm text-gray-500 font-medium">vs</p>
                    )}
                  </div>

                  {/* Team 2 */}
                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <span className="text-white font-medium text-xs">{match.team2.name}</span>
                    <span className="text-2xl">{match.team2.flag}</span>
                  </div>
                </div>

                {/* Right Section - Actions */}
                <div className="flex items-center gap-3 ml-4">
                  {/* Favorite Button
                  <button
                    onClick={() => toggleFavorite(match.id)}
                    className={`p-2 rounded-lg transition-all ${
                      favorites.includes(match.id)
                        ? '  text-yellow-400'
                        : '  text-gray-400 hover:bg-slate-600'
                    }`}
                    title="Add to favorites"
                  >
                    <Star
                      size={18}
                      fill={favorites.includes(match.id) ? 'currentColor' : 'none'}
                    />
                  </button> */}

                  {/* Notification Button */}
                  {/* {match.status === 'upcoming' && (
                    <button
                      onClick={() => toggleNotification(match.id)}
                      className={`p-2 rounded-lg transition-all ${
                        notifications.includes(match.id)
                          ? '  text-white'
                          : '  text-gray-400 hover:bg-slate-600'
                      }`}
                      title="Enable notifications"
                    >
                      <Bell size={18} />
                    </button>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Schedule Button */}
        <div className="flex justify-center mt-2">
          <button className="border p-2 rounded-lg border-slate-700/50  bg-slate-950/70 text-blue-700 hover:text-purple-300 font-medium !text-xs transition-colors flex items-center gap-2">
            <Calendar size={15} className="text-white/50" />
            View Full Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
