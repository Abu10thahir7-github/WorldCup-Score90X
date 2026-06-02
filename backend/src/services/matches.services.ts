import { getAllMatchesRepo } from '../repositories/matches.repository';

export async function getAllMatchesService() {
  return await getAllMatchesRepo();
}
