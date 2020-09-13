import { concat, Io } from "../../../../general"
import { BoundAnalysis } from "../../analyzeBound"
import { computeBoundsAnalysisTable } from "./bounds"
import { formatLevelAnalyses } from "./level"
import { formatRankAnalyses } from "./rank"

const computeBoundsTables = (boundsAnalysis: BoundAnalysis[]) => {
    let output: Io = computeBoundsAnalysisTable(boundsAnalysis)
    output = concat(output, formatLevelAnalyses()) // TODO: these should probably also use the table helpers
    output = concat(output, formatRankAnalyses())

    return output
}

export {
    computeBoundsTables,
}
