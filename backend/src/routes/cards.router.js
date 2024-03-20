import express from 'express';
import { createCard, getCardsByDeckId, updateCard, deleteCard } from '../controllers/cardsControllers.js';

const router = express.Router();

// Rutas para la entidad Cards
router.post('/card', createCard);
router.get('/cards/:deckId', getCardsByDeckId);
router.put('/cards/:id', updateCard);
router.delete('cards/:id', deleteCard);

export default router;