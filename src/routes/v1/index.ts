import { Router } from 'express';

import auth from './auth';
import modules from './jigsawmodules';
import functions from './functions';
import cache from './cache';
import users from './users';
import workflowmodules from './workflowmodules';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/modules', modules);
router.use('/cache', cache);
router.use('/functions', functions);
router.use('/workflowmodules',workflowmodules );


export default router;
