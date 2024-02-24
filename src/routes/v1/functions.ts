import express from 'express';
import { getFunction, addFunction,getAll } from './../../controllers/functions';
import { uploadFunctionMiddleware } from 'middleware/upload';

const router = express.Router();
router.get('/',getAll)
router.get('/:key', getFunction);
router.post('/',[uploadFunctionMiddleware], addFunction);




export default router;