import { formatPitch, Formatted } from "../../../../../src/general/io/format"
import { IntegerDecimal, Real, RealDecimal, RealMonzo, RealQuotient } from "../../../../../src/general/math"
import { Cents } from "../../../../../src/general/music"

describe("formatPitch", (): void => {
    it("if only the quotient is present, returns it formatted", (): void => {
        const pitch = { quotient: [5, 3] as RealQuotient }

        const actual = formatPitch(pitch)

        const expected = "5/3" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if the quotient and monzo are present, returns the quotient formatted", (): void => {
        const pitch = { quotient: [5, 3] as RealQuotient, monzo: [0, -1, 1] as RealMonzo }

        const actual = formatPitch(pitch)

        const expected = "5/3" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if the quotient and decimal are present, returns the quotient formatted", (): void => {
        const pitch = { quotient: [5, 1] as RealQuotient, decimal: 5 as IntegerDecimal }

        const actual = formatPitch(pitch)

        const expected = "5/1" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if the quotient and cents are present, returns the quotient formatted", (): void => {
        const pitch = { quotient: [5, 3] as RealQuotient, cents: 884.358713 as Cents }

        const actual = formatPitch(pitch)

        const expected = "5/3" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if only the monzo is present, returns the monzo formatted", (): void => {
        const pitch = { monzo: [0, -1, 1] as RealMonzo }

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if the monzo and decimal are present, returns the monzo formatted", (): void => {
        const pitch = { monzo: [0, 0, 1] as RealMonzo, decimal: 5 as IntegerDecimal }

        const actual = formatPitch(pitch)

        const expected = "[   0   0   1 ⟩" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if the monzo and cents are present, returns the monzo formatted", (): void => {
        const pitch = { monzo: [0, -1, 1] as RealMonzo, cents: 884.358713 as Cents }

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if the decimal and cents are present, returns the cents formatted", (): void => {
        const pitch = { decimal: 1.666667 as RealDecimal, cents: 884.358713 as Cents }

        const actual = formatPitch(pitch)

        const expected = "884.359¢" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if only the decimal is present, returns it as formatted cents", (): void => {
        const pitch = { decimal: 1.666667 as RealDecimal }

        const actual = formatPitch(pitch)

        const expected = "884.359¢" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("can return the pitch aligned (for tables)", (): void => {
        const pitch = { decimal: 1.666667 as RealDecimal }

        const actual = formatPitch(pitch, { align: true })

        const expected = "       884.359¢" as Formatted<Real>
        expect(actual).toBe(expected)
    })
})
