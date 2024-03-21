import express from 'express';
// import { createLibrary, getLibraries, getLibraryById, updateLibrary, deleteLibrary } from '../controllers/library.controller.js';
import { libraryControllers } from '../controllers/index.js';

const router = express.Router();

const { createLibrary, getLibraries, getLibraryById, updateLibrary, deleteLibrary } = libraryControllers;

// Rutas para la entidad Library
router.post('/library', createLibrary);
router.get('/libraries', getLibraries);
router.get('/libraries/:id', getLibraryById);
router.put('/libraries/:id', updateLibrary);
router.delete('/libraries/:id', deleteLibrary);

export default router;