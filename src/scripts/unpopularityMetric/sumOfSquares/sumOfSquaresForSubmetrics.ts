import { COMMA_POPULARITIES } from "./popularities"
import { computeUnpopularities } from "./unpopularities"
import { addRankToUnpopularities } from "./rank"
import { computeSumOfSquares } from "./sumOfSquares"
import { checkSubmetricsForIssues } from "./check"
import { CUT_OFF_POPULARITY, ZIPF_EXPONENT } from "./constants"
import { Submetric } from "../types"
import { Popularity, SumOfSquares } from "./types"

const computeSumOfSquaresForSubmetrics = (submetrics: Submetric[], { logUnpopularities = false } = {}): SumOfSquares => {
    checkSubmetricsForIssues(submetrics)

    const realPopularities: Popularity[] = COMMA_POPULARITIES.slice(0, CUT_OFF_POPULARITY)

    const unpopularities = computeUnpopularities(realPopularities, submetrics)
    const rankedUnpopularities = addRankToUnpopularities(unpopularities)

    if (logUnpopularities) rankedUnpopularities.map(rankedUnpopularity => console.log(JSON.stringify(rankedUnpopularity)))

    return computeSumOfSquares(rankedUnpopularities, realPopularities, ZIPF_EXPONENT)
}

export {
    computeSumOfSquaresForSubmetrics,
}
