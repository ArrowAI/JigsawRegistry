import { AbstractArtifactManager } from "./abstract-artifact-manager";




export class LocalArtifactManager extends AbstractArtifactManager {
    getArtifact(key: string): Promise<any> {
        //get artifact from local folder
        throw new Error("Method not implemented.");
    }
    setArtifact(key: string, value: any): Promise<any> {
        // upload arifact to local folder
        throw new Error("Method not implemented.");
    }

    getUploadPath():string{
    return './artifacts';
    }
  
 
}