import { Level } from "../../../../../src/notations/ji"
import { formatLevel } from "../../../../../src/scripts/analyzeBounds/io/level"

describe("formatLevel", () => {
    it("makes levels nice for people to read", () => {
        expect(formatLevel(Level.ULTRA)).toBe("Ultra")
        expect(formatLevel(Level.EXTREME)).toBe("Extreme")
    })
})
