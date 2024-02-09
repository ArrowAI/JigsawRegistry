import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { JigsawModule } from 'orm/entities/jigsawmodules/JigModule';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const add = async (req: Request, res: Response, next: NextFunction) => {
  // add the jigsaw module in Database
  const jigsawModuleRepository = getRepository(JigsawModule);
  const jigsawModule = new JigsawModule();
  jigsawModule.modulename = req.body.modulename;
  jigsawModule.userid = req.body.userid;
  jigsawModule.name = req.body.name;
  try {
    await jigsawModuleRepository.save(jigsawModule);
    res.customSuccess(200, 'Module Added Successfully');
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't add jigsaw module.`, null, err);
    return next(customError);
  }
};
