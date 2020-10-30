import {Abs, Scamon} from "../../../../../src/general/math"
import {ApotomeSlope, computeAas} from "../../../../../src/sagittal/ji/pitch"

describe("computeAas", (): void => {
    it("returns the AAS (absolute apotome slope) of the JI pitch", (): void => {
        const jiPitch = {monzo: [-1, -3, 1, 0, 1]} as Scamon<{rational: true}>

        const actual = computeAas(jiPitch)

        const expected = 4.955989 as Abs<ApotomeSlope>
        expect(actual).toBeCloseToTyped(expected)
    })
})
