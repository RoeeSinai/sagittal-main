const {computeSubmetricAntivotes} = require("./submetricAntivotes")
const {computeMonzoFromInteger} = require("../../../utilities/comma/monzoFromInteger")
const {computeMonzoFromRatio} = require("../../../utilities/comma/monzoFromRatio")

const computeRatioSubmetricAntivotes = (fiveRoughRatio, submetric = {}) => {
    const {k = 1, numeratorIsNuminator = 0} = submetric

    if (k === 1) {
        const fiveRoughNumberMonzo = computeMonzoFromRatio(fiveRoughRatio)

        return computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)
    }

    const [numerator, denominator] = fiveRoughRatio
    const fiveRoughNumeratorMonzo = computeMonzoFromInteger(numerator)
    const fiveRoughDenominatorMonzo = computeMonzoFromInteger(denominator)

    const numeratorPrimeContentAntivotes = computeSubmetricAntivotes(fiveRoughNumeratorMonzo, submetric)
    const denominatorPrimeContentAntivotes = computeSubmetricAntivotes(fiveRoughDenominatorMonzo, submetric)
    const numinator = numeratorIsNuminator ?
        numeratorPrimeContentAntivotes :
        numeratorPrimeContentAntivotes > denominatorPrimeContentAntivotes ?
            numeratorPrimeContentAntivotes :
            denominatorPrimeContentAntivotes
    const diminuator = numeratorIsNuminator ?
        denominatorPrimeContentAntivotes :
        numeratorPrimeContentAntivotes > denominatorPrimeContentAntivotes ?
            denominatorPrimeContentAntivotes :
            numeratorPrimeContentAntivotes

    // console.log('numinator', numinator, 'k', k, 'diminuator', diminuator, fiveRoughDenominatorMonzo)
    return numinator + k * diminuator
}

module.exports = {
    computeRatioSubmetricAntivotes,
}
