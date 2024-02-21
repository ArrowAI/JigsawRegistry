
import { CustomError } from "utils/response/custom-error/CustomError";
import { Request, Response, NextFunction } from 'express';
import { getRepository } from "typeorm";
import { Functions } from "orm/entities/functions/functions";
export const getFunction = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const key = req.params.key;
    const functionRepository = getRepository(Functions);
    const cache = await functionRepository.find({cacheId: key});
    res.customSuccess(200, 'function by cacheID.', cache);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve cache.`, null, err);
    return next(customError);
  }
}