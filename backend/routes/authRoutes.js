import express from "express";
import { login, profile, register } from "../controllers/authcontroller.js";
import { protect } from "../middlewares/authMiddleware.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile",protect,profile);
export default router;
