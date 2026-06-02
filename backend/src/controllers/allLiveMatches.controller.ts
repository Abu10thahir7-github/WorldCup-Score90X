import { Request, Response } from 'express';
import { getAllMatchesService } from '../services/matches.services';
import { getAllLiveMatchesService } from '../services/allLiveMatches.services';

export async function getAllLiveMatchesController(req: Request, res: Response) {
  try {
    const matches = await getAllLiveMatchesService();

    return res.json(matches);
  } catch {
    return res.status(500).json({
      error: 'Failed to fetch matches',
    });
  }
}
