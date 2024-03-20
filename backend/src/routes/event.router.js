import express from 'express';
// import { createEvent, getEvents, getEventById, updateEvent, deleteEvent } from '../controllers/event.controller.js';
import { eventsControllers } from '../controllers/index.js';

const router = express.Router();

const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = eventsControllers;

// Rutas para la entidad Event
router.post('event/', createEvent);
router.get('events/', getEvents);
router.get('events/:id', getEventById);
router.put('events/:id', updateEvent);
router.delete('events/:id', deleteEvent);

export default router;