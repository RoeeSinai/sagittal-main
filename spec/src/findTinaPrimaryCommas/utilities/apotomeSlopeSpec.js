const {computeApotomeSlope} = require("../../../../src/findTinaPrimaryCommas/utilities/apotomeSlope")
const {ACCURACY_THRESHOLD} = require("../../../../src/boundsAnalysis/utilities/constants")

describe("computeApotomeSlope", () => {
    it("gives the amount that the comma changes by when tempering the apotome", () => {
        const monzo = [-15, 8, 1]

        const result = computeApotomeSlope(monzo)

        expect(result).toBeCloseTo(7.87970229329454, ACCURACY_THRESHOLD)
    })
})
