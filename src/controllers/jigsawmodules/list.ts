import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { JigsawModule } from 'orm/entities/jigsawmodules/JigModule';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const jigsawModuleRepository = getRepository(JigsawModule);
  try {
    const jigsawModules = await jigsawModuleRepository.find({
      select: ['id', 'modulename', 'userid', 'name'],
    });
    res.customSuccess(200, 'List of Jigsaw Modules.', jigsawModules);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve list of jigsaw modules.`, null, err);
    return next(customError);
  }
};
