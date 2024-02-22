import { AbstractArtifactManager } from "./abstract-artifact-manager";



export class CloudArtifactManager extends AbstractArtifactManager {
    getUploadPath(): string {
        throw new Error("Method not implemented.");
    }
    getArtifact(key: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    setArtifact(key: string, value: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

}