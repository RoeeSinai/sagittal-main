import { Cents } from "../../../../../src/general/music"
import { JiNotationBound, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { computeInitialPosition } from "../../../../../src/scripts/jiNotationBound/bound/initialPosition"
import { jiNotationBoundFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeInitialPosition", (): void => {
    it("returns the mean of the bounded commas at the introducing JI notation level", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.EXTREME],
            cents: 42 as Cents, // between ~|\ (40.004352) and //| (43.012579) at the High JI notation level
        }

        const actual = computeInitialPosition(jiNotationBound)

        const expected = (40.004352 + 43.012579) / 2 as Cents
        expect(actual).toBeCloseTo(expected)
    })
})
