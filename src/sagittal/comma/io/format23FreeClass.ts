import { computeJiPitchRatio, formatRatio, Formatted } from "../../../general"
import { TwoThreeFreeClass } from "../../types"

const format23FreeClass = (twoThreeFreeClass: TwoThreeFreeClass): Formatted<TwoThreeFreeClass> => {
    const ratio = computeJiPitchRatio(twoThreeFreeClass)

    return formatRatio(ratio) as Formatted as Formatted<TwoThreeFreeClass>
}

export {
    format23FreeClass,
}
