import express from 'express';
import { getRandomQuote, saveQuote, getActiveQuotes, toggleQuoteActive, searchQuotes } from '../controllers/quotesController.js';

const quotesRouter = express.Router();

quotesRouter.get('/random', getRandomQuote);
quotesRouter.post('/save', saveQuote);
quotesRouter.get('/active', getActiveQuotes);
quotesRouter.get('/search', searchQuotes);
quotesRouter.post('/toggle/:id', toggleQuoteActive);



export default quotesRouter;
