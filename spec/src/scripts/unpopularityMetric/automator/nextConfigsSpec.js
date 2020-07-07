const {computeNextConfigs} = require("../../../../../src/scripts/unpopularityMetric/automator/nextConfigs")
const {PARAMETER, SUBMETRIC_TYPE} = require("../../../../../src/scripts/unpopularityMetric/constants")

describe("computeNextConfigs", () => {
    it("given a coordinate (which has been identified as a local minimum) and the dynamic parameters, is able to tell you what the next configs should be to delve deeper in that vicinity", () => {
        const coordinate = [1, 0, 3]
        const dynamicParameters = [
            {submetricIndex: 0, parameter: PARAMETER.J, parameterPoints: [0, 0.1, 0.2, 0.3, 0.4, 0.5], unit: 0.1},
            {submetricIndex: 0, parameter: PARAMETER.T, parameterPoints: [0, 0.5, 1], unit: 0.5},
            {submetricIndex: 1, parameter: PARAMETER.V, parameterPoints: [2, 2.02, 2.04, 2.06, 2.08, 2.1], unit: 0.02},
        ]
        const configs = [
            {
                [PARAMETER.J]: {center: 0.1, range: 0.05, count: 5},
                [PARAMETER.T]: {center: 0, range: 0.25, count: 5},
                [PARAMETER.A]: 2,
            },
            {
                [PARAMETER.V]: {center: 2.06, range: 0.01, count: 5},
                [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
            },
        ]

        const result = computeNextConfigs(coordinate, dynamicParameters, configs)

        expect(result).toEqual([
            {
                [PARAMETER.J]: {center: 0.1, range: 0.06666666666666667, count: 2},
                [PARAMETER.T]: {center: 0, range: 0.3333333333333333, count: 2},
                [PARAMETER.A]: 2,
            },
            {
                [PARAMETER.V]: {center: 2.06, range: 0.013333333333333332, count: 2},
                [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
            },
        ])
    })
})
