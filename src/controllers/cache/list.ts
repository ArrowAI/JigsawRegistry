
import { CustomError } from "utils/response/custom-error/CustomError";
import { Request, Response, NextFunction } from 'express';
import { getRepository } from "typeorm";
import { Cache } from "orm/entities/cache/cache";
export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const cacheRepository = getRepository(Cache);
    const cache = await cacheRepository.find();
    res.customSuccess(200, 'all caches.', cache);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve cache.`, null, err);
    return next(customError);
  }
}