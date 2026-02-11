import { Router } from "express";
import authRoutes from './auth.js'
import hadithsRoutes from './hadiths.js';
import userRoutes from './users.js';

const router = Router();

router.use('/auth' , authRoutes);
router.use('/hadiths' , hadithsRoutes);
router.use('/users' , userRoutes);

export default router;