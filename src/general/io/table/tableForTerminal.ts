import {indexOfFinalElement} from "../../code"
import {colorize} from "../colorize"
import {BLANK, NEWLINE, TAB} from "../constants"
import {join, sumTexts} from "../typedOperations"
import {ColorMethod, Io} from "../types"
import {computeColumnRange} from "./columnRange"
import {DEFAULT_FORMAT_TABLE_OPTIONS} from "./constants"
import {computeColumnWidths, computeJustifications, justifyCellIo} from "./justification"
import {maybeColorize} from "./maybeColorize"
import {Cell, FormatTableOptions, Row, Table} from "./types"

const formatTableForTerminal = <T>(table: Table<T>, options?: Partial<FormatTableOptions<T>>): Io => {
    const {
        justification = DEFAULT_FORMAT_TABLE_OPTIONS.justification,
        colors = DEFAULT_FORMAT_TABLE_OPTIONS.colors,
        headerRowCount = DEFAULT_FORMAT_TABLE_OPTIONS.headerRowCount,
    } = options || {}

    const columnRange = computeColumnRange(table)
    const justifications = computeJustifications(justification, columnRange)

    const columnWidths = computeColumnWidths(table, columnRange)

    const formattedRows = table.map((row: Row<{of: T}>, rowIndex: number): Io => {
        const rowText = row.reduce(
            (justifiedRow: Io, cell: Cell<{of: T}>, cellIndex: number): Io => {
                const columnWidth = columnWidths[cellIndex]
                const columnJustification = justifications[cellIndex]

                const justifiedCell = justifyCellIo(cell, {columnWidth, columnJustification})

                const maybeSeparator = cellIndex === indexOfFinalElement(row) ? BLANK : TAB

                return sumTexts(justifiedRow, justifiedCell, maybeSeparator)
            },
            BLANK,
        )

        const maybeColoredRowIo: Io = maybeColorize(rowText, rowIndex, colors)
        if (rowIndex === headerRowCount - 1) {
            return colorize(maybeColoredRowIo, "underline" as ColorMethod)
        }

        return maybeColoredRowIo
    })

    const formattedTable: Io = join(formattedRows, NEWLINE)

    return sumTexts(formattedTable, NEWLINE)
}

export {
    formatTableForTerminal,
}
