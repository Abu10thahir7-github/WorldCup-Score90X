import { Router } from 'express';

import {
  getMatchesController,
  getStandingsController,
  getTeamsController,
  getMatchDetailsController,
  getSingleTeamController,
  getPersonController,
} from './worldcup.controller';

const router = Router();

router.get('/matches', getMatchesController);

router.get('/standings', getStandingsController);

router.get('/teams', getTeamsController);
router.get('/teams/:id', getSingleTeamController);
router.get('/persons/:id', getPersonController);

router.get('/matches/:id', getMatchDetailsController);

export default router;
