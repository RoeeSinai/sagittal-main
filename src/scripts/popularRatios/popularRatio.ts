import {
    COMMA_POPULARITIES,
    computeRatioFromMonzo,
    deepEquals,
    formatNumber,
    formatRatio,
    Io,
    ioSettings,
    join,
    Monzo,
    SPACE,
    Votes,
} from "../../general"
import { computeSmileyFromAscii, formatSymbolAscii, getJiSymbol, JI_SYMBOL_SUBSETS, N2D3P9 } from "../../sagittal"
import { computeExactlyNotatingJiSymbolIds } from "./exactlyNotatingJiSymbolIds"
import { PopularRatio } from "./types"

const computePopularRatio = ({ monzo, n2d3p9 }: { monzo: Monzo, n2d3p9: N2D3P9 }): PopularRatio => {
    const formattedN2D3P9 = formatNumber(n2d3p9)

    const ratio = computeRatioFromMonzo(monzo)
    const formattedRatio = formatRatio(ratio)
    const popularity = COMMA_POPULARITIES.find(popularity => deepEquals(popularity.fiveRoughRatio, ratio))
    const popularityRank = popularity?.rank || "-" as Io
    const votes = popularity?.votes || 0 as Votes

    const notatingSymbolIds = computeExactlyNotatingJiSymbolIds(monzo)
    const notatingSymbols = notatingSymbolIds.map(getJiSymbol)
    const formattedSymbols = join(notatingSymbols.map(symbol => {
        return ioSettings.forForum ? computeSmileyFromAscii(symbol.ascii) : formatSymbolAscii(symbol.ascii)
    }), SPACE)
    const symbolSubsets = notatingSymbols.map(symbol => {
        return JI_SYMBOL_SUBSETS.indexOf(symbol.smallestJiSymbolSubset)
    }).join(", ") as Io

    return {
        n2d3p9,
        formattedN2D3P9,
        formattedRatio,
        popularityRank,
        votes,
        formattedSymbols,
        symbolSubsets,
    }
}

export {
    computePopularRatio,
}
