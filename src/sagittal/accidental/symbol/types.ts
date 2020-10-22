/******************/
/* Element domain */
/******************/

enum Aim {
    UP = "up",
    DOWN = "down",
}

enum Element {
    SHAFT = "shaft",
    LEFT_BARB = "leftBarb",
    RIGHT_BARB = "rightBarb",
    LEFT_SCROLL = "leftScroll",
    RIGHT_SCROLL = "rightScroll",
    LEFT_ARC = "leftArc",
    RIGHT_ARC = "rightArc",
    LEFT_BOATHOOK = "leftBoathook",
    RIGHT_BOATHOOK = "rightBoathook",
    TICK = "tick",
    WING = "wing",
    BIRD = "bird",
}

/****************/
/* Glyph domain */
/****************/

// Todo: ELEMENT, GLYPH, FLACCO
//  Consider renaming to CoreGlyph and AccentGlyph so it looks more like CORE_GLYPHS[CoreGlyph.MY_GLYPH] etc.
//  And consider how else that might work.
//  Like, it's kind of weird how Elements are simple enough to be the simple enum, while Glyphs are not. 
enum CoreName {
    RIGHT_SCROLL_UP = "rightScrollUp",
    RIGHT_SCROLL_DOWN = "rightScrollDown",
    LEFT_BARB_UP = "leftBarbUp",
    LEFT_BARB_DOWN = "leftBarbDown",
    RIGHT_ARC_UP = "rightArcUp",
    RIGHT_ARC_DOWN = "rightArcDown",
    DOUBLE_LEFT_BARB_UP = "doubleLeftBarbUp",
    DOUBLE_LEFT_BARB_DOWN = "doubleLeftBarbDown",
    BARB_AND_ARC_UP = "barbAndArcUp",
    BARB_AND_ARC_DOWN = "barbAndArcDown",
    DOUBLE_BARB_UP = "doubleBarbUp",
    DOUBLE_BARB_DOWN = "doubleBarbDown",
    DOUBLE_ARC_UP = "doubleArcUp",
    DOUBLE_ARC_DOWN = "doubleArcDown",
    ARC_AND_BARB_UP = "arcAndBarbUp",
    ARC_AND_BARB_DOWN = "arcAndBarbDown",
    DOUBLE_SCROLL_DOUBLE_UP = "doubleScrollDoubleUp",
    DOUBLE_SCROLL_DOUBLE_DOWN = "doubleScrollDoubleDown",
    RIGHT_ARC_DOUBLE_UP = "rightArcDoubleUp",
    RIGHT_ARC_DOUBLE_DOWN = "rightArcDoubleDown",
    RIGHT_BARB_DOUBLE_UP = "rightBarbDoubleUp",
    RIGHT_BARB_DOUBLE_DOWN = "rightBarbDoubleDown",
    BARB_AND_ARC_DOUBLE_UP = "barbAndArcDoubleUp",
    BARB_AND_ARC_DOUBLE_DOWN = "barbAndArcDoubleDown",
    DOUBLE_BARB_DOUBLE_UP = "doubleBarbDoubleUp",
    DOUBLE_BARB_DOUBLE_DOWN = "doubleBarbDoubleDown",
    RIGHT_SCROLL_TRIPLE_UP = "rightScrollTripleUp",
    RIGHT_SCROLL_TRIPLE_DOWN = "rightScrollTripleDown",
    LEFT_BARB_TRIPLE_UP = "leftBarbTripleUp",
    LEFT_BARB_TRIPLE_DOWN = "leftBarbTripleDown",
    RIGHT_ARC_TRIPLE_UP = "rightArcTripleUp",
    RIGHT_ARC_TRIPLE_DOWN = "rightArcTripleDown",
    DOUBLE_LEFT_BARB_TRIPLE_UP = "doubleLeftBarbTripleUp",
    DOUBLE_LEFT_BARB_TRIPLE_DOWN = "doubleLeftBarbTripleDown",
    BARB_AND_ARC_TRIPLE_UP = "barbAndArcTripleUp",
    BARB_AND_ARC_TRIPLE_DOWN = "barbAndArcTripleDown",
    DOUBLE_BARB_TRIPLE_UP = "doubleBarbTripleUp",
    DOUBLE_BARB_TRIPLE_DOWN = "doubleBarbTripleDown",
    DOUBLE_ARC_TRIPLE_UP = "doubleArcTripleUp",
    DOUBLE_ARC_TRIPLE_DOWN = "doubleArcTripleDown",
    ARC_AND_BARB_TRIPLE_UP = "arcAndBarbTripleUp",
    ARC_AND_BARB_TRIPLE_DOWN = "arcAndBarbTripleDown",
    DOUBLE_SCROLL_EX_UP = "doubleScrollExUp",
    DOUBLE_SCROLL_EX_DOWN = "doubleScrollExDown",
    RIGHT_ARC_EX_UP = "rightArcExUp",
    RIGHT_ARC_EX_DOWN = "rightArcExDown",
    RIGHT_BARB_EX_UP = "rightBarbExUp",
    RIGHT_BARB_EX_DOWN = "rightBarbExDown",
    BARB_AND_ARC_EX_UP = "barbAndArcExUp",
    BARB_AND_ARC_EX_DOWN = "barbAndArcExDown",
    DOUBLE_BARB_EX_UP = "doubleBarbExUp",
    DOUBLE_BARB_EX_DOWN = "doubleBarbExDown",
    DOUBLE_SCROLL_UP = "doubleScrollUp",
    DOUBLE_SCROLL_DOWN = "doubleScrollDown",
    BOATHOOK_AND_SCROLL_UP = "boathookAndScrollUp",
    BOATHOOK_AND_SCROLL_DOWN = "boathookAndScrollDown",
    RIGHT_BARB_UP = "rightBarbUp",
    RIGHT_BARB_DOWN = "rightBarbDown",
    LEFT_ARC_UP = "leftArcUp",
    LEFT_ARC_DOWN = "leftArcDown",
    ARC_AND_SCROLL_UP = "arcAndScrollUp",
    ARC_AND_SCROLL_DOWN = "arcAndScrollDown",
    BOATHOOK_AND_SCROLL_DOUBLE_UP = "boathookAndScrollDoubleUp",
    BOATHOOK_AND_SCROLL_DOUBLE_DOWN = "boathookAndScrollDoubleDown",
    SCROLL_AND_BOATHOOK_DOUBLE_UP = "scrollAndBoathookDoubleUp",
    SCROLL_AND_BOATHOOK_DOUBLE_DOWN = "scrollAndBoathookDoubleDown",
    LEFT_BARB_DOUBLE_UP = "leftBarbDoubleUp",
    LEFT_BARB_DOUBLE_DOWN = "leftBarbDoubleDown",
    ARC_AND_SCROLL_DOUBLE_UP = "arcAndScrollDoubleUp",
    ARC_AND_SCROLL_DOUBLE_DOWN = "arcAndScrollDoubleDown",
    DOUBLE_LEFT_BARB_DOUBLE_UP = "doubleLeftBarbDoubleUp",
    DOUBLE_LEFT_BARB_DOUBLE_DOWN = "doubleLeftBarbDoubleDown",
    DOUBLE_SCROLL_TRIPLE_UP = "doubleScrollTripleUp",
    DOUBLE_SCROLL_TRIPLE_DOWN = "doubleScrollTripleDown",
    BOATHOOK_AND_SCROLL_TRIPLE_UP = "boathookAndScrollTripleUp",
    BOATHOOK_AND_SCROLL_TRIPLE_DOWN = "boathookAndScrollTripleDown",
    RIGHT_BARB_TRIPLE_UP = "rightBarbTripleUp",
    RIGHT_BARB_TRIPLE_DOWN = "rightBarbTripleDown",
    LEFT_ARC_TRIPLE_UP = "leftArcTripleUp",
    LEFT_ARC_TRIPLE_DOWN = "leftArcTripleDown",
    ARC_AND_SCROLL_TRIPLE_UP = "arcAndScrollTripleUp",
    ARC_AND_SCROLL_TRIPLE_DOWN = "arcAndScrollTripleDown",
    BOATHOOK_AND_SCROLL_EX_UP = "boathookAndScrollExUp",
    BOATHOOK_AND_SCROLL_EX_DOWN = "boathookAndScrollExDown",
    SCROLL_AND_BOATHOOK_EX_UP = "scrollAndBoathookExUp",
    SCROLL_AND_BOATHOOK_EX_DOWN = "scrollAndBoathookExDown",
    LEFT_BARB_EX_UP = "leftBarbExUp",
    LEFT_BARB_EX_DOWN = "leftBarbExDown",
    ARC_AND_SCROLL_EX_UP = "arcAndScrollExUp",
    ARC_AND_SCROLL_EX_DOWN = "arcAndScrollExDown",
    DOUBLE_LEFT_BARB_EX_UP = "doubleLeftBarbExUp",
    DOUBLE_LEFT_BARB_EX_DOWN = "doubleLeftBarbExDown",
    RIGHT_BOATHOOK_UP = "rightBoathookUp",
    RIGHT_BOATHOOK_DOWN = "rightBoathookDown",
    LEFT_SCROLL_AND_BARB_UP = "leftScrollAndBarbUp",
    LEFT_SCROLL_AND_BARB_DOWN = "leftScrollAndBarbDown",
    BARB_AND_BOATHOOK_UP = "barbAndBoathookUp",
    BARB_AND_BOATHOOK_DOWN = "barbAndBoathookDown",
    RIGHT_BOATHOOK_DOUBLE_UP = "rightBoathookDoubleUp",
    RIGHT_BOATHOOK_DOUBLE_DOWN = "rightBoathookDoubleDown",
    SCROLL_AND_ARC_DOUBLE_UP = "scrollAndArcDoubleUp",
    SCROLL_AND_ARC_DOUBLE_DOWN = "scrollAndArcDoubleDown",
    BARB_AND_BOATHOOK_DOUBLE_UP = "barbAndBoathookDoubleUp",
    BARB_AND_BOATHOOK_DOUBLE_DOWN = "barbAndBoathookDoubleDown",
    RIGHT_BOATHOOK_TRIPLE_UP = "rightBoathookTripleUp",
    RIGHT_BOATHOOK_TRIPLE_DOWN = "rightBoathookTripleDown",
    LEFT_SCROLL_AND_BARB_TRIPLE_UP = "leftScrollAndBarbTripleUp",
    LEFT_SCROLL_AND_BARB_TRIPLE_DOWN = "leftScrollAndBarbTripleDown",
    BARB_AND_BOATHOOK_TRIPLE_UP = "barbAndBoathookTripleUp",
    BARB_AND_BOATHOOK_TRIPLE_DOWN = "barbAndBoathookTripleDown",
    RIGHT_BOATHOOK_EX_UP = "rightBoathookExUp",
    RIGHT_BOATHOOK_EX_DOWN = "rightBoathookExDown",
    SCROLL_AND_ARC_EX_UP = "scrollAndArcExUp",
    SCROLL_AND_ARC_EX_DOWN = "scrollAndArcExDown",
    BARB_AND_BOATHOOK_EX_UP = "barbAndBoathookExUp",
    BARB_AND_BOATHOOK_EX_DOWN = "barbAndBoathookExDown",
    LEFT_SCROLL_UP = "leftScrollUp",
    LEFT_SCROLL_DOWN = "leftScrollDown",
    LEFT_BOATHOOK_UP = "leftBoathookUp",
    LEFT_BOATHOOK_DOWN = "leftBoathookDown",
    LEFT_SCROLL_AND_BOATHOOK_UP = "leftScrollAndBoathookUp",
    LEFT_SCROLL_AND_BOATHOOK_DOWN = "leftScrollAndBoathookDown",
    DOUBLE_LEFT_BOATHOOK_UP = "doubleLeftBoathookUp",
    DOUBLE_LEFT_BOATHOOK_DOWN = "doubleLeftBoathookDown",
    SCROLL_AND_BOATHOOK_UP = "scrollAndBoathookUp",
    SCROLL_AND_BOATHOOK_DOWN = "scrollAndBoathookDown",
    SCROLL_AND_ARC_UP = "scrollAndArcUp",
    SCROLL_AND_ARC_DOWN = "scrollAndArcDown",
    BOATHOOK_AND_ARC_UP = "boathookAndArcUp",
    BOATHOOK_AND_ARC_DOWN = "boathookAndArcDown",
    BOATHOOK_AND_BARB_UP = "boathookAndBarbUp",
    BOATHOOK_AND_BARB_DOWN = "boathookAndBarbDown",
    LEFT_SCROLL_DOUBLE_LEFT_BARB_UP = "leftScrollAndDoubleLeftBarbUp",
    LEFT_SCROLL_DOUBLE_LEFT_BARB_DOWN = "leftScrollAndDoubleLeftBarbDown",
    ARC_AND_BOATHOOK_UP = "arcAndBoathookUp",
    ARC_AND_BOATHOOK_DOWN = "arcAndBoathookDown",
    LEFT_ARC_AND_BARB_UP = "leftArcAndBarbUp",
    LEFT_ARC_AND_BARB_DOWN = "leftArcAndBarbDown",
    LEFT_SCROLL_AND_DOUBLE_BARB_UP = "leftScrollAndDoubleBarbUp",
    LEFT_SCROLL_AND_DOUBLE_BARB_DOWN = "leftScrollAndDoubleBarbDown",
    RIGHT_BARB_AND_ARC_UP = "rightBarbAndArcUp",
    RIGHT_BARB_AND_ARC_DOWN = "rightBarbAndArcDown",
    DOUBLE_RIGHT_BARB_UP = "doubleRightBarbUp",
    DOUBLE_RIGHT_BARB_DOWN = "doubleRightBarbDown",
    LEFT_SCROLL_DOUBLE_RIGHT_BARB_UP = "leftScrollDoubleRightBarbUp",
    LEFT_SCROLL_DOUBLE_RIGHT_BARB_DOWN = "leftScrollDoubleRightBarbDown",
    LEFT_SCROLL_AND_BOATHOOK_DOUBLE_UP = "leftScrollAndBoathookDoubleUp",
    LEFT_SCROLL_AND_BOATHOOK_DOUBLE_DOWN = "leftScrollAndBoathookDoubleDown",
    DOUBLE_LEFT_BOATHOOK_DOUBLE_UP = "doubleLeftBoathookDoubleUp",
    DOUBLE_LEFT_BOATHOOK_DOUBLE_DOWN = "doubleLeftBoathookDoubleDown",
    LEFT_SCROLL_AND_BARB_DOUBLE_UP = "leftScrollAndBarbDoubleUp",
    LEFT_SCROLL_AND_BARB_DOUBLE_DOWN = "leftScrollAndBarbDoubleDown",
    LEFT_ARC_DOUBLE_UP = "leftArcDoubleUp",
    LEFT_ARC_DOUBLE_DOWN = "leftArcDoubleDown",
    BOATHOOK_AND_ARC_DOUBLE_UP = "boathookAndArcDoubleUp",
    BOATHOOK_AND_ARC_DOUBLE_DOWN = "boathookAndArcDoubleDown",
    BOATHOOK_AND_BARB_DOUBLE_UP = "boathookAndBarbDoubleUp",
    BOATHOOK_AND_BARB_DOUBLE_DOWN = "boathookAndBarbDoubleDown",
    LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_UP = "leftScrollDoubleLeftBarbDoubleUp",
    LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_DOWN = "leftScrollDoubleLeftBarbDoubleDown",
    ARC_AND_BOATHOOK_DOUBLE_UP = "arcAndBoathookDoubleUp",
    ARC_AND_BOATHOOK_DOUBLE_DOWN = "arcAndBoathookDoubleDown",
    LEFT_SCROLL_TRIPLE_UP = "leftScrollTripleUp",
    LEFT_SCROLL_TRIPLE_DOWN = "leftScrollTripleDown",
    LEFT_BOATHOOK_TRIPLE_UP = "leftBoathookTripleUp",
    LEFT_BOATHOOK_TRIPLE_DOWN = "leftBoathookTripleDown",
    LEFT_SCROLL_AND_BOATHOOK_TRIPLE_UP = "leftScrollAndBoathookTripleUp",
    LEFT_SCROLL_AND_BOATHOOK_TRIPLE_DOWN = "leftScrollAndBoathookTripleDown",
    DOUBLE_LEFT_BOATHOOK_TRIPLE_UP = "doubleLeftBoathookTripleUp",
    DOUBLE_LEFT_BOATHOOK_TRIPLE_DOWN = "doubleLeftBoathookTripleDown",
    SCROLL_AND_BOATHOOK_TRIPLE_UP = "scrollAndBoathookTripleUp",
    SCROLL_AND_BOATHOOK_TRIPLE_DOWN = "scrollAndBoathookTripleDown",
    SCROLL_AND_ARC_TRIPLE_UP = "scrollAndArcTripleUp",
    SCROLL_AND_ARC_TRIPLE_DOWN = "scrollAndArcTripleDown",
    BOATHOOK_AND_ARC_TRIPLE_UP = "boathookAndArcTripleUp",
    BOATHOOK_AND_ARC_TRIPLE_DOWN = "boathookAndArcTripleDown",
    BOATHOOK_AND_BARB_TRIPLE_UP = "boathookAndBarbTripleUp",
    BOATHOOK_AND_BARB_TRIPLE_DOWN = "boathookAndBarbTripleDown",
    LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_UP = "leftScrollDoubleLeftBarbTripleUp",
    LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_DOWN = "leftScrollDoubleLeftBarbTripleDown",
    ARC_AND_BOATHOOK_TRIPLE_UP = "arcAndBoathookTripleUp",
    ARC_AND_BOATHOOK_TRIPLE_DOWN = "arcAndBoathookTripleDown",
    LEFT_ARC_AND_BARB_TRIPLE_UP = "leftArcAndBarbTripleUp",
    LEFT_ARC_AND_BARB_TRIPLE_DOWN = "leftArcAndBarbTripleDown",
    LEFT_SCROLL_DOUBLE_BARB_TRIPLE_UP = "leftScrollDoubleBarbTripleUp",
    LEFT_SCROLL_DOUBLE_BARB_TRIPLE_DOWN = "leftScrollDoubleBarbTripleDown",
    RIGHT_BARB_AND_ARC_TRIPLE_UP = "rightBarbAndArcTripleUp",
    RIGHT_BARB_AND_ARC_TRIPLE_DOWN = "rightBarbAndArcTripleDown",
    DOUBLE_RIGHT_BARB_TRIPLE_UP = "doubleRightBarbTripleUp",
    DOUBLE_RIGHT_BARB_TRIPLE_DOWN = "doubleRightBarbTripleDown",
    LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_UP = "leftScrollDoubleRightBarbTripleUp",
    LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_DOWN = "leftScrollDoubleRightBarbTripleDown",
    LEFT_SCROLL_AND_BOATHOOK_EX_UP = "leftScrollAndBoathookExUp",
    LEFT_SCROLL_AND_BOATHOOK_EX_DOWN = "leftScrollAndBoathookExDown",
    DOUBLE_LEFT_BOATHOOK_EX_UP = "doubleLeftBoathookExUp",
    DOUBLE_LEFT_BOATHOOK_EX_DOWN = "doubleLeftBoathookExDown",
    LEFT_SCROLL_AND_BARB_EX_UP = "leftScrollAndBarbExUp",
    LEFT_SCROLL_AND_BARB_EX_DOWN = "leftScrollAndBarbExDown",
    LEFT_ARC_EX_UP = "leftArcExUp",
    LEFT_ARC_EX_DOWN = "leftArcExDown",
    BOATHOOK_AND_ARC_EX_UP = "boathookAndArcExUp",
    BOATHOOK_AND_ARC_EX_DOWN = "boathookAndArcExDown",
    BOATHOOK_AND_BARB_EX_UP = "boathookAndBarbExUp",
    BOATHOOK_AND_BARB_EX_DOWN = "boathookAndBarbExDown",
    LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_UP = "leftScrollDoubleLeftBarbExUp",
    LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_DOWN = "leftScrollDoubleLeftBarbExDown",
    ARC_AND_BOATHOOK_EX_UP = "arcAndBoathookExUp",
    ARC_AND_BOATHOOK_EX_DOWN = "arcAndBoathookExDown",
    BARE_SHAFT_UP = "bareShaftUp",
    BARE_SHAFT_DOWN = "bareShaftDown",
}

enum AccentName {
    TICK_UP = "tickUp",
    TICK_DOWN = "tickDown",
    WING_UP = "wingUp",
    WING_DOWN = "wingDown",
    BIRD_UP = "birdUp",
    BIRD_DOWN = "birdDown",
}

enum GlyphType {
    ACCENT = "accent",
    CORE = "core",
}

type Glyph<T extends GlyphType = GlyphType> = {
    aim: Aim,
    elements: Element[]
} & {_GlyphType: T}

/*****************/
/* Symbol domain */
/*****************/

interface Symbol {
    accents?: Array<Glyph<GlyphType.ACCENT>>,
    core?: Glyph<GlyphType.CORE>,
}

export {
    Glyph,
    Aim,
    Element,
    CoreName,
    GlyphType,
    AccentName,
    Symbol,
}
