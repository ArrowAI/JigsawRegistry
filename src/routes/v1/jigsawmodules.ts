import { Router } from 'express';

import { list, add } from 'controllers/jigsawmodules';
import { checkJwt } from 'middleware/checkJwt';
import { checkRole } from 'middleware/checkRole';
import { uploadMiddleware } from 'middleware/upload';
import { validatorEdit } from 'middleware/validation/users';

const router = Router();

router.get('/', [], list);

router.post('/add', [uploadMiddleware], add);

// router.get('/:id([0-9]+)', [], show);

// router.patch('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'], true), validatorEdit], edit);

// router.delete('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'], true)], destroy);

export default router;
