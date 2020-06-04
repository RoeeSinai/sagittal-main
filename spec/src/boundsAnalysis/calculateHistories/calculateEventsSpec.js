const {calculateNeighborCommaPositions} = require("../../../../src/boundsAnalysis/utilities/calculateNeighborCommaPositions")
const {calculateEvents} = require("../../../../src/boundsAnalysis/calculateHistories/calculateEvents")

describe("calculateEvents", () => {
    let level
    let neighborCommaPositions
    let eventType

    describe("returns an event for each snappable position between the neighbor comma positions for this event type and level", () => {
        describe("for events of snapping to EDA midpoint positions", () => {
            beforeEach(() => {
                eventType = "EDA"
            })

            it("works when only one EDA midpoint is between the neighbor commas", () => {
                level = "veryHigh"
                neighborCommaPositions = calculateNeighborCommaPositions(4.5, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType)

                expect(result).toEqual(jasmine.arrayWithExactContents([
                    {
                        level: "veryHigh",
                        type: "EDA",
                        name: "2.5/58",
                        position: 4.900215778349652,
                    },
                ]))
            })

            it("works when multiple EDA midpoints are between the neighbor commas", () => {
                level = "high"
                neighborCommaPositions = calculateNeighborCommaPositions(28.0, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType)

                expect(result).toEqual(jasmine.arrayWithExactContents([
                    {
                        level: "high",
                        type: "EDA",
                        name: "11.5/47",
                        position: 27.816544035397598,
                    },
                    {
                        level: "high",
                        type: "EDA",
                        name: "12.5/47",
                        position: 30.235373951519126,
                    },
                ]))
            })

            it("returns an empty array if there are no EDA midpoints between the position's neighbor commas", () => {
                level = "veryHigh"
                neighborCommaPositions = calculateNeighborCommaPositions(6.05, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType)

                expect(result).toEqual([])
            })
        })

        describe("for events of snapping to comma mean positions", () => {
            beforeEach(() => {
                eventType = "MEAN"
            })

            it("works at the medium level", () => {
                level = "medium"
                neighborCommaPositions = calculateNeighborCommaPositions(26.25, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType)

                expect(result).toEqual([
                    {
                        level: "medium",
                        type: "MEAN",
                        name: "/| |)",
                        position: 24.38519069840745,
                    },
                ])
            })

            it("works at the high level", () => {
                level = "high"
                neighborCommaPositions = calculateNeighborCommaPositions(26.25, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType)

                expect(result).toEqual([
                    {
                        level: "high",
                        type: "MEAN",
                        name: ")/| |)",
                        position: 26.07420006263995,
                    },
                ])
            })

            it("works at the veryHigh level", () => {
                level = "veryHigh"
                neighborCommaPositions = calculateNeighborCommaPositions(26.25, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType)

                expect(result).toEqual([
                    {
                        level: "veryHigh",
                        type: "MEAN",
                        name: ".|) |)",
                        position: 26.287231406133,
                    },
                ])
            })

            it("works at the extreme level", () => {
                level = "extreme"
                neighborCommaPositions = calculateNeighborCommaPositions(26.25, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType)

                expect(result).toEqual([
                    {
                        level: "extreme",
                        type: "MEAN",
                        name: "`.|) ,,|)",
                        position: 26.220209513021253,
                    },
                ])
            })

            it("works even if there is a closer comma mean to the position but it is not between the neighbor commas", () => {
                // mean between )|) and |\ is 31.2043820809972, 0.20 away
                // mean between |) and )|) is 28.95310116433255, 2.05 away
                // however, )|) is at 30.985839104729000, so the 30.5 position is between it and |), not between it and |\

                level = "high"
                neighborCommaPositions = calculateNeighborCommaPositions(30.5, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType)

                expect(result).toEqual([
                    {
                        level: "high",
                        type: "MEAN",
                        name: "|) )|)",
                        position: 28.95310116433255,
                    },
                ])
            })
        })

        describe("for events of snapping to size category bound positions", () => {
            beforeEach(() => {
                eventType = "SIZE"
            })

            it("returns one event for each size category bound between the position's neighbor commas", () => {
                level = "medium"
                neighborCommaPositions = calculateNeighborCommaPositions(34.0, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType)

                expect(result).toEqual([
                    {
                        level: "medium",
                        type: "SIZE",
                        name: "C|S",
                        position: 33.382492644207100,
                    },
                ])
            })

            it("returns an empty array if there are no size category bounds between the position's neighbor commas", () => {
                level = "veryHigh"
                neighborCommaPositions = calculateNeighborCommaPositions(6.05, level)

                const result = calculateEvents(level, neighborCommaPositions, eventType)

                expect(result).toEqual([])
            })
        })
    })
})
