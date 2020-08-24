import { ACCURACY_THRESHOLD } from "../../../../../src/general/code"
import { Level } from "../../../../../src/notations/ji"
import { computeLevelHeights } from "../../../../../src/scripts/analyzeBounds/visualize/levelHeights"

describe("computeLevelHeights", () => {
    it("gives the correct height for the tops of each level", () => {
        const actual = computeLevelHeights(0)

        expect(actual[ Level.MEDIUM ]).toBeCloseTo(410, ACCURACY_THRESHOLD)
        expect(actual[ Level.HIGH ]).toBeCloseTo(310, ACCURACY_THRESHOLD)
        expect(actual[ Level.ULTRA ]).toBeCloseTo(210, ACCURACY_THRESHOLD)
        expect(actual[ Level.EXTREME ]).toBeCloseTo(110, ACCURACY_THRESHOLD)
        expect(actual[ Level.INSANE ]).toBeCloseTo(10, ACCURACY_THRESHOLD)
    })

    it("gives the correct height for the centers of each level", () => {
        const actual = computeLevelHeights(0.5)

        expect(actual[ Level.MEDIUM ]).toBeCloseTo(460, ACCURACY_THRESHOLD)
        expect(actual[ Level.HIGH ]).toBeCloseTo(360, ACCURACY_THRESHOLD)
        expect(actual[ Level.ULTRA ]).toBeCloseTo(260, ACCURACY_THRESHOLD)
        expect(actual[ Level.EXTREME ]).toBeCloseTo(160, ACCURACY_THRESHOLD)
        expect(actual[ Level.INSANE ]).toBeCloseTo(60, ACCURACY_THRESHOLD)
    })

    it("gives the correct height for the bottoms of each level", () => {
        const actual = computeLevelHeights(1)

        expect(actual[ Level.MEDIUM ]).toBeCloseTo(510, ACCURACY_THRESHOLD)
        expect(actual[ Level.HIGH ]).toBeCloseTo(410, ACCURACY_THRESHOLD)
        expect(actual[ Level.ULTRA ]).toBeCloseTo(310, ACCURACY_THRESHOLD)
        expect(actual[ Level.EXTREME ]).toBeCloseTo(210, ACCURACY_THRESHOLD)
        expect(actual[ Level.INSANE ]).toBeCloseTo(110, ACCURACY_THRESHOLD)
    })
})
