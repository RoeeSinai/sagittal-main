import { Combination } from "../../../../../src/general/math"
import { MetricName, SumOfSquares } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { bestMetrics } from "../../../../../src/scripts/unpopularityMetric/globals"
import { formatBestMetrics } from "../../../../../src/scripts/unpopularityMetric/solver"
import { Parameter, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("formatBestMetrics", () => {
    it("sorts the best metrics by sum of squares, and formats them like how they look as enums", () => {
        bestMetrics.set(
            "{sum}" as MetricName,
            {
                sumOfSquares: 0.013 as SumOfSquares,
                name: "" as MetricName,
                submetrics: [
                    {
                        [ Parameter.SUM ]: true,
                    },
                ] as Combination<Submetric>,
            },
        )
        bestMetrics.set(
            "{count}" as MetricName,
            {
                sumOfSquares: 0.012 as SumOfSquares,
                name: "" as MetricName,
                submetrics: [
                    {
                        [ Parameter.COUNT ]: true,
                    },
                ] as Combination<Submetric>,
            },
        )
        bestMetrics.set(
            "{max}" as MetricName,
            {
                sumOfSquares: 0.014 as SumOfSquares,
                name: "" as MetricName,
                submetrics: [
                    {
                        [ Parameter.MAX ]: true,
                    },
                ] as Combination<Submetric>,
            },
        )

        const actual = formatBestMetrics()

        const expected =
            `{\n` +
            `    "{max}": {\n` +
            `        sumOfSquares: 0.014,\n` +
            `        name: "",\n` +
            `        submetrics: [\n` +
            `            {\n` +
            `                [ Parameter.MAX ]: true\n` +
            `            }\n` +
            `        ]\n` +
            `    },\n` +
            `    "{sum}": {\n` +
            `        sumOfSquares: 0.013,\n` +
            `        name: "",\n` +
            `        submetrics: [\n` +
            `            {\n` +
            `                [ Parameter.SUM ]: true\n` +
            `            }\n` +
            `        ]\n` +
            `    },\n` +
            `    "{count}": {\n` +
            `        sumOfSquares: 0.012,\n` +
            `        name: "",\n` +
            `        submetrics: [\n` +
            `            {\n` +
            `                [ Parameter.COUNT ]: true\n` +
            `            }\n` +
            `        ]\n` +
            `    }\n` +
            `}`
        expect(actual).toEqual(expected)
    })
})
