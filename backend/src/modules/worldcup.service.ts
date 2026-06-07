import {
  getWorldCupMatchesRepo,
  getWorldCupStandingsRepo,
  getWorldCupTeamsRepo,
  getMatchDetailsRepo,
  getWorldCupSingleTeamsRepo,
  getPersonRepo
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
export async function getWorldCupSingleTeamsService(id: string) {
  const singleTeam = await getWorldCupSingleTeamsRepo(id);
  return singleTeam;
}
export async function getPersonService(id: string) {
  const person = await getPersonRepo(id);
  return person;
}

export async function getMatchDetailsService(id: string) {
  const match = await getMatchDetailsRepo(id);

  return match;
}