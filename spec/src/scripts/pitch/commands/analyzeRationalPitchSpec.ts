import * as cp from "child_process"
import { IO } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("analyze-rational-pitch", () => {
    const expected = [
        "ratio:        \t2200/2187",
        "monzo:        \t[   3  -7   2   0   1 ⟩",
        "cents:        \t10.260",
        "limit:        \t11",
        "5-rough sopfr:\t21",
        "N2D3P9:       \t42.01",
        "apotome slope:\t-7.632",
        "",
        "   --- notating commas ---",
        "",
        "symbol  \tname  \tratio            \tmonzo                  \tcents \tapotome slope",
        "   `)|( \t275k  \t2200/2187        \t[   3  -7   2   0   1 ⟩\t10.260\t-7.632       ",
        "        \t275S  \t66825/65536      \t[ -16   5   2   0   1 ⟩\t33.720\t2.924        ",
        "        \t1/275M\t16777216/16238475\t[  24 -10  -2   0  -1 ⟩\t56.505\t-13.479      ",
        "",
    ] as IO[]

    it(
        `analyzes a rational pitch, given it in monzo form (note that it includes inverses in the notating commas list)`
        , () => {
            onlyRunInCi()

            const command = "npm run analyze-rational-pitch -- -m [3,-7,2,0,1]" as IO

            const actual = runCommandAndGetConsoleOutput(command)

            expect(actual).toEqual(expected)
        },
    )

    it("can appraise a rational pitch for you", () => {
        onlyRunInCi()

        const command = "npm run analyze-rational-pitch -- -r 2200/2187" as IO

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("throws an error if you provide neither monzo nor ratio nor name", () => {
        onlyRunInCi()

        const command = "npm run analyze-rational-pitch" as IO

        expect(
            () => cp.execSync(command, { stdio: [undefined, undefined, undefined] }),
        ).toThrowError(/Unable to determine monzo for rational pitch/)
    })

    it("can filter the notating commas", () => {
        onlyRunInCi()

        const expected = [
            "ratio:        \t2200/2187",
            "monzo:        \t[   3  -7   2   0   1 ⟩",
            "cents:        \t10.260",
            "limit:        \t11",
            "5-rough sopfr:\t21",
            "N2D3P9:       \t42.01",
            "apotome slope:\t-7.632",
            "",
            "   --- notating commas ---",
            "",
            "symbol\tname\tratio      \tmonzo                  \tcents \tapotome slope",
            "      \t275S\t66825/65536\t[ -16   5   2   0   1 ⟩\t33.720\t2.924        ",
            "",
        ] as IO[]

        const command = "npm run analyze-rational-pitch -- -m [3,-7,2,0,1] --max-cents 50 --max-apotome-slope 3" as IO

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })
})
