import { Combinations, Name } from "../../general"
import { Metric, Scope } from "./bestMetric"
import { INITIAL_POPULARITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS, INITIAL_SOLVER_STATUS } from "./constants"
import { Chunk, SolverStatus } from "./solver"
import { Parameter, Submetric } from "./sumOfSquares"

const scopesToSearch: Scope[] = [] as unknown[] as Scope[]

const solverStatus: SolverStatus = JSON.parse(JSON.stringify(INITIAL_SOLVER_STATUS))

const bestMetrics: Map<Name<Metric>, Metric> = new Map()

const metricNames: Name<Metric>[] = []

const memoizedSubmetricChunkCombinations: Array<Combinations<Chunk<Submetric>>> = []
const memoizedParameterChunkCombinations: Array<Combinations<Chunk<Parameter>>> = []

const popularityMetricLfcScriptGroupSettings =
    JSON.parse(JSON.stringify(INITIAL_POPULARITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS))

export {
    scopesToSearch,
    solverStatus,
    bestMetrics,
    memoizedSubmetricChunkCombinations,
    memoizedParameterChunkCombinations,
    popularityMetricLfcScriptGroupSettings,
    metricNames,
}
