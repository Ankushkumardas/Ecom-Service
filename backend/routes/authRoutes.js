import express from "express";
import { login, logout, profile, register } from "../controllers/authcontroller.js";
import { protect } from "../middlewares/authMiddleware.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile",protect,profile);
router.get("/logout",logout);
export default router;
