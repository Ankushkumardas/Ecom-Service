import express from "express";
import Products from "../models/Products";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.post('/',protect,)
export default router;