import {
    Cents,
    Copfr,
    Direction,
    EMPTY_MONZO,
    Id,
    Index,
    Max,
    Monzo,
    Name,
    Popularity,
    Prime,
    Rank,
    Ranked,
    Sopfr,
    Two3FreeClass,
    Votes,
} from "../../../../src/general"
import {FlaccoSubset} from "../../../../src/sagittal/accidental"
import {CommaClass} from "../../../../src/sagittal/ji/comma/class"
import {N2D3P9} from "../../../../src/sagittal/ji/two3FreeClass/n2d3p9"
import {popular23FreeClassesScriptGroupSettings} from "../../../../src/scripts/popular23FreeClass/globals"
import {computePopular23FreeClasses} from "../../../../src/scripts/popular23FreeClass/popular23FreeClasses"
import {Popular23FreeClass} from "../../../../src/scripts/popular23FreeClass/types"

describe("computePopular23FreeClasses", (): void => {
    it("returns a ranked (and sorted) list of the most popular 2,3-free classes with N2D3P9 less than the requested max           ", (): void => {
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computePopular23FreeClasses(maxN2D3P9)

        const expected = [
            {
                name: "1/1₍₂,₃₎" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 1 as Max<Prime<{rough: 5}>>,
                two3FreeSopfr: 0 as Sopfr<{rough: 5}>,
                two3FreeCopfr: 0 as Copfr<{rough: 5}>,
                n2d3p9: 1.000000 as N2D3P9,
                two3FreeClass: {
                    monzo: EMPTY_MONZO as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                popularityRank: 1 as Rank<Popularity>,
                votes: 7624 as Votes,
                notatingCommaClassIds: [0, 48] as Array<Id<CommaClass>>,
                notatingCommaClassSmallestFlaccoSubsetIndices:
                    [0, 5] as Array<Index<FlaccoSubset>>,
                rank: 1 as Rank<Popular23FreeClass>,
            },
            {
                name: "5/1₍₂,₃₎" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 5 as Max<Prime<{rough: 5}>>,
                two3FreeSopfr: 5 as Sopfr<{rough: 5}>,
                two3FreeCopfr: 1 as Copfr<{rough: 5}>,
                n2d3p9: 1.388888 as N2D3P9,
                two3FreeClass: {
                    monzo: [0, 0, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                popularityRank: 2 as Rank<Popularity>,
                votes: 5371 as Votes,
                notatingCommaClassIds: [4, 44] as Array<Id<CommaClass>>,
                notatingCommaClassSmallestFlaccoSubsetIndices:
                    [5, 1] as Array<Index<FlaccoSubset>>,
                rank: 2 as Rank<Popular23FreeClass>,
            },
            {
                name: "7/1₍₂,₃₎" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 7 as Max<Prime<{rough: 5}>>,
                two3FreeSopfr: 7 as Sopfr<{rough: 5}>,
                two3FreeCopfr: 1 as Copfr<{rough: 5}>,
                n2d3p9: 2.722222 as N2D3P9,
                two3FreeClass: {
                    monzo: [0, 0, 0, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                popularityRank: 3 as Rank<Popularity>,
                votes: 3016 as Votes,
                notatingCommaClassIds: [58, 108] as Array<Id<CommaClass>>,
                notatingCommaClassSmallestFlaccoSubsetIndices:
                    [1, 5] as Array<Index<FlaccoSubset>>,
                rank: 3 as Rank<Popular23FreeClass>,
            },
            {
                name: "25/1₍₂,₃₎" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 5 as Max<Prime<{rough: 5}>>,
                two3FreeSopfr: 10 as Sopfr<{rough: 5}>,
                two3FreeCopfr: 2 as Copfr<{rough: 5}>,
                n2d3p9: 3.472222 as N2D3P9,
                two3FreeClass: {
                    monzo: [0, 0, 2] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                popularityRank: 4 as Rank<Popularity>,
                votes: 1610 as Votes,
                notatingCommaClassIds: [40, 92] as Array<Id<CommaClass>>,
                notatingCommaClassSmallestFlaccoSubsetIndices:
                    [5, 1] as Array<Index<FlaccoSubset>>,
                rank: 4 as Rank<Popular23FreeClass>,
            },
            {
                name: "7/5₍₂,₃₎" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 7 as Max<Prime<{rough: 5}>>,
                two3FreeSopfr: 12 as Sopfr<{rough: 5}>,
                two3FreeCopfr: 2 as Copfr<{rough: 5}>,
                n2d3p9: 4.537037 as N2D3P9,
                two3FreeClass: {
                    monzo: [0, 0, -1, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                popularityRank: 5 as Rank<Popularity>,
                votes: 1318 as Votes,
                notatingCommaClassIds: [12, 62] as Array<Id<CommaClass>>,
                notatingCommaClassSmallestFlaccoSubsetIndices:
                    [1, 5] as Array<Index<FlaccoSubset>>,
                rank: 5 as Rank<Popular23FreeClass>,
            },
        ] as Array<Ranked<Popular23FreeClass>>
        expect(actual).toBeCloseToObject(expected)
    })

    it("also works when asked to return the best notating commas for each popular 2,3-free class", (): void => {
        const maxN2D3P9 = 5 as Max<N2D3P9>

        popular23FreeClassesScriptGroupSettings.useBestNotatingCommas = true
        const actual = computePopular23FreeClasses(maxN2D3P9)

        const expected = [
            {
                name: "1/1₍₂,₃₎" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 1 as Max<Prime<{rough: 5}>>,
                two3FreeSopfr: 0 as Sopfr<{rough: 5}>,
                two3FreeCopfr: 0 as Copfr<{rough: 5}>,
                n2d3p9: 1.000000 as N2D3P9,
                two3FreeClass: {
                    monzo: EMPTY_MONZO as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                popularityRank: 1 as Rank<Popularity>,
                votes: 7624 as Votes,
                bestNotatingCommaCents: 0 as Cents,
                bestNotatingCommaMonzo: EMPTY_MONZO as Monzo<{rational: true}>,
                bestNotatingCommaMaybeCommaClassId: 0 as Id<CommaClass>,
                rank: 1 as Rank<Popular23FreeClass>,
            },
            {
                name: "5/1₍₂,₃₎" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 5 as Max<Prime<{rough: 5}>>,
                two3FreeSopfr: 5 as Sopfr<{rough: 5}>,
                two3FreeCopfr: 1 as Copfr<{rough: 5}>,
                n2d3p9: 1.388888 as N2D3P9,
                two3FreeClass: {
                    monzo: [0, 0, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                popularityRank: 2 as Rank<Popularity>,
                votes: 5371 as Votes,
                bestNotatingCommaCents: 21.506290 as Cents,
                bestNotatingCommaMonzo: [-4, 4, -1] as Monzo<{rational: true}>,
                bestNotatingCommaMaybeCommaClassId: 44 as Id<CommaClass>,
                rank: 2 as Rank<Popular23FreeClass>,
            },
            {
                name: "7/1₍₂,₃₎" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 7 as Max<Prime<{rough: 5}>>,
                two3FreeSopfr: 7 as Sopfr<{rough: 5}>,
                two3FreeCopfr: 1 as Copfr<{rough: 5}>,
                n2d3p9: 2.722222 as N2D3P9,
                two3FreeClass: {
                    monzo: [0, 0, 0, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                popularityRank: 3 as Rank<Popularity>,
                votes: 3016 as Votes,
                bestNotatingCommaCents: 27.264092 as Cents,
                bestNotatingCommaMonzo: [6, -2, 0, -1] as Monzo<{rational: true}>,
                bestNotatingCommaMaybeCommaClassId: 58 as Id<CommaClass>,
                rank: 3 as Rank<Popular23FreeClass>,
            },
            {
                name: "25/1₍₂,₃₎" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 5 as Max<Prime<{rough: 5}>>,
                two3FreeSopfr: 10 as Sopfr<{rough: 5}>,
                two3FreeCopfr: 2 as Copfr<{rough: 5}>,
                n2d3p9: 3.472222 as N2D3P9,
                two3FreeClass: {
                    monzo: [0, 0, 2] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                popularityRank: 4 as Rank<Popularity>,
                votes: 1610 as Votes,
                bestNotatingCommaCents: 19.552569 as Cents,
                bestNotatingCommaMonzo: [11, -4, -2] as Monzo<{rational: true}>,
                bestNotatingCommaMaybeCommaClassId: 40 as Id<CommaClass>,
                rank: 4 as Rank<Popular23FreeClass>,
            },
            {
                name: "7/5₍₂,₃₎" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 7 as Max<Prime<{rough: 5}>>,
                two3FreeSopfr: 12 as Sopfr<{rough: 5}>,
                two3FreeCopfr: 2 as Copfr<{rough: 5}>,
                n2d3p9: 4.537037 as N2D3P9,
                two3FreeClass: {
                    monzo: [0, 0, -1, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                popularityRank: 5 as Rank<Popularity>,
                votes: 1318 as Votes,
                bestNotatingCommaCents: 29.217813 as Cents,
                bestNotatingCommaMonzo: [-9, 6, 1, -1] as Monzo<{rational: true}>,
                bestNotatingCommaMaybeCommaClassId: 62 as Id<CommaClass>,
                rank: 5 as Rank<Popular23FreeClass>,
            },
        ] as Array<Ranked<Popular23FreeClass>>
        expect(actual).toBeCloseToObject(expected)
    })
})
