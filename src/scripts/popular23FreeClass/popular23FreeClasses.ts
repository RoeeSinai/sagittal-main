import {
    ACCURACY_THRESHOLD,
    computeIsSubMonzo,
    computeTrimmedArray,
    Exponent,
    Extrema,
    Filename,
    increment,
    Integer,
    Io,
    isUndefined,
    KeyPath,
    LogTarget,
    Max,
    Monzo,
    parse23FreeClass,
    Prime,
    rank,
    Ranked,
    RankStrategy,
    readLines,
    saveLog,
    shallowClone,
    stringify,
    TwoThreeFreeClass,
} from "../../general"
import { computeN2D3P9, computePrimeExponentExtremasGivenMaxN2D3P9, N2D3P9 } from "../../sagittal"
import { popular23FreeClassesScriptGroupSettings } from "./globals"
import { computeMaybePopular23FreeClass } from "./maybePopular23FreeClass"
import { computePopular23FreeClass } from "./popular23FreeClass"
import { Popular23FreeClass } from "./types"

const computePopular23FreeClasses = (maxN2D3P9: Max<N2D3P9>): Array<Ranked<Popular23FreeClass>> => {
    let popular23FreeClassAnalyses
    if (popular23FreeClassesScriptGroupSettings.useKnown) {
        const knownPopular23FreeClasses =
            readLines("src/scripts/popular23FreeClass/input/knownPopular23FreeClasses.txt" as Filename)
                .map((knownPopular23FreeClassIo: Io): TwoThreeFreeClass => {
                    return parse23FreeClass(knownPopular23FreeClassIo)
                })

        popular23FreeClassAnalyses = knownPopular23FreeClasses
            .map((twoThreeFreeClass: TwoThreeFreeClass): Popular23FreeClass => {
                return computePopular23FreeClass({
                    twoThreeFreeClass,
                    n2d3p9: computeN2D3P9(twoThreeFreeClass),
                })
            })
    } else {
        saveLog("About to calculate prime exponent extremas given max N2D3P9" as Io, LogTarget.PROGRESS)

        const primeExponentExtremasGivenMaxN2D3P9 = computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)
        saveLog(
            `prime exponent extremas given max N2D3P9: ${stringify(primeExponentExtremasGivenMaxN2D3P9)}` as Io,
            LogTarget.PROGRESS,
        )

        const monzoCount = primeExponentExtremasGivenMaxN2D3P9.reduce(
            (total: number, [min, max]: [number, number]): number => total * (max - min + 1),
            1,
        )
        saveLog(`total monzos to check: ${monzoCount}` as Io, LogTarget.PROGRESS)
        let monzosCheckedCount = 0

        const initialMonzo: Monzo = primeExponentExtremasGivenMaxN2D3P9.map(
            ([minPrimeExponent, _]: Extrema<Integer & Exponent<Prime>>): Integer & Exponent<Prime> => minPrimeExponent,
        )
        const finalMonzo: Monzo = primeExponentExtremasGivenMaxN2D3P9.map(
            ([_, maxPrimeExponent]: Extrema<Integer & Exponent<Prime>>): Integer & Exponent<Prime> => maxPrimeExponent,
        )
        let twoThreeFreeMonzo: Monzo<{ rough: 5 }> = shallowClone(initialMonzo) as Monzo<{ rough: 5 }>

        popular23FreeClassAnalyses = [] as Array<Popular23FreeClass>
        while (true) {
            // do the work (trimming has the extra win of shallow cloning, disconnecting from this ticking process)
            const twoThreeFreeMonzoForWork = computeTrimmedArray(twoThreeFreeMonzo)
            const maybePopular23FreeClass = !computeIsSubMonzo(twoThreeFreeMonzoForWork) ?
                computeMaybePopular23FreeClass(
                    { monzo: twoThreeFreeMonzoForWork } as TwoThreeFreeClass,
                    maxN2D3P9,
                ) :
                undefined

            // log progress
            monzosCheckedCount = increment(monzosCheckedCount)
            if (monzosCheckedCount % 1000000 === 0) {
                saveLog(
                    `done: ${monzosCheckedCount} (${100 * monzosCheckedCount / monzoCount}%)` as Io,
                    LogTarget.PROGRESS,
                )
            }

            if (!isUndefined(maybePopular23FreeClass)) {
                saveLog(stringify(maybePopular23FreeClass) as Io, LogTarget.PROGRESS)
                popular23FreeClassAnalyses.push(maybePopular23FreeClass)
            }

            // figure out which index is the first one which hasn't reached its max
            let indexToTick = 0
            // we have reached the max for this term for now (and haven't exceeded the end of the monzo)
            while (
                indexToTick < twoThreeFreeMonzo.length &&
                twoThreeFreeMonzo[ indexToTick ] === finalMonzo[ indexToTick ]
                ) {
                indexToTick = increment(indexToTick)
            }

            // ok so now we're at the first term which isn't at its max

            // quit now if apparently ALL the terms are at their maxes
            if (indexToTick === twoThreeFreeMonzo.length) {
                break
            }

            // otherwise increment the term at this not-yet-maxed index toward its max
            twoThreeFreeMonzo[ indexToTick ] = increment(twoThreeFreeMonzo[ indexToTick ])

            // and reset the term at every other index before this one to its min,
            // so we can repeat everything we've done so far but for this index being one higher than it was previously
            let i = 0
            while (i < indexToTick) {
                twoThreeFreeMonzo[ i ] = initialMonzo[ i ]
                i = increment(i)
            }
        }
    }

    return rank(popular23FreeClassAnalyses, {
        by: "n2d3p9" as KeyPath,
        strategy: RankStrategy.FRACTIONAL,
        precision: ACCURACY_THRESHOLD,
    })
}

export {
    computePopular23FreeClasses,
}
