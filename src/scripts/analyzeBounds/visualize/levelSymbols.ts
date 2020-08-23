import { Id } from "../../../general"
import { getSymbol, JiSymbol, Level, LEVELS_SYMBOL_IDS } from "../../../notations"
import { presentMina } from "../present"
import { LEVEL_CENTERS } from "./levelHeights"
import { DOT_SIZE, MINA_OFFSET, SYMBOL_OFFSET } from "./sizes"
import { computeX } from "./x"

const visualizeLevelSymbols = () => {
    const levelSymbolElements: string[] = [] as string[]

    const levelsSymbolIdsEntries = Object.entries(LEVELS_SYMBOL_IDS) as Array<[Level, Array<Id<JiSymbol>>]>
    levelsSymbolIdsEntries.forEach(([level, levelSymbolIds]: [Level, Array<Id<JiSymbol>>]) => {
        if (level === Level.INSANE) {
            return
        }

        const centerY = LEVEL_CENTERS[ level ]
        const dotY = centerY - SYMBOL_OFFSET
        const symbolY = centerY + SYMBOL_OFFSET

        levelSymbolIds.forEach(levelSymbolId => {
            const levelSymbol: JiSymbol = getSymbol(levelSymbolId)
            const { primaryComma, ascii, unicode, mina } = levelSymbol

            const positionX = computeX(primaryComma.cents)

            const adjustedUnicode = ascii === "/|~" ? unicode + "         " : ascii === ",,(|(" ? "         " + unicode : unicode

            levelSymbolElements.push(`  <circle stroke="black" cx="${positionX}" cy="${dotY}" r="${DOT_SIZE}" />\n`)
            levelSymbolElements.push(`  <text fill="white" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="10px" font-family="Helvetica">${ascii}</text>\n`) // For searchability by ascii
            levelSymbolElements.push(`  <text fill="black" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="40px" font-family="Bravura">${adjustedUnicode}</text>\n`)

            if (level === Level.EXTREME) {
                const minaY = symbolY - MINA_OFFSET
                levelSymbolElements.push(`  <text text-anchor="middle" x="${positionX}" y="${minaY}" font-size="10px" font-family="Bravura">${presentMina(mina)}</text>\n`)
            }
        })
    })

    return levelSymbolElements
}

export {
    visualizeLevelSymbols,
}
