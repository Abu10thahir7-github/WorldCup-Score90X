import {
  getWorldCupMatchesRepo,
  getWorldCupStandingsRepo,
  getWorldCupTeamsRepo,
  getMatchDetailsRepo
} from './worldcup.repository';

import { mapMatch } from './worldcup.mapper';

export async function getWorldCupMatchesService() {
  const matches = await getWorldCupMatchesRepo();

  return matches.map(mapMatch);
}

export async function getWorldCupStandingsService() {
  return await getWorldCupStandingsRepo();
}

export async function getWorldCupTeamsService() {
  return await getWorldCupTeamsRepo();
}

export async function getMatchDetailsService(id: string) {
  const match = await getMatchDetailsRepo(id);

  return match;
}