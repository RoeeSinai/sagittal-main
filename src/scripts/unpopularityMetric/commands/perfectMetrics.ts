import { program } from "commander"
import { performance } from "perf_hooks"
import { Unit } from "../../../general"
import { Metric } from "../bestMetric"
import { DebugTarget, debugTargets, saveDebugMessage } from "../debug"
import { unpopularityMetricSettings } from "../globals"
import { perfectMetrics } from "../perfecter"
import { formatBestMetrics } from "../solver"
import { ParameterValue } from "../sumOfSquares"
import { formatTime } from "../../../general/time"
import { DEFAULT_MAXIMUM_UNIT } from "../constants"
import { applySharedUnpopularityMetricCommandSetup } from "./shared/shared"
import { load } from "./shared/load"

program.option("-t, --no-time", "no time")

const defaultDebugTargets = [
    DebugTarget.PERFECT,
    DebugTarget.SEARCH,
    DebugTarget.POPULATE,
    DebugTarget.FINAL_SOLVER_RESULTS,
    DebugTarget.NEW_BEST_METRIC,
    DebugTarget.FINAL_PERFECTER_RESULTS,
]
applySharedUnpopularityMetricCommandSetup({ defaultDebugTargets })

const time = !!program.time

unpopularityMetricSettings.maximumUnit = DEFAULT_MAXIMUM_UNIT / 10 as Unit<ParameterValue>

const bestMetricsToBePerfected = load("metrics") as Record<string, Metric>

const startTime = performance.now()
perfectMetrics(Object.values(bestMetricsToBePerfected)).then(() => {
    saveDebugMessage(`\n\nTHE PERFECTED METRICS ARE ${formatBestMetrics()}`, DebugTarget.FINAL_PERFECTER_RESULTS)

    const endTime = performance.now()
    if (time) {
        saveDebugMessage(`\n\nPERFECTING METRICS TOOK ${formatTime(endTime - startTime)}`, DebugTarget.FINAL_PERFECTER_RESULTS)
    }
    saveDebugMessage(`MAXIMUM UNIT ${unpopularityMetricSettings.maximumUnit}`, DebugTarget.FINAL_PERFECTER_RESULTS)
    saveDebugMessage(`Z ${unpopularityMetricSettings.z}`, DebugTarget.FINAL_PERFECTER_RESULTS)
    saveDebugMessage(`ONLY TOP ${unpopularityMetricSettings.onlyTop}`, DebugTarget.FINAL_PERFECTER_RESULTS)
})
