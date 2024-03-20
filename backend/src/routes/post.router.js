import express from 'express';
import { createPost, getPosts, getPostById, updatePost, deletePost } from '../controllers/post.controllers.js';

const router = express.Router();

// Rutas para la entidad Post
router.post('post/', createPost);
router.get('posts/', getPosts);
router.get('posts/:id', getPostById);
router.put('posts/:id', updatePost);
router.delete('posts/:id', deletePost);

export default router;