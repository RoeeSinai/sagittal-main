import "colors"
import { program } from "commander"
import { IO } from "../../../general"
import { BOUNDS } from "../../../notations"
import { analyzeBound } from "../bound"
import { BOUNDS_ANALYSIS_TEXT_FILE, BOUNDS_ANALYSIS_VISUALIZATION_FILE } from "../constants"
import { updateFile } from "../file"
import {
    AnalysisMode,
    BOUNDS_ANALYSIS_HEADER_ROW,
    formatBound,
    formatLevelAnalyses,
    formatRankAnalyses,
    visualizeBounds,
} from "../io"
import { computeHistories } from "../plot"
import { AnalyzedBound } from "../types"

program
    .option("-x, --do-not-update-files", "do not update files")
    .parse(process.argv)

const shouldUpdateFiles = !program.doNotUpdateFiles

let textOutput: IO = BOUNDS_ANALYSIS_HEADER_ROW

const boundsAnalysis: AnalyzedBound[] = []
BOUNDS.map(bound => {
    const histories = computeHistories(bound)
    const analyzedBound = analyzeBound(histories, bound)

    textOutput = textOutput.concat(formatBound(analyzedBound, { bound, mode: AnalysisMode.SUMMARY }) + "\n") as IO

    boundsAnalysis.push(analyzedBound)
})

textOutput = textOutput.concat(formatLevelAnalyses()) as IO // TODO: typed concat?
textOutput = textOutput.concat(formatRankAnalyses()) as IO

if (shouldUpdateFiles) {
    updateFile(
        BOUNDS_ANALYSIS_TEXT_FILE,
        textOutput.replace(/\[\d\dm/g, "") as IO, // Remove colors TODO: should be a helper
    )

    const visualizationOutput = visualizeBounds(boundsAnalysis) as IO
    updateFile(BOUNDS_ANALYSIS_VISUALIZATION_FILE, visualizationOutput)
}

console.log(textOutput)
