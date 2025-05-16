import express from "express";
import { createUser, getUser, getUsers } from "../controllers/user";

const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user", createUser);

export default router;
