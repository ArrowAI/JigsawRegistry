
import { CustomError } from "utils/response/custom-error/CustomError";
import { Request, Response, NextFunction } from 'express';
import { getRepository } from "typeorm";
import { Cache } from "orm/entities/cache/cache";
export const getCache = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const key = req.params.key;
    const cacheRepository = getRepository(Cache);
    const cache = await cacheRepository.find({cacheHash: key});
    res.customSuccess(200, 'cashe by id.', cache);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve cache.`, null, err);
    return next(customError);
  }
}

