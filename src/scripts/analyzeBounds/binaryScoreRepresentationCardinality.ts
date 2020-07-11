import { RANKS } from "./ranks"
import { LEVELS } from "../../notations/ji/levels"
import { EventRank } from "./types"

const BINARY_SCORE_REPRESENTATION_CARDINALITY = Object.keys(RANKS).length * LEVELS.length // 15

const computeBinaryScoreRepresentationIndex = (rank: EventRank, levelIndex: number) => {
    return rank * LEVELS.length + (LEVELS.length - 1 - levelIndex)
}

export {
    BINARY_SCORE_REPRESENTATION_CARDINALITY,
    computeBinaryScoreRepresentationIndex,
}
