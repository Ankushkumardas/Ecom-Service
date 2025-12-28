import express from "express";
import { adminCheck, protect } from "../middlewares/authMiddleware.js";
import {
  bestSellerProducts,
  deleteProduct,
  editProduct,
  getNewProducts,
  getProduct,
  getProducts,
  getSimilarProducts,
  postProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/", protect, adminCheck, postProduct);
router.put("/:id", protect, adminCheck, editProduct);
router.delete("/:id", protect, adminCheck, deleteProduct);
router.get("/best-seller", bestSellerProducts);
router.get("/new-arrival", getNewProducts);
router.get("/similar/:id", getSimilarProducts);
router.get("/", getProducts);
router.get("/:id", getProduct);
export default router;
