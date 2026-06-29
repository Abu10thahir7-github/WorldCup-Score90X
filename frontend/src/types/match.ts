export interface TeamSummary {
  id: string;
  name: string;
  crest: string;
}

export interface ScoreSummary {
  winner: 'HOME_TEAM' | 'AWAY_TEAM' | 'DRAW' | null;
  duration: string;

  fullTime: {
    home: number | null;
    away: number | null;
  };

  halfTime: {
    home: number | null;
    away: number | null;
  };
}

export interface Match {
  id: string;
  round: string;
  status: string;
  kickOff: string;
  venue: string;
  utcDate: string;
  homeTeam: TeamSummary;
  awayTeam: TeamSummary;
  score: ScoreSummary;
}
