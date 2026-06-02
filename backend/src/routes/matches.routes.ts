import { Router } from 'express';
import { getAllMatchesController } from '../controllers/matches.controller';
import { getAllLiveMatchesController } from '../controllers/allLiveMatches.controller';

const router = Router();

router.get('/Allmatches', getAllMatchesController);
router.get('/allmatches/live', getAllLiveMatchesController);

export default router;
