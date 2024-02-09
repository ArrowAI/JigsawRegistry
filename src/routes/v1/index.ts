import { Router } from 'express';

import auth from './auth';
import modules from './jigsawmodules';
import users from './users';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/modules', modules);

export default router;
