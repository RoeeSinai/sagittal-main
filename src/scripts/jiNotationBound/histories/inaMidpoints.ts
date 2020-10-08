import { isPitchHigher, Maybe, Name, Pitch, Quotient } from "../../../general"
import {
    APOTOME,
    InaMidpoint,
    JiNotationLevel,
    JI_NOTATION_LEVELS,
    JI_NOTATION_LEVEL_EDAS,
    MAX_SYMBOL_CLASS_POSITION,
} from "../../../sagittal"

const computeInaMidpoints = (jiNotationLevel: JiNotationLevel): InaMidpoint[] => {
    const eda = JI_NOTATION_LEVEL_EDAS[ JI_NOTATION_LEVELS.indexOf(jiNotationLevel) ]

    const inaMidpoints = [...Array(eda).keys()].map((degree: number): Maybe<InaMidpoint> => {
        const midpoint = degree + 0.5
        const pitch = {
            monzo: APOTOME.monzo,
            scaler: [midpoint, eda as number] as Quotient,
        } as Pitch<{ rational: false }>

        if (isPitchHigher(pitch, MAX_SYMBOL_CLASS_POSITION)) {
            return undefined
        }

        const name: Name<InaMidpoint> = `${midpoint}°${eda}` as Name<InaMidpoint>

        return { name, pitch }
    })

    return inaMidpoints.filter((inaMidpoint: Maybe<InaMidpoint>): boolean => !!inaMidpoint) as InaMidpoint[]
}

export {
    computeInaMidpoints,
}
