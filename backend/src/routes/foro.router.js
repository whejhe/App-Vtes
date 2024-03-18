import express from "express";
import { createTopic, getAllTopics, getTopicById, updateTopic, deleteTopic } from "../controllers/foroController.js";

const router = express.Router();

// Rutas para temas del foro
router.post("/topics", createTopic);
router.get("/topics", getAllTopics);
router.get("/topics/:id", getTopicById);
router.put("/topics/:id", updateTopic);
router.delete("/topics/:id", deleteTopic);

export default router;