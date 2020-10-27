import {BoundClassId} from "../../../../../src/sagittal/notation"
import {
    JiNotationLevel,
    JI_NOTATION_LEVELS_BOUND_CLASSES,
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
} from "../../../../../src/sagittal/notations"
import {getJiNotationBoundClass} from "../../../../../src/sagittal/notations/ji/boundClasses"

describe("JI_NOTATION_LEVELS_BOUND_CLASSES", (): void => {
    it("has the same number of bound classes per JI notation level as the comma class ids", (): void => {
        expect(JI_NOTATION_LEVELS_BOUND_CLASSES[JiNotationLevel.MEDIUM].length)
            .toBe(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[JiNotationLevel.MEDIUM].length)      // 11
        expect(JI_NOTATION_LEVELS_BOUND_CLASSES[JiNotationLevel.HIGH].length)
            .toBe(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[JiNotationLevel.HIGH].length)        // 27
        expect(JI_NOTATION_LEVELS_BOUND_CLASSES[JiNotationLevel.ULTRA].length)
            .toBe(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[JiNotationLevel.ULTRA].length)       // 47
        expect(JI_NOTATION_LEVELS_BOUND_CLASSES[JiNotationLevel.EXTREME].length)
            .toBe(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[JiNotationLevel.EXTREME].length)     // 123
    })

    it("gives the correct bound class IDs for the Medium level", (): void => {
        const actual = JI_NOTATION_LEVELS_BOUND_CLASSES[JiNotationLevel.MEDIUM]

        const expected = [
            BoundClassId.MINA_5,
            BoundClassId.MINA_16,
            BoundClassId.MINA_27,
            BoundClassId.MINA_38,
            BoundClassId.MINA_50,
            BoundClassId.MINA_61,
            BoundClassId.MINA_72,
            BoundClassId.MINA_82,
            BoundClassId.MINA_92,
            BoundClassId.MINA_105,
            BoundClassId.MINA_116,
        ].map(getJiNotationBoundClass)
        expect(actual).toEqual(expected)
    })

    it("gives the correct bound IDs for the High level", (): void => {
        const actual = JI_NOTATION_LEVELS_BOUND_CLASSES[JiNotationLevel.HIGH]

        const expected = [
            BoundClassId.MINA_2,
            BoundClassId.MINA_9,
            BoundClassId.MINA_13,
            BoundClassId.MINA_18,
            BoundClassId.MINA_22,
            BoundClassId.MINA_27,
            BoundClassId.MINA_31,
            BoundClassId.MINA_35,
            BoundClassId.MINA_38,
            BoundClassId.MINA_41,
            BoundClassId.MINA_46,
            BoundClassId.MINA_53,
            BoundClassId.MINA_58,
            BoundClassId.MINA_63,
            BoundClassId.MINA_66,
            BoundClassId.MINA_70,
            BoundClassId.MINA_76,
            BoundClassId.MINA_78,
            BoundClassId.MINA_81,
            BoundClassId.MINA_85,
            BoundClassId.MINA_92,
            BoundClassId.MINA_97,
            BoundClassId.MINA_101,
            BoundClassId.MINA_106,
            BoundClassId.MINA_110,
            BoundClassId.MINA_114,
            BoundClassId.MINA_116,
        ].map(getJiNotationBoundClass)
        expect(actual).toEqual(expected)
    })

    it("gives the correct bound IDs for the Ultra level", (): void => {
        const actual = JI_NOTATION_LEVELS_BOUND_CLASSES[JiNotationLevel.ULTRA]

        const expected = [
            BoundClassId.MINA_2,
            BoundClassId.MINA_3,
            BoundClassId.MINA_5,
            BoundClassId.MINA_9,
            BoundClassId.MINA_13,
            BoundClassId.MINA_14,
            BoundClassId.MINA_16,
            BoundClassId.MINA_18,
            BoundClassId.MINA_22,
            BoundClassId.MINA_24,
            BoundClassId.MINA_25,
            BoundClassId.MINA_27,
            BoundClassId.MINA_31,
            BoundClassId.MINA_35,
            BoundClassId.MINA_38,
            BoundClassId.MINA_40,
            BoundClassId.MINA_41,
            BoundClassId.MINA_46,
            BoundClassId.MINA_47,
            BoundClassId.MINA_49,
            BoundClassId.MINA_51,
            BoundClassId.MINA_53,
            BoundClassId.MINA_58,
            BoundClassId.MINA_61,
            BoundClassId.MINA_63,
            BoundClassId.MINA_64,
            BoundClassId.MINA_66,
            BoundClassId.MINA_70,
            BoundClassId.MINA_72,
            BoundClassId.MINA_74,
            BoundClassId.MINA_76,
            BoundClassId.MINA_77,
            BoundClassId.MINA_78,
            BoundClassId.MINA_81,
            BoundClassId.MINA_82,
            BoundClassId.MINA_85,
            BoundClassId.MINA_90,
            BoundClassId.MINA_92,
            BoundClassId.MINA_97,
            BoundClassId.MINA_101,
            BoundClassId.MINA_102,
            BoundClassId.MINA_105,
            BoundClassId.MINA_106,
            BoundClassId.MINA_110,
            BoundClassId.MINA_113,
            BoundClassId.MINA_114,
            BoundClassId.MINA_116,
        ].map(getJiNotationBoundClass)
        expect(actual).toEqual(expected)
    })

    it("gives the correct bound IDs for the Extreme level (all of them)", (): void => {
        const actual = JI_NOTATION_LEVELS_BOUND_CLASSES[JiNotationLevel.EXTREME]

        const expected = [
            BoundClassId.MINA_0,
            BoundClassId.MINA_1,
            BoundClassId.MINA_2,
            BoundClassId.MINA_3,
            BoundClassId.MINA_4,
            BoundClassId.MINA_5,
            BoundClassId.MINA_6,
            BoundClassId.MINA_7,
            BoundClassId.MINA_8,
            BoundClassId.MINA_9,
            BoundClassId.MINA_10,
            BoundClassId.MINA_11,
            BoundClassId.MINA_12,
            BoundClassId.MINA_13,
            BoundClassId.MINA_14,
            BoundClassId.MINA_15,
            BoundClassId.MINA_16,
            BoundClassId.MINA_17,
            BoundClassId.MINA_18,
            BoundClassId.MINA_19,
            BoundClassId.MINA_20,
            BoundClassId.MINA_21,
            BoundClassId.MINA_22,
            BoundClassId.MINA_23,
            BoundClassId.MINA_24,
            BoundClassId.MINA_25,
            BoundClassId.MINA_26,
            BoundClassId.MINA_27,
            BoundClassId.MINA_28,
            BoundClassId.MINA_29,
            BoundClassId.MINA_30,
            BoundClassId.MINA_31,
            BoundClassId.MINA_32,
            BoundClassId.MINA_33,
            BoundClassId.MINA_34,
            BoundClassId.MINA_35,
            BoundClassId.MINA_36,
            BoundClassId.MINA_37,
            BoundClassId.MINA_38,
            BoundClassId.MINA_39,
            BoundClassId.MINA_40,
            BoundClassId.MINA_41,
            BoundClassId.MINA_42,
            BoundClassId.MINA_43,
            BoundClassId.MINA_44,
            BoundClassId.MINA_45,
            BoundClassId.MINA_46,
            BoundClassId.MINA_47,
            BoundClassId.MINA_48,
            BoundClassId.MINA_49,
            BoundClassId.MINA_49_SPLIT,
            BoundClassId.MINA_50,
            BoundClassId.MINA_51,
            BoundClassId.MINA_51_SPLIT,
            BoundClassId.MINA_52,
            BoundClassId.MINA_53,
            BoundClassId.MINA_54,
            BoundClassId.MINA_55,
            BoundClassId.MINA_56,
            BoundClassId.MINA_57,
            BoundClassId.MINA_58,
            BoundClassId.MINA_59,
            BoundClassId.MINA_60,
            BoundClassId.MINA_61,
            BoundClassId.MINA_62,
            BoundClassId.MINA_63,
            BoundClassId.MINA_64,
            BoundClassId.MINA_65,
            BoundClassId.MINA_66,
            BoundClassId.MINA_67,
            BoundClassId.MINA_68,
            BoundClassId.MINA_69,
            BoundClassId.MINA_70,
            BoundClassId.MINA_71,
            BoundClassId.MINA_72,
            BoundClassId.MINA_72_SPLIT,
            BoundClassId.MINA_73,
            BoundClassId.MINA_74,
            BoundClassId.MINA_75,
            BoundClassId.MINA_76,
            BoundClassId.MINA_77,
            BoundClassId.MINA_78,
            BoundClassId.MINA_78_SPLIT,
            BoundClassId.MINA_79,
            BoundClassId.MINA_80,
            BoundClassId.MINA_81,
            BoundClassId.MINA_82,
            BoundClassId.MINA_83,
            BoundClassId.MINA_84,
            BoundClassId.MINA_85,
            BoundClassId.MINA_86,
            BoundClassId.MINA_87,
            BoundClassId.MINA_88,
            BoundClassId.MINA_89,
            BoundClassId.MINA_90,
            BoundClassId.MINA_91,
            BoundClassId.MINA_92,
            BoundClassId.MINA_93,
            BoundClassId.MINA_94,
            BoundClassId.MINA_95,
            BoundClassId.MINA_96,
            BoundClassId.MINA_97,
            BoundClassId.MINA_98,
            BoundClassId.MINA_99,
            BoundClassId.MINA_100,
            BoundClassId.MINA_101,
            BoundClassId.MINA_102,
            BoundClassId.MINA_103,
            BoundClassId.MINA_104,
            BoundClassId.MINA_105,
            BoundClassId.MINA_105_SPLIT,
            BoundClassId.MINA_106,
            BoundClassId.MINA_107,
            BoundClassId.MINA_108,
            BoundClassId.MINA_109,
            BoundClassId.MINA_110,
            BoundClassId.MINA_111,
            BoundClassId.MINA_112,
            BoundClassId.MINA_113,
            BoundClassId.MINA_113_SPLIT,
            BoundClassId.MINA_114,
            BoundClassId.MINA_115,
            BoundClassId.MINA_116,
        ].map(getJiNotationBoundClass)
        expect(actual).toEqual(expected)
    })
})
