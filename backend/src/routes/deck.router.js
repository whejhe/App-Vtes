import express from 'express';
// import { createDeck, getDecksByUserId, updateDeckVisibility, addCardToDeck } from '../controllers/deck.controllers.js';
import { deckControllers } from '../controllers/index.js';

const router = express.Router();

const { createDeck, getDecksByUserId, updateDeckVisibility, addCardToDeck } = deckControllers;

// Rutas para la entidad Deck
router.post('/deck', createDeck);
router.get('/decks/:userId', getDecksByUserId);
router.put('/decks/:id/visibility', updateDeckVisibility);
router.put('/decks/:id/add-card', addCardToDeck);

export default router;