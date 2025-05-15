import express from "express";
import { createProduct, getProduct, getProducts } from "../controllers/product";

const router = express.Router();

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/product", createProduct);

export default router;
