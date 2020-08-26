import { Base, Exponent, floor, log, Max, Numerator, Power, Prime } from "../../../math"
import { N2D3P9 } from "../types"

const computeMaxNumeratorPrimeExponentGivenMaxN2D3P3 = (numeratorPrime: Prime<Numerator>, maxN2D3P9: Max<N2D3P9>): Max<Exponent<Prime<Numerator>>> => {
    const power = maxN2D3P9 * (9 / numeratorPrime) as Power<Prime<Numerator>>

    return power > 0 ?
        floor(log(power, numeratorPrime / 2 as Base<Prime<Numerator>>)) as Max<Exponent<Prime<Numerator>>> :
        0 as Max<Exponent<Prime<Numerator>>>
}

export {
    computeMaxNumeratorPrimeExponentGivenMaxN2D3P3,
}
