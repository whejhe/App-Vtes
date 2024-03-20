import express from 'express';
import { createCustomCard, getCustomCardsByDeckId, updateCustomCard, deleteCustomCard } from '../controllers/customCardsControllers.js';

const router = express.Router();

// Rutas para la entidad Cards
router.post('customCard/', createCustomCard);
router.get('customCards/:deckId', getCustomCardsByDeckId);
router.put('customCards/:id', updateCustomCard);
router.delete('customCards/:id', deleteCustomCard);

export default router;