import {Router} from 'express';
import { 
    get_hadiths, 
    get_one_hadiths 
} from '../controllers/hadiths.controllers.js';


const router = Router();

router.get('/' , get_hadiths);
router.get('/:id' , get_one_hadiths);

export default router;