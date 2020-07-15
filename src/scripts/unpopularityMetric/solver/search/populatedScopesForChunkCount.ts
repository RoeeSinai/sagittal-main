import { debug } from "../../debug"
import { debugSearchedAndPopulated, presentPercentage } from "../debug"
import {
    bestMetricsForChunkCount,
    populatedForChunkCount,
    scopesForChunkCount,
    searchedForChunkCount,
    status,
} from "../globals"
import { Scope } from "../types"
import { possiblyUpdateBestMetricAsSideEffect } from "./bestMetric"

const searchPopulatedScopesForChunkCount = async () => {
    const searchingChunkCount = status.searchingChunkCount
    const searchingScopes = scopesForChunkCount[ searchingChunkCount ]
    const searchingScopesCount = searchingScopes && searchingScopes.length

    if (debug.all) {
        console.log(`scopes for chunk count remaining to search: ${searchingScopesCount}`.yellow)
    }

    const scopeForChunkCount = searchingScopes.pop() as Scope

    try {
        await possiblyUpdateBestMetricAsSideEffect(scopeForChunkCount, { chunkCount: searchingChunkCount }).then()
    } catch (e) {
        // TODO: Bad scopes are still being computed...
        //  it may not be a simple matter to not calculate them in the first place,
        //  so for now, just don't worry about them
        //  but it might be a good idea to have a separate debug key for metric errors
    }

    searchedForChunkCount[ searchingChunkCount ] = searchedForChunkCount[ searchingChunkCount ] ? searchedForChunkCount[ searchingChunkCount ] + 1 : 1

    if (searchedForChunkCount[ searchingChunkCount ] % 10 === 0) {
        if (debug.all || debug.solver) console.log(`searched out of populated for chunk count ${searchingChunkCount}: ${presentPercentage(searchedForChunkCount[ searchingChunkCount ], populatedForChunkCount[ searchingChunkCount ])} ${debugSearchedAndPopulated()}`.yellow)
    }
}

export {
    searchPopulatedScopesForChunkCount,
}
