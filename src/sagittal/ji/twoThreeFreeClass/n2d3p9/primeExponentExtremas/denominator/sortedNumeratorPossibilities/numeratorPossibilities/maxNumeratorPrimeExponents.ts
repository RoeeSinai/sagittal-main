import {
    Exponent,
    FIVE_PRIME_INDEX,
    increment,
    IntegerNumerator,
    Max,
    Prime,
    PRIMES,
    shallowClone,
} from "../../../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorPrimeExponentGivenMaxN2D3P9 } from "../../../maxNumeratorPrimeExponent"
import { INITIAL_MAX_NUMERATOR_PRIME_EXPONENTS_FOR_TWO_AND_THREE } from "./constants"

const computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9 = (
    maxN2D3P9: Max<N2D3P9>,
): Array<Max<IntegerNumerator & Exponent<Prime>>> => {
    let numeratorPrimeIndex = FIVE_PRIME_INDEX
    const maxNumeratorPrimeExponentsGivenMaxN2D3P9 =
        shallowClone(INITIAL_MAX_NUMERATOR_PRIME_EXPONENTS_FOR_TWO_AND_THREE)
    while (true) {
        const numeratorPrime = PRIMES[ numeratorPrimeIndex ] as IntegerNumerator & Prime

        const maxNumeratorPrimeExponentGivenMaxN2D3P9 =
            computeMaxNumeratorPrimeExponentGivenMaxN2D3P9(numeratorPrime, maxN2D3P9)

        if (maxNumeratorPrimeExponentGivenMaxN2D3P9 === 0) {
            break
        }
        maxNumeratorPrimeExponentsGivenMaxN2D3P9.push(maxNumeratorPrimeExponentGivenMaxN2D3P9)
        numeratorPrimeIndex = increment(numeratorPrimeIndex)
    }

    return maxNumeratorPrimeExponentsGivenMaxN2D3P9
}

export {
    computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9,
}
