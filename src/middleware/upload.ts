/// import multer and create a middleware
import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

import { CustomError } from '../utils/response/custom-error/CustomError';

const upload = multer({ dest: 'uploads/' });

export const uploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
  upload.single('module')(req, res, (err: any) => {
    if (err) {
      return next(err);
    }
    req.body.modulefilepath = req.file.path;
    return next();
  });
};
