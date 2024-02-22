import express from 'express';
import { getCache, setCache, getAll } from './../../controllers/cache';
import {uploadMiddleware} from 'middleware/upload';


const router = express.Router();
router.get('/', getAll)
// Route to get a cache entry
router.get('/:key', getCache);

// add multer to upload files
router.post('/', [uploadMiddleware], setCache);


export default router;