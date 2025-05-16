import express from "express";
import { getProducts } from "../controllers/product";
import { getOrder } from "../controllers/order";

const router = express.Router();

router.get("/products", getProducts);
router.get("/orders", getOrder);

export default router;
