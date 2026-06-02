import { footballClient } from '../integrations/footbal-data/football.client';

export async function getAllMatchesRepo() {
  const response = await footballClient.get('/matches');

  return response.data.matches;
}
