import { dividesEvenly } from "../../../dividesEvenly"
import { NumTypeParameters, Ratio, RatioNotDefaultingToRational } from "../../../num"
import { isInteger } from "../../typeGuards"

// TODO: IRRATIONAL RATIOS
//  This method is kind of a lie. any ratio is rational by our current implementation,
//  Which limits numerators and denominators to primitive numbers, not sqrts and such.
//  E.g. this would say false for 5.5/3.5, even though that's just 11/7.
//  So maybe we mean something slightly different by it. what we mean by it is that both numerator
//  And denominator are integers... such that we can do things like get it into lowest terms.
//  But perhaps a sibling of lowest terms could be converting 5.5/3.5 into 11/7.
//  We have the ability to do that already from computeRatioFromRationalDecimal. just call it on both parts.
//  So it would first go to 55/10 // 35/10, then cancel the powers of 10 to get 55/35, then just take lowest terms.
//  It would be kind of nice if ratios were FORCED to be two integers. otherwise why use them...
//  And that would also allow us to clean up that comment in some test somewhere about parsing ratios
//  Where it conflicted with parsing factorized comma names e.g. 5².11

const isRationalRatio = <T extends NumTypeParameters>(
    candidateRationalRatio: RatioNotDefaultingToRational<T>,
): candidateRationalRatio is Ratio<T & { potentiallyIrrational: false }> => {
    const [numerator, denominator] = candidateRationalRatio

    return isInteger(numerator) && isInteger(denominator)
}

const isIntegerRatio = <T extends NumTypeParameters>(
    candidateIntegerRatio: RatioNotDefaultingToRational<T>,
): candidateIntegerRatio is Ratio<T & { potentiallyIrrational: false, integer: true }> => {
    const [numerator, denominator] = candidateIntegerRatio

    return dividesEvenly(numerator, denominator)
}

export {
    isRationalRatio,
    isIntegerRatio,
}
