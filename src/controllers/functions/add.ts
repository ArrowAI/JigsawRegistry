
import { CustomError } from "utils/response/custom-error/CustomError";
import { Request, Response, NextFunction } from 'express';
import { getRepository } from "typeorm";
import { Functions } from "orm/entities/functions/functions";
export const addFunction = async (req: Request, res: Response, next: NextFunction) => {
  const functionsRepository = getRepository(Functions);
  const functions = new Functions();
  functions.name = req.body.name;
  functions.detail = req.body.detail;
  functions.cacheId = req.body.cacheId;
  functions.cacheUrl = req.body.cacheUrl;
  try {
    await functionsRepository.save(functions);
    res.customSuccess(200, 'Function Added Successfully');
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't add Function .`, null, err);
    return next(customError);
  }
}