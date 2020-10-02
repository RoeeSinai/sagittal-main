import { equalQuotients } from "../../../../../../../src/general/math/rational/real/quotient"
import { RealQuotient } from "../../../../../../../src/general/math/real/quotient"

describe("equalQuotients", (): void => {
    it("returns true when the quotients are equal", (): void => {
        const quotientA = [11, 10] as RealQuotient
        const quotientB = [11, 10] as RealQuotient

        const actual = equalQuotients(quotientA, quotientB)

        expect(actual).toBeTruthy()
    })

    it("returns false when the quotients are equal", (): void => {
        const quotientA = [11, 10] as RealQuotient
        const quotientB = [11, 9] as RealQuotient

        const actual = equalQuotients(quotientA, quotientB)

        expect(actual).toBeFalsy()
    })

    it("returns true when the quotients are equal when reduced to lowest terms", (): void => {
        const quotientA = [11, 10] as RealQuotient
        const quotientB = [33, 30] as RealQuotient

        const actual = equalQuotients(quotientA, quotientB)

        expect(actual).toBeTruthy()
    })

    it("returns true when the quotients are equal, even if they are irrational", (): void => {
        const quotientA = [11.1, 7.2] as RealQuotient
        const quotientB = [11.1, 7.2] as RealQuotient

        const actual = equalQuotients(quotientA, quotientB)

        expect(actual).toBeTruthy()
    })

    it("returns true when quotients are equal when reduced to lowest terms, even if they are irrational", (): void => {
        const quotientA = [11.1, 7.2] as RealQuotient
        const quotientB = [22.2, 14.4] as RealQuotient

        const actual = equalQuotients(quotientA, quotientB)

        expect(actual).toBeTruthy()
    })
})
