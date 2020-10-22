import {Decimal, Monzo} from "../../../../../../src/general/math"
import {computeRationalMonzoFromRationalDecimal} from "../../../../../../src/general/math/rational/monzo"
import {computeIntegerMonzoFromIntegerDecimal} from "../../../../../../src/general/math/rational/monzo/fromDecimal"

describe("computeRationalMonzoFromRationalDecimal", (): void => {
    it("works", (): void => {
        const rationalDecimal = 1.4 as Decimal<{rational: true}>      // 7 / 5

        const actual = computeRationalMonzoFromRationalDecimal(rationalDecimal)

        const expected = [0, 0, -1, 1] as Monzo<{rational: true}>     // 7 / 5
        expect(actual).toEqual(expected)
    })
})

describe("computeIntegerMonzoFromIntegerDecimal", (): void => {
    it("prime factorizes the integer into a monzo", (): void => {
        const integerDecimal = 44 as Decimal<{integer: true}>

        const actual = computeIntegerMonzoFromIntegerDecimal(integerDecimal)

        const expected = [2, 0, 0, 0, 1] as Monzo<{integer: true}>
        expect(actual).toEqual(expected)
    })

    it("errors if the primes in the integer's factorization are too big", (): void => {
        const integerDecimal = 756065159 as Decimal<{integer: true}>

        expect((): void => {
            computeIntegerMonzoFromIntegerDecimal(integerDecimal)
        }).toThrowError("This integer 756065159 contains primes which are too big; remainder is 756065159")
    })
})
