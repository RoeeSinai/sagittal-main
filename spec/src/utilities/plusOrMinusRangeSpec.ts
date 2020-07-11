import { computePlusOrMinusRange } from "../../../src/utilities/plusOrMinusRange"

describe("computePlusOrMinusRange", () => {
    it("given a number, returns a range from -number to +number", () => {
        const number = 5

        const result = computePlusOrMinusRange(number)

        expect(result as number[]).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
    })
})
