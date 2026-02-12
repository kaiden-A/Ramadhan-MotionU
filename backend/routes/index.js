import { Router } from "express";
import authRoutes from './auth.js'
import hadithsRoutes from './hadiths.js';
import userRoutes from './users.js';
import juzuRoutes from './juzu.js';
import requireAuth from "../middlewares/requireAuth.js";


const router = Router();

router.use('/auth' , authRoutes);
router.use('/hadiths' , hadithsRoutes);
router.use('/users' , userRoutes);
router.use('/juzu' , requireAuth , juzuRoutes);

export default router;