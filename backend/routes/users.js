import { Router } from "express";
import { 
    create_beta_users 
} from "../controllers/users.controllers.js";

const router = Router();

router.post('/users/create/beta' , create_beta_users);

export default router;