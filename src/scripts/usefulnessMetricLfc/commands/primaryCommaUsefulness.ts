import {program} from "commander"
import {CommandFlag, Filename, ioSettings, LogTarget, parseCommands, saveLog, time} from "../../../general"
import {ScriptGroup} from "../../types"
import {usefulnessMetricLfcScriptGroupSettings} from "../globals"
import {logUsefulnessParameterSetsForUsefulnessMetricMaximizingMatchCount} from "../maximize"
import {USEFULNESS_METRICS_WITH_PARAMETERS} from "../metrics"
import {logUsefulnessParameterSetsForUsefulnessMetricMinimizingSumOfSquares} from "../minimize"
import {UsefulnessMetric, UsefulnessMetricId, UsefulnessParameterId} from "../types"

program
    .option(`-${CommandFlag.BOOLEAN_MODE}, --boolean-mode`, "boolean mode (more simply maximize match count, rather than minimize sum-of-squared distances of non-matches)")
    .option(`-${CommandFlag.EXTREME_CAPTURE_ZONES}, --extreme-capture-zones`, "use commas in each comma's capture zone for the Extreme precision level notation, rather than the default behavior of the comma's secondary comma zone")

parseCommands(ScriptGroup.USEFULNESS_METRIC_LFC as Filename, [LogTarget.PROGRESS, LogTarget.FINAL])

usefulnessMetricLfcScriptGroupSettings.extremeCaptureZones = program.extremeCaptureZones

const usefulnessMetricsWithParametersEntries = Object.entries(
    USEFULNESS_METRICS_WITH_PARAMETERS,
) as Array<[UsefulnessMetricId, {metric: UsefulnessMetric, parameters: UsefulnessParameterId[]}]>

if (program.booleanMode) {
    usefulnessMetricsWithParametersEntries.forEach(
        logUsefulnessParameterSetsForUsefulnessMetricMaximizingMatchCount,
    )
} else {
    usefulnessMetricsWithParametersEntries.forEach(
        logUsefulnessParameterSetsForUsefulnessMetricMinimizingSumOfSquares,
    )
}

if (ioSettings.time) {
    saveLog(
        `\nFINDING USEFULNESS PARAMETER SETS FOR USEFULNESS METRICS MAXIMIZING COUNT MOST USEFUL TOOK ${time()}`,
        LogTarget.FINAL,
    )
}
