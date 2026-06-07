import { worldcupApi } from './worldcup';

export async function getTeams() {
  try {
    return await worldcupApi.getTeams();
  } catch (error) {
    console.error('Failed to fetch teams:', error);
    return [];
  }
}

export async function getTeamById(teamId: string) {
  try {
    return await worldcupApi.getTeamById(teamId);
  } catch (error) {
    console.error(`Failed to fetch team ${teamId}:`, error);
    return null;
  }
}
