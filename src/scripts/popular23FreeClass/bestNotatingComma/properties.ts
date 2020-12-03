import {computeCentsFromPitch, Two3FreeClass} from "../../../general"
import {computeMaybeCommaClassId, findNotatingCommas} from "../../../sagittal"
import {computeBestNotatingComma} from "./bestNotatingComma"
import {BestNotatingCommaProperties} from "./types"

const computeBestNotatingCommaProperties = (two3FreeClass: Two3FreeClass): BestNotatingCommaProperties => {
    const notatingCommas = findNotatingCommas(two3FreeClass)
    const bestNotatingComma = computeBestNotatingComma(notatingCommas)
    const maybeCommaClassId = computeMaybeCommaClassId(bestNotatingComma)

    return {
        bestNotatingCommaCents: computeCentsFromPitch(bestNotatingComma),
        bestNotatingCommaMonzo: bestNotatingComma.monzo,
        bestNotatingCommaMaybeCommaClassId: maybeCommaClassId,
    }
}

export {
    computeBestNotatingCommaProperties,
}
