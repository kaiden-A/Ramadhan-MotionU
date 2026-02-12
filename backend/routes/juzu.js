import {Router} from 'express';
import { 
    get_progress, 
    update_juzu 
} from '../controllers/juzu.controllers.js';

const router = Router();

router.get('/progress' , get_progress);
router.put('/:id' , update_juzu);

export default router;