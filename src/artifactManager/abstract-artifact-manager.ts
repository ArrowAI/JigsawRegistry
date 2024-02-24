




export abstract class AbstractArtifactManager {
    abstract getArtifact(key: string): Promise<any>;
    abstract setArtifact(key: string, value: any): Promise<any>;
    abstract getUploadPath(): string;

   public generateFilename(file) {
        // Generate a  16-digit alphanumeric string
        const randomString = this.generateRandomString(16);
        // Append the original file extension to the random string
        const extension = file.originalname.split('.').pop();
        return `${randomString}.${extension}`;
    }

    generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
}