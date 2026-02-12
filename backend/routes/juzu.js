import {Router} from 'express';
import { get_progress } from '../controllers/juzu.controllers.js';

const router = Router();

router.get('/id' , get_progress);

export default router;