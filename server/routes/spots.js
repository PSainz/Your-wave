import express from 'express';

import { getSpots, getSpot, createSpot } from '../controllers/spots.js';

const router = express.Router();

router.get('/', getSpots);
router.post('/', createSpot);
router.get('/:id', getSpot);

export default router;