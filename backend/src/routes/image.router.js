import express from 'express';
import { createImage, getImages, getImageById, updateImage, deleteImage } from '../controllers/image.controller.js';

const router = express.Router();

// Rutas para la entidad Image
router.post('/image', createImage);
router.get('/images', getImages);
router.get('images/:id', getImageById);
router.put('images/:id', updateImage);
router.delete('images/:id', deleteImage);

export default router;