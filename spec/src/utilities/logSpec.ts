import { computeLog } from "../../../src/utilities/log"
import { ACCURACY_THRESHOLD } from "../../../src/utilities/constants"

describe("computeLog", () => {
    it("returns the logarithmic with the specified base of the value", () => {
        const value = 9
        const base = 3

        const result = computeLog(value, base)

        expect(result).toBeCloseTo(2, ACCURACY_THRESHOLD)
    })

    it("is accurate", () => {
        const value = 5
        const base = 2

        const result = computeLog(value, base)

        expect(result).toBeCloseTo(2.32192809489)
    })
})
