import { Router } from "express";
import { daily_reminder, welcome_event } from "../controllers/cron.controller.js";

const router = Router();

router.get('/daily-reminder' , daily_reminder);
router.get('/welcoming-regards' , welcome_event)

export default router;