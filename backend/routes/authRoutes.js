import express from "express";
import { login, logout, register } from "../controllers/authcontroller.js";
import { authmiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/check-auth", authmiddleware, (req, res) => {
  const user = req.user;
  return res
    .status(200)
    .json({ success: true, message: "user is authenticated", user });
});

export default router;
