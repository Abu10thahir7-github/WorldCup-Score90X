import { footballClient } from "../integrations/footbal-data/football.client";



export async function getWorldCupMatchesRepo() {
  const response = await footballClient.get(
    "/competitions/WC/matches"
  );

  return response.data.matches;
}


export async function getWorldCupStandingsRepo() {
  const response = await footballClient.get(
    "/competitions/WC/standings"
  );

  return response.data.standings;
}

export async function getWorldCupTeamsRepo() {
  const response = await footballClient.get(
    "/competitions/WC/teams"
  );

  return response.data.teams;
}
export async function getMatchDetailsRepo(id: string) {
  const response = await footballClient.get(`/matches/${id}`);

  return response.data;
}