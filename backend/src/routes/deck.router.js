import express from 'express';
import { createDeck, getDecksByUserId, updateDeckVisibility, addCardToDeck } from '../controllers/deck.controllers.js';

const router = express.Router();

// Rutas para la entidad Deck
router.post('/', createDeck);
router.get('/:userId', getDecksByUserId);
router.put('/:id/visibility', updateDeckVisibility);
router.put('/:id/add-card', addCardToDeck);

export default router;