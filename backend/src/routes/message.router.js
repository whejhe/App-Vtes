import express from 'express';
import { createMessage, getMessages, getMessageById, updateMessage, deleteMessage } from '../controllers/message.controllers.js';

const router = express.Router();

// Rutas para la entidad Message
router.post('message/', createMessage);
router.get('messages/', getMessages);
router.get('messages/:id', getMessageById);
router.put('messages/:id', updateMessage);
router.delete('messages/:id', deleteMessage);

export default router;