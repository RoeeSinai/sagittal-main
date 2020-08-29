import { program } from "commander"
import {
    ANY_MONZO_CHARS,
    computeMonzoFromRatio,
    Filename,
    formatTableForTerminal,
    Formatted,
    IO,
    LogTarget,
    Monzo,
    parseCommands,
    parseMonzo,
    parseRatio,
    Ratio,
    Row,
    saveLog,
} from "../../../general"
import { analyzeComma, computeNotatingJiSymbolIds } from "../../../sagittal"
import { computeNotatingSymbolRow, formatComma, NOTATING_SYMBOLS_HEADER_ROW } from "../io"

// TODO: you should also make it accept -n name!

program
    .option("-m, --monzo <monzo>", "monzo", (monzoText: string) => parseMonzo(monzoText as Formatted<Monzo>))
    .option("-r, --ratio <ratio>", "ratio", (ratioText: string) => parseRatio(ratioText as Formatted<Ratio>))

parseCommands("analyzeComma" as Filename)

const comma = program.args[ 0 ] as IO

let monzo
if (comma) {
    if (comma.includes("/")) {
        monzo = computeMonzoFromRatio(parseRatio(comma as Formatted<Ratio>))
    }
    if (comma.match(ANY_MONZO_CHARS)) {
        monzo = parseMonzo(comma as Formatted<Monzo>)
    }
} else if (program.monzo) {
    monzo = program.monzo
} else if (program.ratio) {
    monzo = computeMonzoFromRatio(program.ratio)
}

if (!monzo) {
    throw new Error("Unable to determine monzo for comma.")
}

// TODO: perhaps this should actually return the comma info as a row,
//  so you can more easily compare it with the notating symbols
//  though that decision will be intertwined with the one below about the notating symbols table.ts

const analyzedComma = analyzeComma(monzo)

saveLog(formatComma(analyzedComma), LogTarget.ALL, "analyzeComma" as Filename)

// TODO: this is technically notating JI symbols... but it would be pretty cool if it could return all possible
//  notating symbols and just not provide an ID if they aren't in Sagittal

const notatingSymbolIds = computeNotatingJiSymbolIds(monzo)

const notatingSymbolRows: Row[] = notatingSymbolIds.map(computeNotatingSymbolRow)

notatingSymbolRows.unshift(NOTATING_SYMBOLS_HEADER_ROW)

// TODO: this like findCommas should probably have an io/table.ts which allows for either terminal or forum output
//  which would also take the stuff like a pre-header-row as we see in some of the others
saveLog("" as IO, LogTarget.ALL, "notatingSymbols" as Filename)
saveLog("   --- notating symbols ---" as IO, LogTarget.ALL, "notatingSymbols" as Filename)
saveLog("" as IO, LogTarget.ALL, "notatingSymbols" as Filename) // TODO: EMPTY as IO constant

saveLog(formatTableForTerminal(notatingSymbolRows), LogTarget.ALL, "notatingSymbols" as Filename)
