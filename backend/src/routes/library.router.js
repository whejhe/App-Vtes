import express from 'express';
import { createLibrary, getLibraries, getLibraryById, updateLibrary, deleteLibrary } from '../controllers/library.controller.js';

const router = express.Router();

// Rutas para la entidad Library
router.post('/', createLibrary);
router.get('/', getLibraries);
router.get('/:id', getLibraryById);
router.put('/:id', updateLibrary);
router.delete('/:id', deleteLibrary);

export default router;