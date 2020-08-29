import { program } from "commander"
import { Filename, LogTarget, parseCommands, saveLog } from "../../../general"
import { BOUNDS } from "../../../sagittal"
import { analyzeBound } from "../bound"
import { computeFormattedBound } from "../io"
import { computeHistories } from "../plot"

parseCommands("analyzeBounds" as Filename, [LogTarget.BOUND])

const boundId = program.args[ 0 ]

const bound = boundId && BOUNDS.find(bound => bound.id === parseInt(boundId))

if (bound) {
    const histories = computeHistories(bound)
    const analyzedBound = analyzeBound(histories, bound)

    const message = computeFormattedBound(analyzedBound, { bound })
    saveLog(message, LogTarget.BOUND, "analyzeBounds" as Filename)
} else {
    throw new Error(`Could not find bound with ID ${boundId}`)
}
