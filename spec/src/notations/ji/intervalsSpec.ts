import { ACCURACY_THRESHOLD } from "../../../../src/utilities/constants"
import { HIGHINA, INA_SIZES, MEDINA, MINA, TINA, ULTRINA } from "../../../../src/notations/ji/intervals"
import { Level } from "../../../../src/notations/ji/types"

describe("INA_SIZES", () => {
    it("has the levels' step sizes equal to the correct ina", () => {
        expect(INA_SIZES[ Level.INSANE ]).toBeCloseTo(TINA, ACCURACY_THRESHOLD)
        expect(INA_SIZES[ Level.EXTREME ]).toBeCloseTo(MINA, ACCURACY_THRESHOLD)
        expect(INA_SIZES[ Level.ULTRA ]).toBeCloseTo(ULTRINA, ACCURACY_THRESHOLD)
        expect(INA_SIZES[ Level.HIGH ]).toBeCloseTo(HIGHINA, ACCURACY_THRESHOLD)
        expect(INA_SIZES[ Level.MEDIUM ]).toBeCloseTo(MEDINA, ACCURACY_THRESHOLD)
    })
})
