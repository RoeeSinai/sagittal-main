import { Combination, computeDistributions, Index, merge } from "../../../../general"
import { Scope, SubmetricScope } from "../../bestMetric"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { presentSearchedAndPopulated } from "../present"
import { Chunk } from "../types"
import { populateScope } from "./scope"
import { ParameterChunk, PopulateScopesForSubmetricChunkCombinationOptions, SubmetricChunk } from "./types"

const populateScopesForSubmetricChunkCombination = (submetricChunkCombination: Combination<SubmetricChunk>, options: PopulateScopesForSubmetricChunkCombinationOptions) => {
    const {
        parameterChunkCombinations,
        parameterChunkCombinationIndex = 0,
        submetricChunkCombinationIndex,
        submetricChunkCombinationCount,
    } = options

    saveDebugMessage(`populating scopes for submetric chunk combination ${submetricChunkCombinationIndex + 1}/${submetricChunkCombinationCount} with parameter chunk combination ${parameterChunkCombinationIndex + 1}/${parameterChunkCombinations.length} (${100 * parameterChunkCombinationIndex / parameterChunkCombinations.length}%) ${presentSearchedAndPopulated()}`, DebugTarget.POPULATE)

    const parameterChunkCombination: Combination<Chunk> = parameterChunkCombinations[ parameterChunkCombinationIndex ]

    const parameterChunkCombinationDistributions = computeDistributions(parameterChunkCombination, submetricChunkCombination.length)

    parameterChunkCombinationDistributions.forEach(parameterChunkCombinationDistribution => {
        const scope: Scope = submetricChunkCombination.map((submetricChunkBin, index) => {
            const parametersDistributedToThisBin = parameterChunkCombinationDistribution[ index ]

            return merge(submetricChunkBin, ...parametersDistributedToThisBin) as SubmetricScope
        }) as Scope

        populateScope(scope)
    })

    if (parameterChunkCombinationIndex === parameterChunkCombinations.length - 1) {
        return
    }

    populateScopesForSubmetricChunkCombination(submetricChunkCombination, {
        parameterChunkCombinations,
        parameterChunkCombinationIndex: parameterChunkCombinationIndex + 1 as Index<Combination<ParameterChunk>>,
        submetricChunkCombinationIndex,
        submetricChunkCombinationCount,
    })
}

export {
    populateScopesForSubmetricChunkCombination,
}
