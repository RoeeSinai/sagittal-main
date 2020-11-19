import {Count, Range, Table} from "../../../../../src/general"
import {Char, Io} from "../../../../../src/general/io"
import {Justification} from "../../../../../src/general/io/table"
import {computeColumnWidths, justifyCellIo} from "../../../../../src/general/io/table/justification"

describe("justifyCellIo", (): void => {
    it("adds space to justify cells", (): void => {
        const cell = "  7    " as Io

        const actual = justifyCellIo(
            cell,
            {columnWidth: 14 as Count<Char>, columnJustification: Justification.LEFT},
        )

        const expected = "  7           "
        expect(actual).toBe(expected)
    })

    it("can justify to the right", (): void => {
        const cell = "  7    " as Io

        const actual = justifyCellIo(
            cell,
            {columnWidth: 14 as Count<Char>, columnJustification: Justification.RIGHT},
        )

        const expected = "         7    "
        expect(actual).toBe(expected)
    })

    it("does not justify cells which are for the forum and which have turned off monospacing", (): void => {
        const cell = "[latex]\\frac{50}{49}[/latex]" as Io

        const actual = justifyCellIo(
            cell,
            {columnWidth: 14 as Count<Char>, columnJustification: Justification.LEFT},
        )

        expect(actual).toBe(cell)
    })
})

describe("computeColumnWidths", (): void => {
    it("does not count cells which are for the forum and which have turned off monospacing in its computation              ", (): void => {
        const table = [
            ["a", "ccc", "apple"],
            ["dddd", "bb", "ccc"],
        ] as Table

        const actual = computeColumnWidths(table, [0, 1, 2] as Range)

        const expected = [4, 3, 5] as Array<Count<Char>>
        expect(actual).toEqual(expected)
    })

    it("does not count cells which are for the forum and which have turned off monospacing in its computation              ", (): void => {
        const table = [
            ["a", "", "apple"],
            ["dddd", "bb", "[latex]\\frac{1}{1}[/latex]"],
        ] as Table

        const actual = computeColumnWidths(table, [0, 1, 2] as Range)

        const expected = [4, 2, 5] as Array<Count<Char>>
        expect(actual).toEqual(expected)
    })
})
