
import { CustomError } from "utils/response/custom-error/CustomError";
import { Request, Response, NextFunction } from 'express';
import { Functions } from "orm/entities/functions/functions";
import { getRepository } from "typeorm";
export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const functionsRepository = getRepository(Functions);
    const functions = await functionsRepository.find();
    res.customSuccess(200, 'all functions.', functions);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve functions.`, null, err);
    return next(customError);
  }
}