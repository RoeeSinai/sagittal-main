const {RANKS} = require("./ranks")
const {computeIsCloseTo} = require("../../utilities/isCloseTo")
const {computeEventDistance} = require("./eventDistance")
const {computeEventInaDistance} = require("./eventInaDistance")

const analyzeEvents = (history, actualBoundPosition) => {
    return history.map((event, index) => {
        const {position, type} = event
        const exact = computeIsCloseTo(position, actualBoundPosition)
        const rank = RANKS[type]
        const distance = computeEventDistance(event, index, history)
        const inaDistance = computeEventInaDistance(event, index, history)

        return {
            ...event,
            rank,
            exact,
            distance,
            inaDistance,
        }
    })
}

module.exports = {
    analyzeEvents,
}
