
import { CustomError } from "utils/response/custom-error/CustomError";
import { Request, Response, NextFunction } from 'express';
import { getRepository } from "typeorm";
import { Cache } from "orm/entities/cache/cache";
import { ArtifactManager } from './../../artifactManager';
let artiFactManager = new ArtifactManager();
export const download = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { key } = req.params;
    const filePath = artiFactManager.getDownloadPath(key);

    const cacheRepository = getRepository(Cache);
    const cache = await cacheRepository.findOne({cacheHash: key});

      res.download(`${cache.cacheUrl}`, (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'File download failed', error: err.message });
        }
      });
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve cache.`, null, err);
    return next(customError);
  }
}

