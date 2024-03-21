import express from 'express';
import { customCardsControllers } from '../controllers/index.js';

const router = express.Router();

const { createCustomCard,getCustomCardById, getCustomCardsByDeckId, updateCustomCard, deleteCustomCard } = customCardsControllers;

// Rutas para la entidad Cards
router.post('/customCard', createCustomCard);
router.get('/customCards/:id', getCustomCardById);
router.get('/customCards/:deckId', getCustomCardsByDeckId);
router.put('/customCards/:id', updateCustomCard);
router.delete('/customCards/:id', deleteCustomCard);

export default router;