import { axiosClient } from '@/lib/axios';
import type { Match, Person, StandingGroup, Team, TopScorer } from '@/types';
import { MatchDetailsResponse } from '@/types/matchDetails';

export const worldcupApi = {
  getMatches: async (): Promise<Match[]> => {
    const response = await axiosClient.get<{ success: boolean; data: Match[] }>('/matches');
    return response.data.data;
  },

  // getLiveMatches: async (): Promise<Match[]> => {
  //   const response = await axiosClient.get<{ success: boolean; data: Match[] }>('/matches/live');
  //   return response.data.data;
  // },
  getMatchById: async (matchId: string): Promise<MatchDetailsResponse> => {
    const response = await axiosClient.get<{ success: boolean; data: MatchDetailsResponse }>(
      `/matchesDetails/${matchId}`,
    );
  
    return response.data.data;
  },

  getTeams: async (): Promise<Team[]> => {
    const response = await axiosClient.get<{ success: boolean; data: Team[] }>('/teams');
    return response.data.data;
  },
  getTeamById: async (teamId: string): Promise<Team> => {
    const response = await axiosClient.get<{ success: boolean; data: Team }>(`/teams/${teamId}`);
    return response.data.data;
  },
  getPersonById: async (personId: string): Promise<Person> => {
    const response = await axiosClient.get<{ success: boolean; data: Person }>(
      `/persons/${personId}`,
    );
    console.log('getPersonById' + response.data);

    return response.data.data;
  },
  getStandings: async (): Promise<StandingGroup[]> => {
    const response = await axiosClient.get<{ success: boolean; data: StandingGroup[] }>(
      '/standings',
    );
    return response.data.data;
  },
  getTopScorers: async (): Promise<TopScorer[]> => {
    const response = await axiosClient.get<{ success: boolean; data: TopScorer[] }>('/top-scorers');
    return response.data.data;
  },
};
