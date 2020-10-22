import {FIVE_ROUGHNESS, Quotient, Roughness} from "../../../../../../src/general/math"
import {
    computeRoughRationalQuotient,
    isRationalQuotientRough,
} from "../../../../../../src/general/math/rational/quotient"

describe("isRationalQuotientRough", (): void => {
    it("returns true if the quotient is to the requested roughness", (): void => {
        const rationalQuotient = [7, 5] as Quotient<{rational: true}>

        const actual = isRationalQuotientRough(rationalQuotient, FIVE_ROUGHNESS)

        expect(actual).toBeTruthy()
    })

    it("returns false if the quotient is not to the requested roughness", (): void => {
        const rationalQuotient = [7, 5] as Quotient<{rational: true}>

        const actual = isRationalQuotientRough(rationalQuotient, 11 as 11 & Roughness)

        expect(actual).toBeFalsy()
    })
})

describe("computeRoughRationalQuotient", (): void => {
    it("roughens the quotient to the desired roughness", (): void => {
        const rationalQuotient = [7, 5] as Quotient<{rational: true}>

        const actual = computeRoughRationalQuotient(rationalQuotient, 7 as 7 & Roughness)

        const expected = [7, 1] as Quotient<{rational: true, rough: 7}>
        expect(actual).toEqual(expected)
    })
})
