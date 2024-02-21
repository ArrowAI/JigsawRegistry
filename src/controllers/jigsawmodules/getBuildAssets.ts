
import { CustomError } from "utils/response/custom-error/CustomError";
import { Request, Response, NextFunction } from 'express';
import { getRepository } from "typeorm";
import { BuildAsset } from "orm/entities/jigsawmodules/JigModuleAssets";
export const getBuildAssets = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const key = req.params.key;
        const buildAssetRepository = getRepository(BuildAsset);
        const buildAsset = await buildAssetRepository.find({ moduleId: key });
        res.customSuccess(200, 'buildAsset by id.', buildAsset);
    } catch (err) {
        const customError = new CustomError(400, 'Raw', `Can't retrieve cache.`, null, err);
        return next(customError);
    }
}