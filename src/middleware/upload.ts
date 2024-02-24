// src/middleware/upload.ts
import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { ArtifactManager } from './../artifactManager';
let artiFactManager = new ArtifactManager();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let destination = artiFactManager.getUploadPath();
    cb(null, destination);
  },
  filename: function (req, file, cb) {
    let filename = artiFactManager.generateFilename(file);
    // Ensure the filename has a .zip extension if the file is a blob
    if (file.mimetype === 'application/octet-stream') {
      //remove .blob from the filename
      filename = filename.replace('.blob', '');
      filename = `${filename}.zip`;
    }
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

export const uploadCacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
  upload.single('cache')(req, res, (err: any) => {
    if (err) {
      // Handle the error appropriately
      console.error(err);
      return res.status(500).json({ message: 'File upload failed', error: err.message });
    }
    req.body.cacheUrl = req.file.path;
    return next();
  });
};

export const uploadFunctionMiddleware = (req: Request, res: Response, next: NextFunction) => {
  upload.single('function')(req, res, (err: any) => {
    if (err) {
      // Handle the error appropriately
      console.error(err);
      return res.status(500).json({ message: 'File upload failed', error: err.message });
    }
    req.body.cacheUrl = req.file.path;
    return next();
  });
};