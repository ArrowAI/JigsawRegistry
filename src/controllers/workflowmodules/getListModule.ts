import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { WorkflowModule } from 'orm/entities/workflowModules/workflowModule';
import { CustomError } from 'utils/response/custom-error/CustomError';


export const list = async (req: Request, res: Response, next: NextFunction) => {
  const workflowModuleRepository = getRepository(WorkflowModule);
  try {
    const workflowModules = await workflowModuleRepository.find();
    const transformedModules = workflowModules.map(module => ({
        ...module,
        actions: module.actions ? JSON.parse(module.actions) : null,
        triggers: module.triggers ? JSON.parse(module.triggers) : null,
        auth: module.auth ? JSON.parse(module.auth) : null
     }));
    
    res.customSuccess(200, 'List of workflow Modules.', transformedModules);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve list of workflow modules.`, null, err);
    return next(customError);
  }
};
