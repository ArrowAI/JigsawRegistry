
import { CustomError } from "utils/response/custom-error/CustomError";
import { Request, Response, NextFunction } from 'express';
export const assetsApi = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.customSuccess(200, 'Module Added Successfully');
      } catch (err) {
        const customError = new CustomError(400, 'Raw', `Can't add jigsaw module.`, null, err);
        return next(customError);
      }
}