import express from 'express';
import { createMessage, getMessages, getMessageById, updateMessage, deleteMessage } from '../controllers/message.controllers.js';

const router = express.Router();

// Rutas para la entidad Message
router.post('/', createMessage);
router.get('/', getMessages);
router.get('/:id', getMessageById);
router.put('/:id', updateMessage);
router.delete('/:id', deleteMessage);

export default router;