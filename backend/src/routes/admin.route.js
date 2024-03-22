import express from "express";
import { adminControllers } from "../controllers/index.js";

const router = express.Router();

const { loginAdmin, cambiarPermisos } = adminControllers;

// Rutas para administradores
router.post("/admin/login", loginAdmin);
router.put("/admin/permisos", cambiarPermisos);

export default router;