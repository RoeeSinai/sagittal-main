import { computeRoughNumberMonzo, deepEquals, FIVE_ROUGHNESS, Id, invertMonzo, Monzo } from "../../general"
import { getSagittalComma } from "../getComma"
import { JI_SYMBOLS } from "./jiSymbols"
import { JiSymbol } from "./types"

const computeNotatingJiSymbolIds = (monzo: Monzo): Array<Id<JiSymbol>> => {
    const notatingJiSymbols: Array<Id<JiSymbol>> = []
    const fiveRoughMonzo = computeRoughNumberMonzo(monzo, FIVE_ROUGHNESS)

    JI_SYMBOLS.forEach(jiSymbol => {
        const primaryCommaId = jiSymbol.primaryCommaId
        const primaryComma = getSagittalComma(primaryCommaId)
        const fiveRoughPrimaryCommaMonzo = computeRoughNumberMonzo(primaryComma.monzo, FIVE_ROUGHNESS)

        if (
            deepEquals(fiveRoughMonzo, fiveRoughPrimaryCommaMonzo) ||
            deepEquals(fiveRoughMonzo, invertMonzo(fiveRoughPrimaryCommaMonzo))
        ) {
            notatingJiSymbols.push(jiSymbol.id)
        }
    })

    return notatingJiSymbols
}

export {
    computeNotatingJiSymbolIds,
}
