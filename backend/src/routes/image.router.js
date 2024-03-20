import express from 'express';
import { createImage, getImages, getImageById, updateImage, deleteImage } from '../controllers/image.controller.js';

const router = express.Router();

// Rutas para la entidad Image
router.post('/', createImage);
router.get('/', getImages);
router.get('/:id', getImageById);
router.put('/:id', updateImage);
router.delete('/:id', deleteImage);

export default router;