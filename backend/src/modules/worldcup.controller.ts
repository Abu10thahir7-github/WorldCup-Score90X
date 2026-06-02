import { Request, Response } from 'express';

import {
  getWorldCupMatchesService,
  getWorldCupStandingsService,
  getWorldCupTeamsService,
  getMatchDetailsService,
} from './worldcup.service';

export async function getMatchesController(req: Request, res: Response) {
  try {
    const data = await getWorldCupMatchesService();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch matches',
    });
  }
}

export async function getStandingsController(req: Request, res: Response) {
  try {
    const data = await getWorldCupStandingsService();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch standings',
    });
  }
}

export async function getTeamsController(req: Request, res: Response) {
  try {
    const data = await getWorldCupTeamsService();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch teams',
    });
  }
}

export async function getMatchDetailsController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const matchId = Array.isArray(id) ? id[0] : id;

    const match = await getMatchDetailsService(matchId);

    res.status(200).json({
      success: true,
      data: match,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch match details',
    });
  }
}
