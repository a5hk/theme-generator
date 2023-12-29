import chroma from "chroma-js";
import { Color } from "../colors.js";
import { NightCoderEmberPalette } from "./ember-palette.js";
function hexAlphaToDec(alpha) {
    return parseInt(alpha, 16) / 255;
}
function mix(alpha, background) {
    return chroma.mix(background, "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}
export class NightCoderCharcoalPalette extends NightCoderEmberPalette {
    constructor() {
        super();
        this.contrastBackground = new Color("#050505");
        this.annotationColor = new Color("#d5bc95", "Annotation");
        this.comparisonLogicalOperatorColor = new Color("#bef4d4", "Comparison/Logical operator");
        this.constantColor = new Color("#f18983", "Constant");
        this.defaultLibraryClassTypeColor = new Color("#8caad9", "Default library class/type");
        this.defaultLibraryFunctionColor = new Color("#f7d6a1", "Default library function");
        this.functionCallColor = new Color("#c9be9c", "Function call");
        this.functionDeclarationColor = new Color("#9cc9b8", "Function declaration");
        this.importColor = new Color("#a6bc94", "Import/Require/Use");
        this.keywordColor = new Color("#d2accd", "Keyword");
        this.literalConstantColor = new Color("#c0a8f0", "Literal constant");
        this.miscellaneousColor = new Color("#d5bc95", "Miscellaneous");
        this.namespaceClassStructColor = new Color("#b6c9e7", "Namespace/Class/Struct");
        this.operatorColor = new Color("#ffffcc", "Operator");
        this.parameterArgumentColor = new Color(mix("d5", this.baseColor()), "Parameter, Argument");
        this.propertyColor = new Color("#dbb294", "Property");
        this.stringColor = new Color("#a6bc94", "String");
        this.typeColor = new Color("#b6c9e7", "Type");
        this.attributeNameColor = new Color("#c9be9c", "Attribute name");
        this.customTagColor = new Color("#c0a8f0", "HTML custom tag");
        this.headingColor = new Color("#c9be9c", "Heading");
        this.inlineTagColor = new Color("#f7d6a1", "HTML inline tag");
        this.italicColor = new Color("#bef4d4", "Italic");
        this.linkTagColor = new Color("#9cc9b8", "HTML link tag");
        this.metaTagColor = new Color("#d2accd", "HTML meta tag");
        this.objectTagColor = new Color("#8caad9", "HTML object tag");
        this.scriptTagColor = new Color("#dbd994", "Script tag");
        this.styleTagColor = new Color("#b6c9e7", "HTML style tag");
        this.tagColor = new Color("#dbb294", "Tag");
        this.unrecognizedTagColor = new Color("#f18983", "HTML unrecognized tag");
        this.jsonLevel01Color = new Color("#dbb294", "Level 1 JSON key");
        this.jsonLevel02Color = new Color("#d2accd", "Level 2 JSON key");
        this.jsonLevel03Color = new Color("#f18983", "Level 3 JSON key");
        this.jsonLevel04Color = new Color("#8caad9", "Level 4 JSON key");
        this.jsonLevel05Color = new Color("#c9be9c", "Level 5 JSON key");
        this.jsonLevel06Color = new Color("#9cc9b8", "Level 6 JSON key");
        this.jsonLevel07Color = new Color("#dbd994", "Level 7 JSON key");
        this.jsonLevel08Color = new Color("#dbb294", "Level > 7 JSON key");
        this.jsonLevel09Color = new Color("#dbb294");
        this.jsonLevel10Color = new Color("#dbb294");
        this.jsonLevel11Color = new Color("#dbb294");
        this.bracketPair1 = new Color("#ffffcc");
        this.bracketPair2 = new Color("#d2accd");
        this.bracketPair3 = new Color("#bef4d4");
        this.bracketPair4 = new Color("#ff80ff");
        this.bracketPair5 = new Color("#f7d6a1");
        this.bracketPair6 = new Color("#8caad9");
        this.ansiBrightBlack = new Color("#b0b0b0");
        this.ansiBrightBlue = new Color("#ccccff");
        this.ansiBrightCyan = new Color("#00ffff");
        this.ansiBrightGreen = new Color("#00d100");
        this.ansiBrightMagenta = new Color("#ffccff");
        this.ansiBrightRed = new Color("#ff9999");
        this.ansiBrightWhite = new Color("#e6e6e6");
        this.ansiBrightYellow = new Color("#e5e600");
        this.ansiBlack = new Color("#969696");
        this.ansiBlue = new Color("#9999ff");
        this.ansiCyan = new Color("#00cccc");
        this.ansiGreen = new Color("#00b300");
        this.ansiMagenta = new Color("#ff80ff");
        this.ansiRed = new Color("#ff6666");
        this.ansiWhite = new Color("#cccccc");
        this.ansiYellow = new Color("#b2b300");
        this.editorLightBulbAutoFixForeground = new Color("#f2f28c");
        this.editorLightBulbForeground = new Color("#f18983");
        this.editorWarningBackground = new Color("#dbd99433");
        this.editorWarningForeground = new Color("#dbd994");
        this.inlineValuesBackground = new Color("#d5bc9555");
        this.progressBarBackground = new Color("#dbd994");
        this.variant = "Charcoal";
    }
    baseColor() {
        return "#000000";
    }
}
