import {Io} from "../../../../../src/general/io"
import {parseCents} from "../../../../../src/general/io/parse"
import {Cents} from "../../../../../src/general/music"

describe("parseCents", (): void => {
    it("works when provided cents directly, with the cents symbol", (): void => {
        const centsIo = "45.3¢" as Io

        const actual = parseCents(centsIo)

        const expected = 45.3 as Cents
        expect(actual).toBe(expected)
    })

    it("works when provided cents directly, with a 'c'", (): void => {
        const centsIo = "50c" as Io

        const actual = parseCents(centsIo)

        const expected = 50 as Cents
        expect(actual).toBe(expected)
    })
})
