'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, Trophy, Flag, Users, MapPin } from 'lucide-react';

import { useMatch } from '@/hooks/use-matchDetails';
import { ErrorMessage } from '@/components/shared/error-message';

interface MatchDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
      <span className="text-slate-400">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}

export default function MatchDetailsPage({ params }: MatchDetailsPageProps) {
  const { id } = React.use(params);

  const { data: match, isLoading, isError } = useMatch(id);
const Match = match?.data
  if (isLoading) {
    return <div className="h-96 animate-pulse rounded-3xl bg-slate-800/70" />;
  }

  if (isError || !match) {
    return <ErrorMessage />;
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* HERO */}
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-[#081226]">
        <div className="relative p-8">
          <div className="mb-6 flex justify-center">
            <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-400">
              {match.data.stage.replaceAll('_', ' ')}
            </span>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-3">
            {/* HOME */}
            <div className="text-center">
              <Image
                src={match.data.homeTeam.crest}
                alt={match.data.homeTeam.name}
                width={120}
                height={120}
                className="mx-auto"
                unoptimized
              />

              <h2 className="mt-4 text-3xl font-bold text-white">{match.data.homeTeam.name}</h2>

              <p className="text-slate-400">{match.data.homeTeam.shortName}</p>
            </div>

            {/* CENTER */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">{match.data.competition.name}</h3>

              <p className="mt-2 text-slate-400">{new Date(match.data.utcDate).toLocaleDateString()}</p>

              <p className="text-slate-400">{new Date(match.data.utcDate).toLocaleTimeString()}</p>

              <div className="my-6">
                {match.data.score.fullTime.home !== null ? (
                  <h1 className="text-6xl font-black text-white">
                    {match.data.score.fullTime.home}
                    <span className="mx-4">:</span>
                    {match.data.score.fullTime.away}
                  </h1>
                ) : (
                  <h1 className="text-5xl font-black text-white">VS</h1>
                )}
              </div>

              <span className="rounded-full bg-green-500/15 px-4 py-2 text-sm font-medium text-green-400">
                {match.data.status}
              </span>

              <p className="mt-4 text-sm text-slate-500">{match.data.group.replaceAll('_', ' ')}</p>
            </div>

            {/* AWAY */}
            <div className="text-center">
              <Image
                src={match.data.awayTeam.crest}
                alt={match.data.awayTeam.name}
                width={120}
                height={120}
                className="mx-auto"
                unoptimized
              />

              <h2 className="mt-4 text-3xl font-bold text-white">{match.data.awayTeam.name}</h2>

              <p className="text-slate-400">{match.data.awayTeam.shortName}</p>
            </div>
          </div>
        </div>
      </div>

      {/* INFO GRID */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* MATCH INFO */}
        <div className="rounded-3xl border border-slate-800 bg-[#081226] p-6">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
            <Flag size={20} />
            Match Information
          </h3>

          <div className="space-y-4">
            <InfoRow label="Competition" value={match.data.competition.name} />

            <InfoRow label="Stage" value={match.data.stage} />

            <InfoRow label="Group" value={match.data.group} />

            <InfoRow label="Matchday" value={match.data.matchday} />

            <InfoRow label="Venue" value={match.data.venue || 'TBA'} />

            <InfoRow label="Status" value={match.data.status} />

            <InfoRow label="Updated" value={new Date(match.data.lastUpdated).toLocaleString()} />
          </div>
        </div>

        {/* COMPETITION */}
        <div className="rounded-3xl border border-slate-800 bg-[#081226] p-6">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
            <Trophy size={20} />
            Competition Details
          </h3>

          <div className="flex gap-5">
            <Image
              src={match.data.competition.emblem}
              alt={match.data.competition.name}
              width={90}
              height={90}
              unoptimized
            />

            <div>
              <h4 className="text-2xl font-bold text-white">{match.data.competition.name}</h4>

              <p className="text-slate-400">Code: {match.data.competition.code}</p>

              <p className="text-slate-400">Type: {match.data.competition.type}</p>

              <p className="text-slate-400">Area: {match.data.area.name}</p>
            </div>
          </div>
        </div>

        {/* HOME TEAM */}
        <div className="rounded-3xl border border-slate-800 bg-[#081226] p-6">
          <h3 className="mb-5 text-xl font-semibold text-white">Home Team</h3>

          <div className="flex items-center gap-4">
            <Image
              src={match.data.homeTeam.crest}
              alt={match.data.homeTeam.name}
              width={80}
              height={80}
              unoptimized
            />

            <div>
              <h4 className="text-xl font-bold text-white">{match.data.homeTeam.name}</h4>

              <p className="text-slate-400">{match.data.homeTeam.shortName}</p>

              <p className="text-slate-400">{match.data.homeTeam.tla}</p>
            </div>
          </div>
        </div>

        {/* AWAY TEAM */}
        <div className="rounded-3xl border border-slate-800 bg-[#081226] p-6">
          <h3 className="mb-5 text-xl font-semibold text-white">Away Team</h3>

          <div className="flex items-center gap-4">
            <Image
              src={match.data.awayTeam.crest}
              alt={match.data.awayTeam.name}
              width={80}
              height={80}
              unoptimized
            />

            <div>
              <h4 className="text-xl font-bold text-white">{match.data.awayTeam.name}</h4>

              <p className="text-slate-400">{match.data.awayTeam.shortName}</p>

              <p className="text-slate-400">{match.data.awayTeam.tla}</p>
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
                {match.data.score.fullTime.home ?? '-'}:{match.data.score.fullTime.away ?? '-'}
              </h2>
            </div>

            <div className="rounded-2xl bg-slate-900 p-5 text-center">
              <p className="text-slate-400">Half Time</p>

              <h2 className="mt-2 text-4xl font-bold text-white">
                {match.data.score.halfTime.home ?? '-'}:{match.data.score.halfTime.away ?? '-'}
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

          {match.data.referees?.length ? (
            <div className="space-y-3">
              {match.data.referees.map((ref: any, index: number) => (
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
