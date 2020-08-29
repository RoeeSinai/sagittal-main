import {
    ACCURACY_THRESHOLD,
    computeDeepClone,
    computeDeepDistinct,
    computeExtensionBase,
    computeIsCloseTo,
    computePlusOrMinusRange,
    computeRange,
    computeTrimmedArray,
    concat,
    deepEquals,
    dig,
    doOnNextEventLoop,
    ExtensionBaseType,
    isNumber,
    isUndefined,
    Maybe,
    merge,
    now,
    ObjectKey,
    Range,
    rank,
    Rank,
    Ranked,
    RankStrategy,
    shuffle,
    sort,
} from "./code"
import {
    addTexts,
    ANY_MONZO_CHARS,
    Basis,
    clearLogFiles,
    Column,
    computeHeaderRowsFromColumnTitleColumns,
    computePx,
    Filename,
    FORMATATIONAL_PRECISION,
    formatMonzo,
    formatNumber,
    formatRatio,
    formatTableForForum,
    formatTableForTerminal,
    Formatted,
    formatTime,
    HexColor,
    IO,
    logSettings,
    LogTarget,
    logTargets,
    NEWLINE,
    parseCommands,
    parseMonzo,
    parseRatio,
    Px,
    removeColor,
    Row,
    saveLog,
    Scale,
    setLogTargets,
    SPACE,
    stringify,
    SUPERSCRIPT_NUMS,
    Table,
} from "./io"
import {
    abs,
    Base,
    BASE_2,
    ceil,
    Combination,
    Combinations,
    computeCombinations,
    computeCopfr,
    computeDistributions,
    computeGpf,
    computeIntegerFromMonzo,
    computeIsRough,
    computeIsSubMonzo,
    computeMonzoFromInteger,
    computeMonzoFromRatio,
    computeMonzosFromPrimeExponentExtremas,
    computePrimeCount,
    computeRatioFromMonzo,
    computeRoughNumberMonzo,
    computeSopfr,
    computeSuperMonzo,
    computeTriangularNumber,
    computeUndirectedRatio,
    Copfr,
    count,
    Denominator,
    difference,
    DistributionBin,
    dividesEvenly,
    Exponent,
    FIVE_PRIME_INDEX,
    FIVE_ROUGHNESS,
    floor,
    FractionalPart,
    FractionalPartType,
    Integer,
    integerDivide,
    invertMonzo,
    log,
    max,
    Max,
    min,
    Min,
    mod,
    Monzo,
    negative,
    Numerator,
    ONE,
    pow,
    Power,
    Prime,
    PRIMES,
    Ratio,
    round,
    Sopfr,
    sqrt,
    sum,
    THREE_PRIME_INDEX,
} from "./math"
import {
    Cents,
    CentsPosition,
    COMMA_POPULARITIES,
    computeCentsFromMonzo,
    computeCentsFromRatio,
    computeMonzoInZone,
    Pitch,
    Popularity,
    Votes,
} from "./music"
import { Count, Extrema, Id, Index, Ms, Name, Proportion, Resolution, Span, Sum, Unit } from "./types"

export {
    Cents,
    Ratio,
    Prime,
    Combination,
    Combinations,
    Proportion,
    Index,
    Count,
    Sum,
    Id,
    Span,
    Unit,
    concat,
    Resolution,
    Monzo,
    Pitch,
    invertMonzo,
    computeMonzoInZone,
    isUndefined,
    computePlusOrMinusRange,
    computeCopfr,
    clearLogFiles,
    logSettings,
    setLogTargets,
    computeSopfr,
    computeTrimmedArray,
    PRIMES,
    isNumber,
    Copfr,
    Sopfr,
    formatMonzo,
    formatRatio,
    computeIsCloseTo,
    round,
    computeTriangularNumber,
    log,
    computeMonzoFromRatio,
    computeMonzoFromInteger,
    computePrimeCount,
    computeDeepDistinct,
    computeDeepClone,
    parseMonzo,
    parseRatio,
    computeDistributions,
    CentsPosition,
    Name,
    merge,
    computeCombinations,
    deepEquals,
    formatTableForTerminal,
    Popularity,
    doOnNextEventLoop,
    shuffle,
    FractionalPartType,
    Exponent,
    FIVE_ROUGHNESS,
    formatTime,
    computeRoughNumberMonzo,
    computeCentsFromRatio,
    computeRatioFromMonzo,
    formatTableForForum,
    computeRange,
    Numerator,
    computeGpf,
    dividesEvenly,
    computeIsRough,
    rank,
    computeMonzosFromPrimeExponentExtremas,
    sort,
    dig,
    Rank,
    Ranked,
    COMMA_POPULARITIES,
    RankStrategy,
    Votes,
    formatNumber,
    Max,
    FractionalPart,
    Min,
    computeSuperMonzo,
    computeUndirectedRatio,
    computeIsSubMonzo,
    computeCentsFromMonzo,
    Extrema,
    computeExtensionBase,
    ExtensionBaseType,
    FORMATATIONAL_PRECISION,
    Integer,
    Base,
    abs,
    Power,
    max,
    min,
    negative,
    mod,
    ceil,
    floor,
    sqrt,
    pow,
    BASE_2,
    count,
    Ms,
    DistributionBin,
    difference,
    Formatted,
    Range,
    sum,
    ONE,
    Px,
    HexColor,
    Maybe,
    SUPERSCRIPT_NUMS,
    integerDivide,
    ObjectKey,
    Filename,
    IO,
    removeColor,
    NEWLINE,
    addTexts,
    // TODO: maybe eventually these (Rol and Column) shouldn't have to be exported
    //  if all the table-building logic is quarantined to the general/io module
    Row,
    Column,
    Table,
    SPACE,
    computeHeaderRowsFromColumnTitleColumns,
    THREE_PRIME_INDEX,
    FIVE_PRIME_INDEX,
    Denominator,
    computeIntegerFromMonzo,
    ACCURACY_THRESHOLD,
    LogTarget,
    logTargets,
    saveLog,
    parseCommands,
    now,
    stringify,
    ANY_MONZO_CHARS,
    Scale,
    Basis,
    computePx,
}
