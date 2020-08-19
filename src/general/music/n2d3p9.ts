import { PRIMES } from "../constants"
import { Exponent } from "../math"
import { Prime } from "../types"
import { computeCentsFromRatio } from "./centsFromRatio"
import { computeGpf } from "./gpf"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { Monzo, N2D3P9 } from "./types"
import { presentMonzo } from "./present"

const computeN2D3P9 = (monzo: Monzo): N2D3P9 => {
    if (monzo[0] !== 0 || monzo[1] !== 0) {
        throw new Error(`N2D3P9 must be given a 5-roughened monzo; received ${presentMonzo(monzo)}`)
    }

    if (computeCentsFromRatio(computeRatioFromMonzo(monzo)) < 0) {
        throw new Error(`N2D3P9 must be given a superunison (n ≥ d) monzo; received ${presentMonzo(monzo)}`)
    }

    return monzo.reduce(
        (n2d3p9: N2D3P9, primeExponent: Exponent<Prime>, primeIndex: number) => {
            const prime = PRIMES[ primeIndex ]
            const divisor = primeExponent < 0 ? 3 : 2

            return n2d3p9 * (prime / divisor) ** Math.abs(primeExponent) as N2D3P9
        },
        1 as N2D3P9,
    ) * computeGpf(monzo) / 9 as N2D3P9
}

export {
    computeN2D3P9,
}
