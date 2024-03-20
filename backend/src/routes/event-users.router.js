import express from 'express';
import { assignUserToEvent, getUsersForEvent, updateRegistrationStatus } from '../controllers/event-users.controller.js';

const router = express.Router();

// Rutas para la entidad EventUsers
router.post('/', assignUserToEvent);
router.get('/:eventId', getUsersForEvent);
router.put('/:id', updateRegistrationStatus);

export default router;