import { ACCURACY_THRESHOLD } from "../../../../src/general/code"
import { computeRoughNumberMonzo, computeSopfr, Monzo } from "../../../../src/general/music"
import { JI_SYMBOLS } from "../../../../src/notations/ji"

const AVERAGE_FIVE_ROUGH_SOPFR = 22.78523489932886

describe("averageFiveRoughSopfr", () => {
    it("is about 23", () => {
        const total: number = JI_SYMBOLS.reduce(
            (totalFiveRoughSopfr, symbol) => {
                const monzo = symbol.primaryComma.monzo
                const fiveRoughNumberMonzo: Monzo = computeRoughNumberMonzo(monzo, 5)
                const fiveRoughSopfr = computeSopfr(fiveRoughNumberMonzo)

                return totalFiveRoughSopfr + fiveRoughSopfr
            },
            0,
        )

        expect(total / JI_SYMBOLS.length).toBeCloseTo(AVERAGE_FIVE_ROUGH_SOPFR, ACCURACY_THRESHOLD)
    })
})
