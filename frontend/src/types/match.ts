export interface TeamSummary {
  id: string;
  name: string;
  flagUrl: string;
}

export interface ScoreSummary {
  home: number;
  away: number;
}

export interface Match {
  id: string;
  round: string;
  status: 'scheduled' | 'live' | 'finished';
  kickOff: string;
  venue: string;
  homeTeam: TeamSummary;
  awayTeam: TeamSummary;
  score: ScoreSummary;
  events?: Array<{ time: string; description: string; type: string }>;
}
