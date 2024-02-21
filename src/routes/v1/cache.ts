import express from 'express';
import { getCache, setCache,getAll } from './../../controllers/cache';

const router = express.Router();
router.get('/',getAll)
// Route to get a cache entry
router.get('/:key', getCache);

// Route to set a cache entry
router.post('/', setCache);



export default router;