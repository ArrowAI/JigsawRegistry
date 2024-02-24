import { AbstractArtifactManager } from "./abstract-artifact-manager";




export class LocalArtifactManager extends AbstractArtifactManager {
   public override getArtifact(key: string): Promise<any> {
        //get artifact from local folder
        throw new Error("Method not implemented.");
    }
    public override   setArtifact(key: string, value: any): Promise<any> {
        // upload arifact to local folder
        throw new Error("Method not implemented.");
    }

    public override   getUploadPath(): string {
        return './artifacts';
    }
    public    getDownloadPath(filename: string): string {
        return this.getUploadPath() + '/' + filename+'.zip';
    }



}