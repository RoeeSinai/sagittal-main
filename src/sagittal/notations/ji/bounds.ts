// tslint:disable max-line-length   
// TODO: should the jiNotationLevels live outside of these, much in the same way as I extracted symbol subsets
//  And notation levels for the symbols? probably, yes.

import { Decimal, Id, Name } from "../../../general"
import { SizeCategoryBound } from "../../ji"
import { BoundType, CommaMean, InaMidpoint, JiNotationBound, JiNotationLevel } from "./types"

// The bounds analysis I have proposed here: http://forum.sagittal.org/viewtopic.php?p=1808#p1808
// Might stipulate a reorganizing of these, where each JI notation level is a separate list
// Because some of these JI notation bounds bound symbols which are unrelated from one JI notation level to the next,
// So maybe can be different

const JI_NOTATION_BOUNDS: JiNotationBound[] = [
    {
        id: 0 as Id<JiNotationBound>,
        decimal: 1.000121763348001 as Decimal,  // 0.210788021120605¢
        name: "1.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 1 as Id<JiNotationBound>,
        decimal: 1.000446538098437 as Decimal,  // 0.772889410775552¢
        name: "5.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 2 as Id<JiNotationBound>,
        decimal: 1.0006901883713204 as Decimal, // 1.194465453016760¢
        name: "8.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 3 as Id<JiNotationBound>,
        decimal: 1.0010151477093754 as Decimal, // 1.756566842671710¢
        name: "12.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 4 as Id<JiNotationBound>,
        decimal: 1.0012589364623088 as Decimal, // 2.178142884912920¢
        name: "15.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 5 as Id<JiNotationBound>,
        decimal: 1.0015840804928944 as Decimal, // 2.740244274567870¢
        name: "19.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 6 as Id<JiNotationBound>,
        decimal: 1.0018280078045843 as Decimal, // 3.161820316809080¢
        name: "22.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 7 as Id<JiNotationBound>,
        decimal: 1.0021533366326714 as Decimal, // 3.723921706464020¢
        name: "26.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 8 as Id<JiNotationBound>,
        decimal: 1.002397402581868 as Decimal,  // 4.145497748705230¢
        name: "29.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 9 as Id<JiNotationBound>,
        decimal: 1.0026415279712573 as Decimal, // 4.567073790946440¢
        name: "32.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 10 as Id<JiNotationBound>,
        decimal: 1.0029671209779865 as Decimal, // 5.129175180601390¢
        name: "36.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 11 as Id<JiNotationBound>,
        decimal: 1.0032113851174613 as Decimal, // 5.550751222842600¢
        name: "39.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 12 as Id<JiNotationBound>,
        decimal: 1.0035371631768701 as Decimal, // 6.112852612497550¢
        name: "43.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 13 as Id<JiNotationBound>,
        decimal: 1.00378156614529 as Decimal,   // 6.534428654738760¢
        name: "46.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 14 as Id<JiNotationBound>,
        decimal: 1.0041075293625543 as Decimal, // 7.096530044393700¢
        name: "50.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 15 as Id<JiNotationBound>,
        decimal: 1.0043520712388232 as Decimal, // 7.518106086634910¢
        name: "53.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 16 as Id<JiNotationBound>,
        decimal: 1.0046782197191788 as Decimal, // 8.080207476289860¢
        name: "57.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 17 as Id<JiNotationBound>,
        decimal: 1.004922900582246 as Decimal,  // 8.501783518531070¢
        name: "60.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 18 as Id<JiNotationBound>,
        decimal: 1.005249234430988 as Decimal,  // 9.063884908186020¢
        name: "64.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 19 as Id<JiNotationBound>,
        decimal: 1.0054940543598472 as Decimal, // 9.485460950427230¢
        name: "67.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 20 as Id<JiNotationBound>,
        decimal: 1.005820573682331 as Decimal,  // 10.047562340082200¢
        name: "71.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 21 as Id<JiNotationBound>,
        decimal: 1.0060655327560213 as Decimal, // 10.469138382323400¢
        name: "74.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 22 as Id<JiNotationBound>,
        decimal: 1.0063922376576617 as Decimal, // 11.031239771978300¢
        name: "78.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 23 as Id<JiNotationBound>,
        decimal: 1.006637335955267 as Decimal,  // 11.452815814219500¢
        name: "81.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 24 as Id<JiNotationBound>,
        decimal: 1.006964226541539 as Decimal,  // 12.014917203874500¢
        name: "85.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 25 as Id<JiNotationBound>,
        decimal: 1.0072094641421878 as Decimal, // 12.436493246115700¢
        name: "88.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 26 as Id<JiNotationBound>,
        decimal: 1.0075365405186267 as Decimal, // 12.998594635770600¢
        name: "92.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 27 as Id<JiNotationBound>,
        decimal: 1.0077819175014926 as Decimal, // 13.420170678011900¢
        name: "95.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 28 as Id<JiNotationBound>,
        decimal: 1.0080273542438425 as Decimal, // 13.841746720253100¢
        name: "98.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 29 as Id<JiNotationBound>,
        decimal: 1.0083546962179948 as Decimal, // 14.403848109908000¢
        name: "102.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 30 as Id<JiNotationBound>,
        decimal: 1.0086002724557452 as Decimal, // 14.825424152149200¢
        name: "105.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 31 as Id<JiNotationBound>,
        decimal: 1.0089278004766133 as Decimal, // 15.387525541804200¢
        name: "109.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 32 as Id<JiNotationBound>,
        decimal: 1.0091735162890474 as Decimal, // 15.809101584045400¢
        name: "112.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 33 as Id<JiNotationBound>,
        decimal: 1.0095012304623718 as Decimal, // 16.371202973700300¢
        name: "116.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 34 as Id<JiNotationBound>,
        decimal: 1.0097470859288176 as Decimal, // 16.792779015941500¢
        name: "119.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 35 as Id<JiNotationBound>,
        decimal: 1.0100749863603993 as Decimal, // 17.354880405596500¢
        name: "123.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 36 as Id<JiNotationBound>,
        decimal: 1.0103209815602296 as Decimal, // 17.776456447837700¢
        name: "126.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 37 as Id<JiNotationBound>,
        decimal: 1.0106490683559295 as Decimal, // 18.338557837492600¢
        name: "130.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 38 as Id<JiNotationBound>,
        decimal: 1.0108952033685632 as Decimal, // 18.760133879733900¢
        name: "133.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 39 as Id<JiNotationBound>,
        decimal: 1.0112234766343022 as Decimal, // 19.322235269388800¢
        name: "137.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 40 as Id<JiNotationBound>,
        decimal: 1.0114697515392024 as Decimal, // 19.743811311630000¢
        name: "140.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 41 as Id<JiNotationBound>,
        decimal: 1.011798211380962 as Decimal,  // 20.305912701285000¢
        name: "144.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 42 as Id<JiNotationBound>,
        decimal: 1.0120446262576375 as Decimal, // 20.727488743526200¢
        name: "147.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 43 as Id<JiNotationBound>,
        decimal: 1.0123732727814592 as Decimal, // 21.289590133181100¢
        name: "151.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 44 as Id<JiNotationBound>,
        decimal: 1.0126198277094633 as Decimal, // 21.711166175422300¢
        name: "154.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 45 as Id<JiNotationBound>,
        decimal: 1.01286644268383 as Decimal,   // 22.132742217663500¢
        name: "157.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 46 as Id<JiNotationBound>,
        decimal: 1.0131953560803815 as Decimal, // 22.694843607318500¢
        name: "161.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 47 as Id<JiNotationBound>,
        decimal: 1.0134421112198038 as Decimal, // 23.116419649559700¢
        name: "164.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 48 as Id<JiNotationBound>,
        decimal: 1.0137712115561976 as Decimal, // 23.678521039214600¢
        name: "168.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 49 as Id<JiNotationBound>,
        decimal: 1.0139333869076101 as Decimal, // 23.955448448755500¢
        name: "`'/| ,,)/|" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 50 as Id<JiNotationBound>,
        decimal: 1.0140181069403391 as Decimal, // 24.100097081455800¢
        name: "171.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 51 as Id<JiNotationBound>,
        decimal: 1.014347394322824 as Decimal,  // 24.662198471110800¢
        name: "175.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 52 as Id<JiNotationBound>,
        decimal: 1.0144785195688801 as Decimal, // 24.885981585695500¢
        name: ")/| ,.|)" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 53 as Id<JiNotationBound>,
        decimal: 1.0145944300313938 as Decimal, // 25.083774513352000¢
        name: "178.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 54 as Id<JiNotationBound>,
        decimal: 1.0149239045662786 as Decimal, // 25.645875903007000¢
        name: "182.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 55 as Id<JiNotationBound>,
        decimal: 1.0151710806790306 as Decimal, // 26.067451945248200¢
        name: "185.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 56 as Id<JiNotationBound>,
        decimal: 1.015500742472684 as Decimal,  // 26.629553334903100¢
        name: "189.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 57 as Id<JiNotationBound>,
        decimal: 1.015748059069418 as Decimal,  // 27.051129377144300¢
        name: "192.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 58 as Id<JiNotationBound>,
        decimal: 1.0160779082282703 as Decimal, // 27.613230766799300¢
        name: "196.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 59 as Id<JiNotationBound>,
        decimal: 1.0163253653888307 as Decimal, // 28.034806809040500¢
        name: "199.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 60 as Id<JiNotationBound>,
        decimal: 1.0166554020193714 as Decimal, // 28.596908198695400¢
        name: "203.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 61 as Id<JiNotationBound>,
        decimal: 1.0169029998236492 as Decimal, // 29.018484240936600¢
        name: "206.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 62 as Id<JiNotationBound>,
        decimal: 1.017233224032429 as Decimal,  // 29.580585630591600¢
        name: "210.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 63 as Id<JiNotationBound>,
        decimal: 1.0174809625603594 as Decimal, // 30.002161672832800¢
        name: "213.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 64 as Id<JiNotationBound>,
        decimal: 1.0178113744539898 as Decimal, // 30.564263062487700¢
        name: "217.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 65 as Id<JiNotationBound>,
        decimal: 1.018059253785554 as Decimal,  // 30.985839104728900¢
        name: "220.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 66 as Id<JiNotationBound>,
        decimal: 1.018307193486028 as Decimal,  // 31.407415146970200¢
        name: "223.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 67 as Id<JiNotationBound>,
        decimal: 1.0186378736859312 as Decimal, // 31.969516536625100¢
        name: "227.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 68 as Id<JiNotationBound>,
        decimal: 1.0188859543043765 as Decimal, // 32.391092578866300¢
        name: "230.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 69 as Id<JiNotationBound>,
        decimal: 1.0192168224482954 as Decimal, // 32.953193968521300¢
        name: "234.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 70 as Id<JiNotationBound>,
        decimal: 1.0194650440648034 as Decimal, // 33.374770010762500¢
        name: "237.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 71 as Id<JiNotationBound>,
        decimal: 1.0197961002595572 as Decimal, // 33.936871400417400¢
        name: "241.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 72 as Id<JiNotationBound>,
        decimal: 1.0200444629542653 as Decimal, // 34.358447442658600¢
        name: "244.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 73 as Id<JiNotationBound>,
        decimal: 1.0203757073067334 as Decimal, // 34.920548832313600¢
        name: "248.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 74 as Id<JiNotationBound>,
        decimal: 1.0204921440204184 as Decimal, // 35.118091464366500¢
        name: "'(| ,~|)" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 75 as Id<JiNotationBound>,
        decimal: 1.0206242111598243 as Decimal, // 35.342124874554800¢
        name: "251.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 76 as Id<JiNotationBound>,
        decimal: 1.0209556437769474 as Decimal, // 35.904226264209700¢
        name: "255.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 77 as Id<JiNotationBound>,
        decimal: 1.021204288868649 as Decimal,  // 36.325802306450900¢
        name: "258.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 78 as Id<JiNotationBound>,
        decimal: 1.0215359098574286 as Decimal, // 36.887903696105900¢
        name: "262.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 79 as Id<JiNotationBound>,
        decimal: 1.0217846962680148 as Decimal, // 37.309479738347100¢
        name: "265.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 80 as Id<JiNotationBound>,
        decimal: 1.0221165057355128 as Decimal, // 37.871581128002000¢
        name: "269.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 81 as Id<JiNotationBound>,
        decimal: 1.0222288995508408 as Decimal, // 38.061940349778500¢
        name: "/|~ ,,(|(" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 82 as Id<JiNotationBound>,
        decimal: 1.022365433545303 as Decimal,  // 38.293157170243300¢
        name: "272.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 83 as Id<JiNotationBound>,
        decimal: 1.0226974315986426 as Decimal, // 38.855258559898200¢
        name: "276.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 84 as Id<JiNotationBound>,
        decimal: 1.0229465008880017 as Decimal, // 39.276834602139400¢
        name: "279.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 85 as Id<JiNotationBound>,
        decimal: 1.0231956308360748 as Decimal, // 39.698410644380600¢
        name: "282.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 86 as Id<JiNotationBound>,
        decimal: 1.0235278984837055 as Decimal, // 40.260512034035600¢
        name: "286.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 87 as Id<JiNotationBound>,
        decimal: 1.0237771700262341 as Decimal, // 40.682088076276800¢
        name: "289.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 88 as Id<JiNotationBound>,
        decimal: 1.0241096265201157 as Decimal, // 41.244189465931700¢
        name: "293.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 89 as Id<JiNotationBound>,
        decimal: 1.024359039737576 as Decimal,  // 41.665765508172900¢
        name: "296.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 90 as Id<JiNotationBound>,
        decimal: 1.02469168518504 as Decimal,   // 42.227866897827900¢
        name: "300.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 91 as Id<JiNotationBound>,
        decimal: 1.0249412401579536 as Decimal, // 42.649442940069100¢
        name: "303.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 92 as Id<JiNotationBound>,
        decimal: 1.0252740746663933 as Decimal, // 43.211544329724000¢
        name: "307.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 93 as Id<JiNotationBound>,
        decimal: 1.0255237714753278 as Decimal, // 43.633120371965300¢
        name: "310.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 94 as Id<JiNotationBound>,
        decimal: 1.0258567951521969 as Decimal, // 44.195221761620200¢
        name: "314.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 95 as Id<JiNotationBound>,
        decimal: 1.0261066338777656 as Decimal, // 44.616797803861400¢
        name: "317.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 96 as Id<JiNotationBound>,
        decimal: 1.0264004785593346 as Decimal, // 45.112497836531300¢
        name: "S|M" as Name<SizeCategoryBound>,
        boundType: BoundType.SIZE_CATEGORY_BOUND,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 97 as Id<JiNotationBound>,
        decimal: 1.026689827553441 as Decimal,  // 45.600475235757600¢
        name: "324.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 98 as Id<JiNotationBound>,
        decimal: 1.0270232298897752 as Decimal, // 46.162576625412500¢
        name: "328.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 99 as Id<JiNotationBound>,
        decimal: 1.0272733526906355 as Decimal, // 46.584152667653700¢
        name: "331.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 100 as Id<JiNotationBound>,
        decimal: 1.0276069445181273 as Decimal, // 47.146254057308700¢
        name: "335.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 101 as Id<JiNotationBound>,
        decimal: 1.0278572094777367 as Decimal, // 47.567830099549900¢
        name: "338.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 102 as Id<JiNotationBound>,
        decimal: 1.0281909909040847 as Decimal, // 48.129931489204800¢
        name: "342.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 103 as Id<JiNotationBound>,
        decimal: 1.0284413981032399 as Decimal, // 48.551507531446000¢
        name: "345.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 104 as Id<JiNotationBound>,
        decimal: 1.0286918662869458 as Decimal, // 48.973083573687200¢
        name: "348.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 105 as Id<JiNotationBound>,
        decimal: 1.0290259187557478 as Decimal, // 49.535184963342200¢
        name: "352.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 106 as Id<JiNotationBound>,
        decimal: 1.029276529294503 as Decimal,  // 49.956761005583400¢
        name: "355.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 107 as Id<JiNotationBound>,
        decimal: 1.029610771623969 as Decimal,  // 50.518862395238300¢
        name: "359.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 108 as Id<JiNotationBound>,
        decimal: 1.0298615245986824 as Decimal, // 50.940438437479600¢
        name: "362.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 109 as Id<JiNotationBound>,
        decimal: 1.0300275676521753 as Decimal, // 51.219540248855700¢
        name: "`'/|) ./|\\" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 110 as Id<JiNotationBound>,
        decimal: 1.0301959568967214 as Decimal, // 51.502539827134500¢
        name: "366.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 111 as Id<JiNotationBound>,
        decimal: 1.0304468523883468 as Decimal, // 51.924115869375700¢
        name: "369.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 112 as Id<JiNotationBound>,
        decimal: 1.030781474762928 as Decimal,  // 52.486217259030700¢
        name: "373.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 113 as Id<JiNotationBound>,
        decimal: 1.031032512852466 as Decimal,  // 52.907793301271900¢
        name: "376.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 114 as Id<JiNotationBound>,
        decimal: 1.0313673254116207 as Decimal, // 53.469894690926800¢
        name: "380.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 115 as Id<JiNotationBound>,
        decimal: 1.0316185061801175 as Decimal, // 53.891470733168000¢
        name: "383.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 116 as Id<JiNotationBound>,
        decimal: 1.0319535090319385 as Decimal, // 54.453572122823000¢
        name: "387.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 117 as Id<JiNotationBound>,
        decimal: 1.0322048325604865 as Decimal, // 54.875148165064200¢
        name: "390.5°809" as Name<InaMidpoint>,     // TODO: should this actually be a TinaMidpoint?
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 118 as Id<JiNotationBound>,
        decimal: 1.0323362474674525 as Decimal, // 55.095545776914000¢
        name: "`(/| '/|\\" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 119 as Id<JiNotationBound>,
        decimal: 1.0325400258131274 as Decimal, // 55.437249554719100¢
        name: "394.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 120 as Id<JiNotationBound>,
        decimal: 1.0327914921828651 as Decimal, // 55.858825596960300¢
        name: "397.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 121 as Id<JiNotationBound>,
        decimal: 1.0331268759445416 as Decimal, // 56.420926986615300¢
        name: "401.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 122 as Id<JiNotationBound>,
        decimal: 1.0333784852366537 as Decimal, // 56.842503028856500¢
        name: "404.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 123 as Id<JiNotationBound>,
        decimal: 1.0336301558060756 as Decimal, // 57.264079071097700¢
        name: "407.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 124 as Id<JiNotationBound>,
        decimal: 1.0339658119113595 as Decimal, // 57.826180460752700¢
        name: "411.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 125 as Id<JiNotationBound>,
        decimal: 1.0342176255192141 as Decimal, // 58.247756502993900¢
        name: "414.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 126 as Id<JiNotationBound>,
        decimal: 1.0344217752401141 as Decimal, // 58.589460280797900¢
        name: ".(|) ,|\\)" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 127 as Id<JiNotationBound>,
        decimal: 1.0345534723965983 as Decimal, // 58.809857892648800¢
        name: "418.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 128 as Id<JiNotationBound>,
        decimal: 1.0348054291241822 as Decimal, // 59.231433934890000¢
        name: "421.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 129 as Id<JiNotationBound>,
        decimal: 1.0351414668820933 as Decimal, // 59.793535324545000¢
        name: "425.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 130 as Id<JiNotationBound>,
        decimal: 1.0353935668107492 as Decimal, // 60.215111366786200¢
        name: "428.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 131 as Id<JiNotationBound>,
        decimal: 1.0357297955576752 as Decimal, // 60.777212756441100¢
        name: "432.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 132 as Id<JiNotationBound>,
        decimal: 1.0359820387687924 as Decimal, // 61.198788798682300¢
        name: "435.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 133 as Id<JiNotationBound>,
        decimal: 1.036318458613283 as Decimal,  // 61.760890188337300¢
        name: "439.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 134 as Id<JiNotationBound>,
        decimal: 1.036570845188297 as Decimal,  // 62.182466230578500¢
        name: "442.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 135 as Id<JiNotationBound>,
        decimal: 1.0367403041299996 as Decimal, // 62.465465808856200¢
        name: "'(|) ,.(|\\" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 136 as Id<JiNotationBound>,
        decimal: 1.0369074562389635 as Decimal, // 62.744567620233400¢
        name: "446.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 137 as Id<JiNotationBound>,
        decimal: 1.037159986259356 as Decimal,  // 63.166143662474700¢
        name: "449.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 138 as Id<JiNotationBound>,
        decimal: 1.0374967886248718 as Decimal, // 63.728245052129600¢
        name: "453.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 139 as Id<JiNotationBound>,
        decimal: 1.0377494621721703 as Decimal, // 64.149821094370800¢
        name: "456.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 140 as Id<JiNotationBound>,
        decimal: 1.0380864559612704 as Decimal, // 64.711922484025800¢
        name: "460.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 141 as Id<JiNotationBound>,
        decimal: 1.0383392731170498 as Decimal, // 65.133498526267000¢
        name: "463.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 142 as Id<JiNotationBound>,
        decimal: 1.0385921518443042 as Decimal, // 65.555074568508200¢
        name: "466.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 143 as Id<JiNotationBound>,
        decimal: 1.0389294192844114 as Decimal, // 66.117175958163100¢
        name: "470.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 144 as Id<JiNotationBound>,
        decimal: 1.0391824417367619 as Decimal, // 66.538752000404300¢
        name: "473.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 145 as Id<JiNotationBound>,
        decimal: 1.039519900864781 as Decimal,  // 67.100853390059300¢
        name: "477.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 146 as Id<JiNotationBound>,
        decimal: 1.0397730671239145 as Decimal, // 67.522429432300500¢
        name: "480.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 147 as Id<JiNotationBound>,
        decimal: 1.0401107180487927 as Decimal, // 68.084530821955400¢
        name: "484.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
    {
        id: 148 as Id<JiNotationBound>,
        decimal: 1.0404039320488956 as Decimal, // 68.572508221180400¢
        name: "L|SS" as Name<SizeCategoryBound>,
        boundType: BoundType.SIZE_CATEGORY_BOUND,
        jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
    },
]

export {
    JI_NOTATION_BOUNDS,
}
