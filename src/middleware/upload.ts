/// import multer and create a middleware
import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { ArtifactManager } from '../artifactManager';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Use ArtifactManager to determine the destination
    const destination = ArtifactManager.getUploadPath();
    cb(null, destination);
  },
  filename: function (req, file, cb) {
    // Use ArtifactManager to generate the filename
    const filename = ArtifactManager.generateFilename(file);
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });
// const upload = multer({ dest: 'uploads/' });

export const uploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
  upload.single('module')(req, res, (err: any) => {
    if (err) {
      return next(err);
    }
    req.body.modulefilepath = req.file.path;
    return next();
  });
};





// src/utils/multerConfig.ts
// import multer from 'multer';
// import { ArtifactManager } from '../artifactManager';

// // Custom storage engine that delegates to the ArtifactManager
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Use ArtifactManager to determine the destination
//     const destination = ArtifactManager.getUploadPath();
//     cb(null, destination);
//   },
//   filename: function (req, file, cb) {
//     // Use ArtifactManager to generate the filename
//     const filename = ArtifactManager.generateFilename(file);
//     cb(null, filename);
//   }
// });

// const upload = multer({ storage: storage });

// export default upload;