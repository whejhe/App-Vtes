import express from 'express';
// import { createDeck, getDecksByUserId, updateDeckVisibility, addCardToDeck } from '../controllers/deck.controllers.js';
import { deckControllers } from '../controllers/index.js';

const router = express.Router();

const { createDeck, getDecks ,getDeckById, getDecksByUserId, updateDeck ,updateDeckVisibility, addCardToDeck, deleteDeck } = deckControllers;

// Rutas para la entidad Deck
router.post('/deck', createDeck);
router.get('/decks', getDecks);
router.get('/decks/:id', getDeckById);
router.get('/decks/:userId', getDecksByUserId);
router.put('/decks/:id', updateDeck);
router.put('/decks/:id/visibility', updateDeckVisibility);
router.put('/decks/:id/add-card', addCardToDeck);
router.delete('/decks/:id', deleteDeck);

export default router;