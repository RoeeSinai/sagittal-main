import {
    computeMonzosFromPrimeExponentExtremas,
    computePrimeExponentExtremasGivenMaxN2D3P9,
    isUndefined,
    Max,
    N2D3P9,
    rank,
    Ranked,
    RankStrategy,
} from "../../general"
import { computeMaybePopularRatio } from "./maybePopularRatio"
import { PopularRatio } from "./types"

const computePopularRatios = (maxN2D3P9: Max<N2D3P9>): Array<Ranked<PopularRatio>> => {
    const primeExponentExtremasGivenMaxN2D3P9 = computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)
    const monzosToCheck = computeMonzosFromPrimeExponentExtremas(primeExponentExtremasGivenMaxN2D3P9)

    const popularRatios = [] as Array<PopularRatio>
    monzosToCheck.forEach(monzo => {
        const maybePopularRatio = computeMaybePopularRatio(monzo, maxN2D3P9)

        if (!isUndefined(maybePopularRatio)) {
            popularRatios.push(maybePopularRatio)
        }
    })

    return rank(popularRatios, { by: "formattedN2D3P9", strategy: RankStrategy.FRACTIONAL })
}

export {
    computePopularRatios,
}
