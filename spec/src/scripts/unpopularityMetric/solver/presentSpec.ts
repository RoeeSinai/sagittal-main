import { Combination } from "../../../../../src/general"
import { Metric, SumOfSquares } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { presentBestMetrics } from "../../../../../src/scripts/unpopularityMetric/solver"
import { Parameter, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("presentBestMetrics", () => {
    it("sorts the best metrics by sum of squares", () => {
        const bestMetrics: Record<string, Metric> = {
            "{sum}": {
                sumOfSquares: 0.013 as SumOfSquares,
                submetrics: [
                    {
                        [ Parameter.SUM ]: true,
                    },
                ] as Combination<Submetric>,
            },
            "{count}": {
                sumOfSquares: 0.012 as SumOfSquares,
                submetrics: [
                    {
                        [ Parameter.COUNT ]: true,
                    },
                ] as Combination<Submetric>,
            },
            "{max}": {
                sumOfSquares: 0.014 as SumOfSquares,
                submetrics: [
                    {
                        [ Parameter.MAX ]: true,
                    },
                ] as Combination<Submetric>,
            },
        }

        const result = presentBestMetrics(bestMetrics)

        expect(JSON.stringify(result)).toEqual(JSON.stringify({
            "{max}": {
                sumOfSquares: 0.014 as SumOfSquares,
                submetrics: [
                    {
                        [ Parameter.MAX ]: true,
                    },
                ] as Combination<Submetric>,
            },
            "{sum}": {
                sumOfSquares: 0.013 as SumOfSquares,
                submetrics: [
                    {
                        [ Parameter.SUM ]: true,
                    },
                ] as Combination<Submetric>,
            },
            "{count}": {
                sumOfSquares: 0.012 as SumOfSquares,
                submetrics: [
                    {
                        [ Parameter.COUNT ]: true,
                    },
                ] as Combination<Submetric>,
            },
        }))
    })
})
