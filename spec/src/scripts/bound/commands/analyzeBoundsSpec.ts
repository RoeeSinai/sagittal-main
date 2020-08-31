import * as fs from "fs"
import { Io } from "../../../../../src/general"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("analyze-bounds", () => {
    it("runs without error", () => {
        onlyRunInCi()

        const actual = runCommandAndGetConsoleOutput("npm run analyze-bounds" as Io)

        const expected = fs.readFileSync(
            "src/scripts/bound/results/boundsTerminal.txt",
            { encoding: "utf8" },
        ).split("\n") as Io[]
        expected.pop()
        expect(actual).toEqual(expected)
    })

    // TODO: would like to have a snapshot test equivalent for the image (above, have the terminal)
})
