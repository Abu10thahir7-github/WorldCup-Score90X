import { BracketMatch, BracketRounds } from '@/types/bracket';

export function organizeBracket(matches: BracketMatch[]): BracketRounds {
  const sortByDate = (stage: string) =>
    matches
      .filter((m) => m.stage === stage)
      .sort((a, b) => new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime());

  const roundOf32 = sortByDate('LAST_32');
  const roundOf16 = sortByDate('LAST_16');
  console.log("===== ROUND OF 16 =====");

  roundOf16.forEach((m, i) => {
    console.log(
      i,
      m.id,
      m.homeTeam?.name,
      "vs",
      m.awayTeam?.name,
      m.utcDate
    );
  });
  const quarterFinals = sortByDate('QUARTER_FINALS');
  const semiFinals = sortByDate('SEMI_FINALS');
  const thirdPlace = sortByDate('THIRD_PLACE');
  const final = sortByDate('FINAL');
  console.table( +
      roundOf16.map((m) => ({
        id: m.id,
        home: m.homeTeam?.name,
        away: m.awayTeam?.name,
      })),
  );
  return {
    roundOf32,
    roundOf16,
    quarterFinals,
    semiFinals,
    thirdPlace,
    final,
  };
}
