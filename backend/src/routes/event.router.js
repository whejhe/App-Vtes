import express from 'express';
import { createEvent, getEvents, getEventById, updateEvent, deleteEvent } from '../controllers/event.controller.js';

const router = express.Router();

// Rutas para la entidad Event
router.post('/', createEvent);
router.get('/', getEvents);
router.get('/:id', getEventById);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;