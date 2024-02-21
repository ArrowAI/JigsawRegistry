
import { CustomError } from "utils/response/custom-error/CustomError";
import { Request, Response, NextFunction } from 'express';
import { getRepository } from "typeorm";
import { Cache } from "orm/entities/cache/cache";
export const setCache = async (req: Request, res: Response, next: NextFunction) => {
  const cacheRepository = getRepository(Cache);
  const cache = new Cache();
  cache.cacheId = req.body.cacheId;
  cache.cacheUrl = req.body.cacheUrl;
  cache.cacheHash = req.body.cacheHash;
  try {
    await cacheRepository.save(cache);
    res.customSuccess(200, 'Cache Added Successfully');
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't add Cache.`, null, err);
    return next(customError);
  }
}