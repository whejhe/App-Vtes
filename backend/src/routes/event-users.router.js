import express from 'express';
import { assignUserToEvent, getUsersForEvent, updateRegistrationStatus } from '../controllers/event-users.controller.js';

const router = express.Router();

// Rutas para la entidad EventUsers
router.post('event/user', assignUserToEvent);
router.get('event/users/:eventId', getUsersForEvent);
router.put('event/users/:id', updateRegistrationStatus);

export default router;