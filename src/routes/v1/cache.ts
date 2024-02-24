import express from 'express';
import { getCache, setCache, getAll,download } from './../../controllers/cache';
import {uploadCacheMiddleware} from 'middleware/upload';


const router = express.Router();
router.get('/', getAll)
// Route to get a cache entry
router.get('/:key', getCache);
router.get('/:key/download', download);

// add multer to upload files
router.post('/', [uploadCacheMiddleware], setCache);


export default router;