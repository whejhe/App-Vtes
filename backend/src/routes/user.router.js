import express from "express";
import {  getUsers, getUserById, updateUser, deleteUser, registerUser, loginUser } from "../controllers/user.controller.js";

const router = express.Router();

// Rutas para usuarios
router.post("/user/register", registerUser);
router.post("/users/login", loginUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;