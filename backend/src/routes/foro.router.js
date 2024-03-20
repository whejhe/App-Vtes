import express from 'express';
import { createForo, getForos, getForoById, updateForo, deleteForo } from '../controllers/foro.controllers.js';

const router = express.Router();

// Rutas para la entidad Foro
router.post('foro/', createForo);
router.get('foros/', getForos);
router.get('foros/:id', getForoById);
router.put('foros/:id', updateForo);
router.delete('foros/:id', deleteForo);

export default router;