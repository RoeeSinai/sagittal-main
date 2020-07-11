import { Cents } from "../../../utilities/types"

const SCALE = 100
const Y_SCALE = 1 * SCALE
const X_SCALE = 5 * SCALE

const MARGIN = 0.1 as Cents
const LEVEL_HEIGHT = 1

const TICK_SIZE = SCALE * LEVEL_HEIGHT / 2
const HALF_TICK_SIZE = TICK_SIZE / 2

const DOT_SIZE = SCALE * 0.01
const DASH_SIZE = 1

const SYMBOL_OFFSET = Y_SCALE * 0.1
const MINA_OFFSET = Y_SCALE * 0.3

export {
    SCALE,
    X_SCALE,
    Y_SCALE,
    MARGIN,
    LEVEL_HEIGHT,
    TICK_SIZE,
    DOT_SIZE,
    DASH_SIZE,
    HALF_TICK_SIZE,
    SYMBOL_OFFSET,
    MINA_OFFSET,
}
