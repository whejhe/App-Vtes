import express from 'express';
import { createPost, getPosts, getPostById, updatePost, deletePost } from '../controllers/post.controllers.js';

const router = express.Router();

// Rutas para la entidad Post
router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;