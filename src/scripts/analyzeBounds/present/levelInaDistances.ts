import { LEVELS } from "../../../notations/ji/levels"
import { presentNumber } from "./number"
import { alignFormattedNumber } from "./alignFormattedNumber"
import { AnalyzedHistory } from "../types"

const extractLevelInaDistances = (analyzedHistory: AnalyzedHistory) => {
    const events = analyzedHistory.events

    return LEVELS.slice(0, LEVELS.length - 1).map(level => {
        const previousEventIndex = events.findIndex(event => event.level === level)
        if (previousEventIndex === -1) return " "
        const levelEvent = events[ previousEventIndex + 1 ]

        return alignFormattedNumber(presentNumber(levelEvent.inaDistance))
    })
}

export {
    extractLevelInaDistances,
}
