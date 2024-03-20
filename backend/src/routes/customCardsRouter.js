import express from 'express';
import { createCustomCard, getCustomCardsByDeckId, updateCustomCard, deleteCustomCard } from '../controllers/customCardsControllers.js';

const router = express.Router();

// Rutas para la entidad Cards
router.post('/', createCustomCard);
router.get('/:deckId', getCustomCardsByDeckId);
router.put('/:id', updateCustomCard);
router.delete('/:id', deleteCustomCard);

export default router;