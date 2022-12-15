import express from "express";

const router = express.Router();

import { getUser } from "../controllers/userController";

router.get("/me", getUser)

export default router;