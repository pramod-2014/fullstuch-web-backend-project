import express from "express";
import { fetchUsers, addUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", fetchUsers);
router.post("/", addUser);

export default router;
