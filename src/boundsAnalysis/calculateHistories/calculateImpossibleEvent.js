const {MAXIMUM_POSITION} = require("../data/intervals")
const {calculateCommaFromPosition} = require("../data/calculateCommaFromPosition")
const {formatPosition} = require("../format/formatPosition")

const calculateImpossibleEvent = (position, level, [lesserNeighborCommaPosition, greaterNeighborCommaPosition]) => {
    const formattedGreaterNeighborCommaPosition = formatPosition(greaterNeighborCommaPosition || MAXIMUM_POSITION)
    const formattedLesserNeighborCommaPosition = formatPosition(lesserNeighborCommaPosition)

    const lesserCommaSymbol = lesserNeighborCommaPosition ? calculateCommaFromPosition(lesserNeighborCommaPosition).symbol : "the minimum position"
    const greaterCommaSymbol = greaterNeighborCommaPosition ? calculateCommaFromPosition(greaterNeighborCommaPosition).symbol : "the maximum position"

    return {
        level,
        type: "impossible",
        name: `not between ${lesserCommaSymbol} @${formattedLesserNeighborCommaPosition} and ${greaterCommaSymbol} @${formattedGreaterNeighborCommaPosition} at the ${level} level`,
        position,
        rank: 8,
    }
}

module.exports = {
    calculateImpossibleEvent,
}
