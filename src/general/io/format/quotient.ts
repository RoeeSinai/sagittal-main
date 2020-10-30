import {computeSuperQuotient, Quotient} from "../../math"
import {ioSettings} from "../globals"
import {TableFormat} from "../table"
import {Formatted} from "./types"

const formatQuotient = <T extends Quotient>(
    inputQuotient: T,
    {directed = true, noLaTeXScaler = false}: {directed?: boolean, noLaTeXScaler?: boolean} = {},
): Formatted<T> => {
    const [numerator, denominator] = directed ? inputQuotient : computeSuperQuotient(inputQuotient)

    return directed ?
        ioSettings.tableFormat === TableFormat.FORUM && !noLaTeXScaler ?
            denominator === 1 ?
                `[/pre][latex]${numerator}[/latex][pre]` as Formatted<T> :
                `[/pre][latex]\\frac{${numerator}}{${denominator}}[/latex][pre]` as Formatted<T> :
            denominator === 1 ?
                `${numerator}` as Formatted<T> :
                `${numerator}/${denominator}` as Formatted<T> :
        `${denominator}:${numerator}` as Formatted<T>
}

export {
    formatQuotient,
}

/*
5/4 valid directed quotient (super)                 4/5 valid directed quotient (sub)
[5, 4] as Quotient<{ direction: Direction.SUPER}>   [4, 5] as Quotient<{ direction: Direction.SUB }>

5:4 does not exist                                  4:5 valid undirected quotient
                                                    [5, 4] as Quotient
 */
