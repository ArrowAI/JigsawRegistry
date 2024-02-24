import { AbstractArtifactManager } from "./abstract-artifact-manager";



export class CloudArtifactManager extends AbstractArtifactManager {
    public override  getUploadPath(): string {
        throw new Error("Method not implemented.");
    }
    public override   getArtifact(key: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public override  setArtifact(key: string, value: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

}