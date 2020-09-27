import { Io, Row, splitColumnTitlesIntoRowsBySpaces, TwoThreeFreeClass } from "../../../general"
import { CommaAnalysis, JiPitchAnalysis } from "../../../sagittal"
import { FindCommasField, JiPitchField, NotatingCommasField, TwoThreeFreeClassField } from "../types"
import { excludeFields } from "./excludeFields"

const JI_PITCH_COLUMN_TITLES: Record<JiPitchField, Io> = {
    [ JiPitchField.RATIO ]: "ratio" as Io,
    [ JiPitchField.MONZO ]: "monzo" as Io,
    [ JiPitchField.CENTS ]: "cents" as Io,
    [ JiPitchField.APOTOME_SLOPE ]: "apotome slope" as Io,
    [ JiPitchField.AAS ]: "AAS" as Io,
    [ JiPitchField.ATE ]: "ATE" as Io,
}

// tslint:disable-next-line max-line-length
const TWO_THREE_FREE_CLASS_COLUMN_TITLES: Record<TwoThreeFreeClassField, Io> = {
    [ TwoThreeFreeClassField.TWO_THREE_FREE_PRIME_LIMIT ]: "prime limit" as Io,
    [ TwoThreeFreeClassField.TWO_THREE_FREE_CLASS_NAME ]: "name" as Io,
    [ TwoThreeFreeClassField.TWO_THREE_FREE_COPFR ]: "CoPFR" as Io,
    [ TwoThreeFreeClassField.TWO_THREE_FREE_SOPFR ]: "SoPFR" as Io,
    [ TwoThreeFreeClassField.N2D3P9 ]: "N2D3P9" as Io,
}

const NOTATING_COMMAS_WITH_MAYBE_SAGITTAL_SYMBOL_CLASSES_COLUMN_TITLES: Record<NotatingCommasField, Io> = {
    [ NotatingCommasField.SYMBOL_CLASS ]: "symbol class" as Io,
    [ NotatingCommasField.NAME ]: "comma name" as Io,
    ...JI_PITCH_COLUMN_TITLES,
}

const FIND_COMMAS_COLUMN_TITLES: Record<FindCommasField, Io> = {
    ...NOTATING_COMMAS_WITH_MAYBE_SAGITTAL_SYMBOL_CLASSES_COLUMN_TITLES,
    // Pretty much the same as TWO_THREE_FREE_CLASS_COLUMN_TITLES,
    // But here we can't assume the "2,3-free class" part b/c there's no 2,3-free class title just above
    [ FindCommasField.TWO_THREE_FREE_PRIME_LIMIT ]: "2,3-free prime limit" as Io,
    [ FindCommasField.TWO_THREE_FREE_CLASS_NAME ]: "2,3-free class name" as Io,
    [ FindCommasField.TWO_THREE_FREE_COPFR ]: "2,3-free class CoPFR" as Io,
    [ FindCommasField.TWO_THREE_FREE_SOPFR ]: "2,3-free class SoPFR" as Io,
    [ FindCommasField.N2D3P9 ]: "2,3-free class N2D3P9" as Io,
}

const computeJiPitchHeaderRows = (): Array<Row<{ of: JiPitchAnalysis, header: true }>> =>
    splitColumnTitlesIntoRowsBySpaces(
        excludeFields(JI_PITCH_COLUMN_TITLES),
    )

const compute23FreeClassHeaderRows = (): Array<Row<{ of: TwoThreeFreeClass, header: true }>> =>
    splitColumnTitlesIntoRowsBySpaces(
        excludeFields(TWO_THREE_FREE_CLASS_COLUMN_TITLES),
    )

const computeNotatingCommasHeaderRows =
    (): Array<Row<{ of: CommaAnalysis, header: true }>> =>
        splitColumnTitlesIntoRowsBySpaces(
            excludeFields(NOTATING_COMMAS_WITH_MAYBE_SAGITTAL_SYMBOL_CLASSES_COLUMN_TITLES),
        )

const computeFindCommasHeaderRows =
    (): Array<Row<{ of: CommaAnalysis, header: true }>> =>
        splitColumnTitlesIntoRowsBySpaces(
            excludeFields(FIND_COMMAS_COLUMN_TITLES),
        )

export {
    computeJiPitchHeaderRows,
    compute23FreeClassHeaderRows,
    computeNotatingCommasHeaderRows,
    computeFindCommasHeaderRows,
}
