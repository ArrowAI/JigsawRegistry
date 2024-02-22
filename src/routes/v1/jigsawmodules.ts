import { Router } from 'express';

import {  addArrowModules, addBuildAssets, addVersions, assetsApi, getBuildAssets } from 'controllers/jigsawmodules';
import { checkJwt } from 'middleware/checkJwt';
import { checkRole } from 'middleware/checkRole';
// import { uploadMiddleware } from 'middleware/upload';


const router = Router();
// Add arrow modules
router.post('/add-arrow-modules', addArrowModules);
// Add versions
router.post('/add-versions', [checkJwt, checkRole(['ADMINISTRATOR'], true)], addVersions);
// Add Build Assets
router.post('/add-build-assets', addBuildAssets);
// Get Build Assets
router.get('/get-build-assets', [checkJwt, checkRole(['ADMINISTRATOR'], true)], getBuildAssets);
// Assets Api
router.get('/assets-api', [checkJwt, checkRole(['ADMINISTRATOR'], true)], assetsApi);

export default router;
