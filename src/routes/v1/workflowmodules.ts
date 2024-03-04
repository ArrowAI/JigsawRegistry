import { addWrokflowModule, list } from 'controllers/workflowmodules';
import { Router } from 'express';

const router = Router();
// Add workflow modules
router.post('/', addWrokflowModule);
router.get('/', list);
export default router;
