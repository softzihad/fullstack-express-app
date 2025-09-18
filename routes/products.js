import express from 'express';
import { getProducts, getGenres } from '../controllers/productsController.js';

const productsRouter = express.Router();

productsRouter.get('/', getProducts);
productsRouter.get('/genres', getGenres);

export default productsRouter;
