type Rank<T = void> = number & { _RankBrand: "Rank" } & (T extends void ? {} : { _RankOfBrand: T })

type ObjectKey = string & { _ObjectKeyBrand: "ObjectKey" }

type SortOptions = Partial<{
    by: Path,
    descending: boolean,
}>

type Path = number | string | Array<number | string>

type Sortable = { [ index: string ]: number }

type Ranked<T> = T & { rank: Rank<T> }

enum RankStrategy {
    FRACTIONAL = "fractional",
    COMPETITION = "competition",
    DENSE = "dense",
    ORDINAL = "ordinal",
}

type RankOptions = SortOptions & Partial<{
    strategy: RankStrategy
}>

enum ExtensionBaseType {
    ARRAY = "array",
    OBJECT = "object",
}

type Range<T> = Array<T> & { _RangeBrand: "Range" }

type Maybe<T> = T | undefined

export {
    SortOptions,
    Rank,
    Sortable,
    Path,
    Ranked,
    RankOptions,
    RankStrategy,
    ExtensionBaseType,
    Range,
    Maybe,
    ObjectKey,
}
