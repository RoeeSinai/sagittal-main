import { add, computeCentsFromPitch, Id, Io, Px, subtract } from "../../../../general"
import {
    getMina,
    getRepresentativeSymbol,
    getSagittalComma,
    getSymbolClass,
    JiNotationLevel,
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS,
    SagittalComma,
    SymbolClass,
} from "../../../../sagittal"
import { formatMina } from "../terminal"
import { JI_NOTATION_LEVEL_CENTERS } from "./levelHeights"
import { DOT_SIZE, MINA_OFFSET, SYMBOL_OFFSET } from "./sizes"
import { computeX } from "./x"

const visualizeJiNotationLevelSymbolClasses = (): Io[] => {
    const jiNotationLevelSymbolElements: Io[] = [] as Io[]

    const jiNotationLevelsSymbolClassIdsEntries =
        Object.entries(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS) as Array<[JiNotationLevel, Array<Id<SymbolClass>>]>
    jiNotationLevelsSymbolClassIdsEntries.forEach((
        [jiNotationLevel, jiNotationLevelSymbolClassIds]: [JiNotationLevel, Array<Id<SymbolClass>>],
    ): void => {
        if (jiNotationLevel === JiNotationLevel.INSANE) {
            return
        }

        const centerY: Px = JI_NOTATION_LEVEL_CENTERS[ jiNotationLevel ]
        const dotY: Px = subtract(centerY, SYMBOL_OFFSET)
        const symbolY: Px = add(centerY, SYMBOL_OFFSET)

        jiNotationLevelSymbolClassIds.forEach((jiNotationLevelSymbolClassId: Id<SymbolClass>): void => {
            // TODO: this is one of the places to use the getPrimaryComma helper (marking specifically since this one
            //  doesn't look quite the same as the others)
            const jiNotationLevelSymbolClass: SymbolClass = getSymbolClass(jiNotationLevelSymbolClassId)
            const { primaryCommaId } = jiNotationLevelSymbolClass
            const mina = getMina(jiNotationLevelSymbolClassId)
            const { ascii, unicode } = getRepresentativeSymbol(jiNotationLevelSymbolClassId)
            const primaryComma: SagittalComma = getSagittalComma(primaryCommaId)

            const positionX: Px = computeX(computeCentsFromPitch(primaryComma))

            const adjustedUnicode = ascii === "/|~" ?
                unicode + "         " :
                ascii === ",,(|(" ? "         " + unicode : unicode

            jiNotationLevelSymbolElements.push(
                `  <circle stroke="black" cx="${positionX}" cy="${dotY}" r="${DOT_SIZE}" />\n` as Io,
            )
            jiNotationLevelSymbolElements.push(`  <text fill="white" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="10px" font-family="Helvetica">${ascii}</text>\n` as Io) // For searchability by ascii
            jiNotationLevelSymbolElements.push(`  <text fill="black" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="40px" font-family="Bravura">${adjustedUnicode}</text>\n` as Io)

            if (jiNotationLevel === JiNotationLevel.EXTREME) {
                const minaY: Px = subtract(symbolY, MINA_OFFSET)
                jiNotationLevelSymbolElements.push(`  <text text-anchor="middle" x="${positionX}" y="${minaY}" font-size="10px" font-family="Bravura">${formatMina(mina)}</text>\n` as Io)
            }
        })
    })

    return jiNotationLevelSymbolElements
}

export {
    visualizeJiNotationLevelSymbolClasses,
}
