import { useEffect, useMemo, useState } from 'react';
import type { Match, StandingGroup } from '@/types';
import { StandingsGuide } from '../OverView.tsx/standingGuide';
import { TournamentInfo } from '../ui/tournamentInfoCard';
import { useMatches } from '@/hooks/use-matches';
import { ArrowRight } from 'lucide-react';

interface StandingTableProps {
  entries: StandingGroup[];
}

export function StandingTable({ entries }: StandingTableProps) {
  const normalizedEntries = Array.isArray(entries) ? entries : [];
  const stageFilters = useMemo(
    () => Array.from(new Set(normalizedEntries.map((group) => group.stage))),
    [normalizedEntries],
  );
  const defaultStage = stageFilters[0] ?? 'Group Stage';
  const [selectedStage, setSelectedStage] = useState<string>(defaultStage);

  useEffect(() => {
    if (!normalizedEntries.length) {
      return;
    }

    const hasSelectedStage = normalizedEntries.some((group) => group.stage === selectedStage);

    if (!hasSelectedStage) {
      setSelectedStage(defaultStage);
    }
  }, [defaultStage, normalizedEntries, selectedStage]);

  const filteredEntries = useMemo(
    () => normalizedEntries.filter((group) => group.stage === selectedStage),
    [normalizedEntries, selectedStage],
  );

  const { data: matches = [] } = useMatches();

  const matchesForStage = useMemo(
    () =>
      matches.filter((match) =>
        String(match.round ?? '')
          .toLowerCase()
          .includes(String(selectedStage ?? '').toLowerCase()),
      ),
    [matches, selectedStage],
  );

  const standingsStageStats = useMemo(() => {
    const totalPlayedGames = filteredEntries.reduce(
      (groupAcc, group) =>
        groupAcc + group.table.reduce((teamAcc, entry) => teamAcc + entry.playedGames, 0),
      0,
    );

    const totalGoals = filteredEntries.reduce(
      (groupAcc, group) =>
        groupAcc + group.table.reduce((teamAcc, entry) => teamAcc + entry.goalsFor, 0),
      0,
    );

    return {
      matchesPlayed: Math.floor(totalPlayedGames / 2),
      goalsScored: totalGoals,
    };
  }, [filteredEntries]);

  const countCardEvents = (events: Match['events'], cardRegex: RegExp) =>
    events?.reduce(
      (count, event) =>
        count + (cardRegex.test(event.type) || cardRegex.test(event.description) ? 1 : 0),
      0,
    ) ?? 0;

  const matchesPlayed = matchesForStage.length || standingsStageStats.matchesPlayed;
  const goalsScored =
    matchesForStage.length > 0
      ? matchesForStage.reduce((sum, match) => sum + match.score.home + match.score.away, 0)
      : standingsStageStats.goalsScored;
  const avgGoalsPerMatch = matchesPlayed > 0 ? Number((goalsScored / matchesPlayed).toFixed(1)) : 0;
  const yellowCards = matchesForStage.reduce(
    (sum, match) => sum + countCardEvents(match.events, /yellow/i),
    0,
  );
  const redCards = matchesForStage.reduce(
    (sum, match) => sum + countCardEvents(match.events, /red/i),
    0,
  );

  if (!normalizedEntries.length) {
    return (
      <div className="  p-8 text-center text-slate-400">
        No standings available yet.
      </div>
    );
  }

  return (
    <div className="w-full flex gap-2 p-3.5">
      <div className="">
        <h3 className="text-2xl font-bold">Group Standing</h3>
        <p>FIFA World Cup 2026 </p>
        <div className="py-4 flex flex-wrap gap-3">
          {stageFilters.map((stage) => (
            <button
              key={stage}
              type="button"
              onClick={() => setSelectedStage(stage)}
              className={`px-4 py-2 rounded-[14px] border ${
                selectedStage === stage
                  ? 'border-white bg-white/10 text-white'
                  : 'border-[#8080804f] text-slate-300'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>

        {filteredEntries.length ? (
          <div className="grid pt-2 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-2">
            {filteredEntries.map((group) => (
              <div
                key={`${group.stage}-${group.group}`}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-soft"
              >
                <div className="border-b border-slate-800 bg-slate-950/90 px-6 py-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm   text-white">{group.group}</p>
                    <a className="text-xs flex align-middle items-center    gap-1  text-indigo-500">View Group  <ArrowRight size={13} /></a>
                  </div>
                </div>

                <table className="min-w-full border-collapse text-xs">
                  <thead className="bg-slate-950/90 text-left text-slate-400">
                    <tr>
                      <th className="px-2 py-4">Team</th>
                      <th className="px-2 py-4">P</th>
                      <th className="px-2 py-4">W</th>
                      <th className="px-2 py-4">D</th>
                      <th className="px-2 py-4">L</th>
                      <th className="px-2 py-4">GD</th>
                      <th className="px-2 py-4">Pts</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    {group.table.map((entry) => (
                      <tr
                        key={entry.team.id}
                        className="border-t border-slate-800 hover:bg-slate-950/70"
                      >
                        <td className="px-4 py-4 text-white">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold">{entry.position}.</span>
                            <img
                              src={entry.team.crest}
                              alt={`${entry.team.name} crest`}
                              className="w-6 h-6 border rounded-full object-cover"
                              onError={(e) => {
                                const img = e.currentTarget as HTMLImageElement;
                                img.style.display = 'none';
                              }}
                            />
                            <span className="truncate">{entry.team.name}</span>
                          </div>
                        </td>
                        <td className="px-2 py-4 text-slate-300">{entry.playedGames}</td>
                        <td className="px-2 py-4 text-slate-300">{entry.won}</td>
                        <td className="px-2 py-4 text-slate-300">{entry.draw}</td>
                        <td className="px-2 py-4 text-slate-300">{entry.lost}</td>
                        <td className="px-2 py-4 text-slate-300">{entry.goalDifference}</td>
                        <td className="px-4 py-4 font-semibold text-white">{entry.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center text-slate-400">
            No standings available for {selectedStage}.
          </div>
        )}
      </div>
      <div className="space-y-2 h-fit top-2.5 sticky w-[25%]">
        <StandingsGuide />
        <TournamentInfo
          matchesPlayed={matchesPlayed}
          goalsScored={goalsScored}
          avgGoalsPerMatch={avgGoalsPerMatch}
          yellowCards={yellowCards}
          redCards={redCards}
        />
      </div>
    </div>
  );
}
