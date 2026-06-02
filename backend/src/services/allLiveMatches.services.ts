import { getAllMatchesRepo } from '../repositories/matches.repository';

export async function getAllLiveMatchesService() {
  return await getAllMatchesRepo();
}
