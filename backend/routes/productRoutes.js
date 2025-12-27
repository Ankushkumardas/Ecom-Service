import express from "express";
import { adminCheck, protect } from "../middlewares/authMiddleware.js";
import {
  deleteProduct,
  editProduct,
  getProducts,
  postProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/", protect, adminCheck, postProduct);
router.put("/:id", protect, adminCheck, editProduct);
router.delete("/:id", protect, adminCheck, deleteProduct);
router.get("/:id", protect, getProducts);
export default router;
