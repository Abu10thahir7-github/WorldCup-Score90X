import { footballClient } from '../integrations/footbal-data/football.client';

export async function getAllLiveMatchesRepo() {
  const response = await footballClient.get('/matches?status=LIVE');

  return response.data.matches;
}
