import { Request, Response } from 'express';
import { getAllMatchesService } from '../services/matches.services';

export async function getAllMatchesController(req: Request, res: Response) {
  try {
    const matches = await getAllMatchesService();

    return res.json(matches);
  } catch {
    return res.status(500).json({
      error: 'Failed to fetch matches',
    });
  }
}
