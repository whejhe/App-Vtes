
import express from 'express';
import { createCard, getCardsByDeckId, updateCard, deleteCard } from '../controllers/cardsControllers.js';

const router = express.Router();

// Rutas para la entidad Cards
router.post('/cards/newCard', createCard);
router.get('/:deckId', getCardsByDeckId);
router.put('/:id', updateCard);
router.delete('/:id', deleteCard);

export default router;