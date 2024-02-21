import express from 'express';
import { getFunction, addFunction,getAll } from './../../controllers/functions';

const router = express.Router();
router.get('/',getAll)
router.get('/:key', getFunction);
router.post('/', addFunction);




export default router;