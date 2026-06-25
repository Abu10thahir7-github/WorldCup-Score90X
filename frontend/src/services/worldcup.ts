import { axiosClient } from '@/lib/axios';
import { getCache, setCache } from '@/lib/cache';
import type { Match, Person, StandingGroup, Team, TopScorer } from '@/types';
import { MatchDetails } from '@/types/matchDetails';

export const worldcupApi = {
  getMatches: async (): Promise<Match[]> => {
    const cacheKey = 'matches';

    const cached = getCache(cacheKey);

    if (cached) return cached;

    const response = await axiosClient.get('/matches');

    setCache(cacheKey, response.data.data);

    return response.data.data;
  },

  // getLiveMatches: async (): Promise<Match[]> => {
  //   const response = await axiosClient.get<{ success: boolean; data: Match[] }>('/matches/live');
  //   return response.data.data;
  // },
  getMatchById: async (matchId: string) => {
    const cacheKey = `match-${matchId}`;

    const cached = getCache(cacheKey);

    if (cached) return cached;

    const response = await axiosClient.get(`/matchesDetails/${matchId}`);

    setCache(cacheKey, response.data.data);

    return response.data.data;
  },

 

    getTeams: async (): Promise<Team[]> => {
    const cacheKey = 'teams';

    const cached = getCache(cacheKey);

    if (cached) return cached;

    const response = await axiosClient.get('/teams');

    setCache(cacheKey, response.data.data);

    return response.data.data;
  },

  getTeamById: async (teamId: string) => {
    const cacheKey = `team-${teamId}`;

    const cached = getCache(cacheKey);

    if (cached) return cached;

    const response = await axiosClient.get(`/teams/${teamId}`);

    setCache(cacheKey, response.data.data);

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
