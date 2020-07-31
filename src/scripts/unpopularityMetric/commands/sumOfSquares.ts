import "colors"
import { program } from "commander"
import { Combination } from "../../../general"
import { debug } from "../debug"
import { computeSumOfSquaresForSubmetrics } from "../sumOfSquares"
import { Parameter, ParameterValue, Submetric } from "../types"

program
    .option("-d, --debug", "debug")
    .parse(process.argv)

debug.rankedUnpopularities = !!program.debug

const submetrics =
    [
        {
            [ Parameter.SUM ]: true,
            [ Parameter.K_AS_COEFFICIENT ]: 0.038 as ParameterValue,
            [ Parameter.A_AS_BASE ]: 1.994 as ParameterValue,
            [ Parameter.Y ]: 0.455 as ParameterValue,
            [ Parameter.W ]: -2.08 as ParameterValue,
            [ Parameter.USE_NUMINATOR ]: true,
        },
        {
            [ Parameter.COUNT ]: true,
            [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.577 as ParameterValue,
            [ Parameter.USE_NUMINATOR ]: true,
        },
    ] as Combination<Submetric>

const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

console.log(`${sumOfSquares}\n${JSON.stringify(submetrics)}`)
