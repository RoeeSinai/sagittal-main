import { IntegerNumerator, Max } from "../../../../../../../../../../src/general/math"
import { N2D3P9 } from "../../../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9"
import { computePossibleNumeratorsGivenMaxN2D3P9 } from "../../../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/numeratorPossibilities/possibleNumerators"

describe("computePossibleNumeratorsGivenMaxN2D3P9", (): void => {
    it("returns the possibilities for the numerator (which will be used to calculate the possibilties for the denominator; hence starting at 7) given the max N2D3P9", (): void => {
        const maxN2D3P9 = 6 as Max<N2D3P9>

        const actual = computePossibleNumeratorsGivenMaxN2D3P9(maxN2D3P9)

        const expected = [
            7 as IntegerNumerator,
            11 as IntegerNumerator,
            13 as IntegerNumerator,
            17 as IntegerNumerator,
            19 as IntegerNumerator,
            23 as IntegerNumerator,
            25 as IntegerNumerator,
        ]
        expect(actual).toEqual(expected)
    })
})
