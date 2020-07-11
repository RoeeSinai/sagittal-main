import { parseRatio } from "../../../../src/utilities/comma/ratio"
import { Ratio } from "../../../../src/utilities/types"

describe("parseRatio", () => {
    it("works for directed ratios", () => {
        const ratio = "5/4"

        const result = parseRatio(ratio)

        expect(result).toEqual([5, 4] as Ratio)
    })

    it("works for directed ratios", () => {
        const ratio = "5:4"

        const result = parseRatio(ratio)

        expect(result).toEqual([4, 5] as Ratio)
    })
})
