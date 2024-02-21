
import { CustomError } from "utils/response/custom-error/CustomError";
import { Request, Response, NextFunction } from 'express';
import { getRepository } from "typeorm";
import { Version } from "orm/entities/jigsawmodules/JigModuleVersion";
export const addVersions = async (req: Request, res: Response, next: NextFunction) => {
     // add the jigsaw module in Database
  const buildVersionRepository = getRepository(Version);
  const buildVersion = new Version();
  buildVersion.moduleId = req.body.moduleId;
  buildVersion.versionNumber = req.body.versionNumber;
  try {
    await buildVersionRepository.save(buildVersion);
    res.customSuccess(200, 'Module Version Added Successfully');
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't add version .`, null, err);
    return next(customError);
  }
}