import { Ratio } from "../rational"
import { Decimal, NumByDecimal } from "./decimal"
import { NumByMonzo } from "./monzo"
import { NumByQuotient } from "./quotient"

enum Direction {
    SUPER = "super",
    SUB = "sub",
    UNISON = "unison",
}

type NumTypeParameters = Partial<{
    integer: boolean,
    irrational: boolean,
    direction: Direction
    rough: number,
    smooth: number,
}>

type NumTypeParameterEffects<T> =
    (T extends { direction: Direction.SUB } ? { _DirectionBrand: Direction.SUB } : {})
    & (T extends { direction: Direction.SUPER } ? { _DirectionBrand: Direction.SUPER } : {})
    & (T extends { direction: Direction.UNISON } ? { _DirectionBrand: Direction.UNISON } : {})
    & (T extends { rough: number } ? { _RoughBrand: Pick<T, "rough"> } : {})
    & (T extends { smooth: number } ? { _SmoothBrand: Pick<T, "smooth"> } : {})
    & (T extends { rational: true } ? { _RationalBrand: boolean } : {})
    & (T extends { integer: true } ? { _IntegerBrand: boolean } : {})


// TODO: IMPLEMENT EDO PITCHES ON POTENTIALLY IRRATIONAL NUMS
//  Starting to think about non-JI pitches
//  What about logarithmic pitch vs acoustic pitch
//  That could help answer the question about what to name that "pitchvalue" thing
//  E.g. how in Erv's writings about golden horograms
//  He names the pitches with values between 0 and 1, like 0.618...
//  That is logarithmic pitch and would require a second piece of information,
//  The 2, to understand what the base was
//  But actually if you combine those two things, you're still good
//  And continued fractions
//  Like monzos, it may be a good idea to support those
//  So the continued fraction can be the exponent in this power
//  But it could also just be another option
//  - also think about how for dynamic parameters, unit: is a Step... but difference between a position and an interval
//  - could also represent numbers as continued fractions [3;1,1,1...]
//  - And ina midpoints should be eds, so it may be time to do this now, even before adding EDOS...
//  And along with that, Comma mean should be irrational Monzo (both of the above, i.e. as opposed to Decimal)
/*
Base assume 2
Power - would be a quotient... but like 3/19 for degrees of 19...

Window (is the base, 2)
Ed (19)
Step (3)

call it a Power?
Er, a Power combines a Base and an Exponent

call it a Degree

the existing Window isn’t a base, it gets divided up additively, not multiplicatively
 */

type Num<T extends NumTypeParameters = {}> = Ratio<T> | NumByDecimal<T> | NumByMonzo<T> | NumByQuotient<T>

type NumOrDecimal<T extends NumTypeParameters = {}> = Num<T> | Decimal<T>

export {
    NumTypeParameters,
    Direction,
    NumTypeParameterEffects,
    Num,
    NumOrDecimal,
}
