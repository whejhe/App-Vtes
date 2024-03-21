import express from 'express';
import { cardsControllers } from '../controllers/index.js';

const router = express.Router();

const { createCard,getCards, getCardsById, getCardsByDeckId, updateCard, deleteCard } = cardsControllers;

// Rutas para la entidad Cards
router.post('/card', createCard);
router.get('/cards', getCards);
router.get('/cards/:id', getCardsById);
router.get('/cards/:deckId', getCardsByDeckId);
router.put('/cards/:id', updateCard);
router.delete('/cards/:id', deleteCard);

export default router;