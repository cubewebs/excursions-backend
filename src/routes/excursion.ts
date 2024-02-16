import { Router } from 'express';
import {
  deleteExcursion,
  getExcursion,
  getExcursions,
  postExcursion,
  updateExcursion,
} from '../controllers/excursion';

const router = Router();

router.get('/', getExcursions);
router.get('/:id', getExcursion);
router.delete('/:id', deleteExcursion);
router.post('/', postExcursion);
router.put('/:id', updateExcursion);

export default router;
