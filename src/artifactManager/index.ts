

import { ArtifactManagerType } from "types/arifactManager"
import { LocalArtifactManager } from "./local-artifact"
import { CloudArtifactManager } from "./cloud-artifact"

export const getAritfactManager = () => {
    const artiManagerType = process.env.ARTIFACT_MANAGER || "LOCAL"  
    const artiFactManager = {
        [ArtifactManagerType.LOCAL]: LocalArtifactManager,
        [ArtifactManagerType.CLOUD]: CloudArtifactManager,
    }
    return artiFactManager[artiManagerType]
}

export const ArtifactManager = getAritfactManager();


export type ArtifactManager = InstanceType<typeof ArtifactManager>