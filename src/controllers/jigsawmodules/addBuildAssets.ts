
import { Request, Response, NextFunction } from 'express';
import { getRepository } from "typeorm";
import { BuildAsset } from '../../orm/entities/jigsawmodules/JigModuleAssets';
import { CustomError } from '../../utils/response/custom-error/CustomError';

export const addBuildAssets = async (req: Request, res: Response, next: NextFunction) => {
    // add the jigsaw module in Database
  const buildAssetRepository = getRepository(BuildAsset);
  const buildAsset = new BuildAsset();
  buildAsset.assetName = req.body.assetName;
  buildAsset.assetUrl = req.body.assetUrl;
  buildAsset.moduleId = req.body.moduleId;
  
  try {
    await buildAssetRepository.save(buildAsset);
    res.customSuccess(200, 'Build Asset Added Successfully');
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't add build asset .`, null, err);
    return next(customError);
  }
}