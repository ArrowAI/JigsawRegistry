import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { WorkflowModule } from 'orm/entities/workflowModules/workflowModule';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const addWrokflowModule = async (req: Request, res: Response, next: NextFunction) => {
 // Create a new instance of WorkflowModule
 const workflowModuleRepository = getRepository(WorkflowModule);
 const workflowModule = new WorkflowModule();

 // Populate the WorkflowModule instance from req.body one property at a time
 workflowModule.name = req.body.name;
 workflowModule.npmRepo = req.body.npmRepo;
 workflowModule.displayName = req.body.displayName;
 workflowModule.logoUrl = req.body.logoUrl;
 workflowModule.description = req.body.description;
 workflowModule.version = req.body.version;
 workflowModule.minimumSupportedRelease = req.body.minimumSupportedRelease;
 workflowModule.maximumSupportedRelease = req.body.maximumSupportedRelease;

 // If actions, triggers, or auth are provided as JSON in req.body, stringify them
 if (req.body.actions) {
    workflowModule.actions = JSON.stringify(req.body.actions);
 }
 if (req.body.triggers) {
    workflowModule.triggers = JSON.stringify(req.body.triggers);
 }
 if (req.body.auth) {
    workflowModule.auth = JSON.stringify(req.body.auth);
 }

 try {
    await workflowModuleRepository.save(workflowModule);
    res.customSuccess(200, 'Module Added Successfully');
 } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't add workflow module.`, null, err);
    return next(customError);
 }
};