import chroma from "chroma-js";
import { Color } from "../colors.js";
import { NightCoderPalette } from "./ember-palette.js";
function hexAlphaToDec(alpha) {
    return parseInt(alpha, 16) / 255;
}
function mix(alpha, background) {
    return chroma.mix(background, "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}
export class NightCoderBlackPalette extends NightCoderPalette {
    constructor() {
        super();
        this.contrastBackground = new Color("#050505");
        this.functionDeclarationColor = new Color("#9cc9b8", "Function declaration");
        this.functionCallColor = new Color("#cfc4a5", "Function call");
        this.defaultLibraryClassTypeColor = new Color("#dd98a3", "Default library class/type");
        this.namespaceClassStructColor = new Color("#b6c9e7", "Namespace/Class/Struct");
        this.keywordColor = new Color("#d2accd", "Keyword");
        this.constantColor = new Color("#f18983", "Constant");
        this.importColor = new Color("#a6bc94", "Import/Require/Use");
        this.stringColor = new Color("#a6bc94", "String");
        this.propertyColor = new Color("#dbb294", "Property");
        this.literalConstantColor = new Color("#c0a8f0", "Literal constant");
        this.typeColor = new Color("#6ecacf", "Type");
        this.defaultLibraryFunctionColor = new Color("#f7d6a1", "Default library function");
        this.annotationColor = new Color("#d5bc95", "Annotation");
        this.miscellaneousColor = new Color("#d5bc95", "Miscellaneous");
        this.parameterArgumentColor = new Color(mix("d5", this.baseColor()), "Parameter, Argument");
        this.linkTagColor = new Color("#9cc9b8", "HTML link tag");
        this.attributeNameColor = new Color("#cfc4a5", "Attribute name");
        this.headingColor = new Color("#cfc4a5", "Heading");
        this.objectTagColor = new Color("#dd98a3", "HTML object tag");
        this.styleTagColor = new Color("#b6c9e7", "HTML style tag");
        this.metaTagColor = new Color("#d2accd", "HTML meta tag");
        this.unrecognizedTagColor = new Color("#f18983", "HTML unrecognized tag");
        this.tagColor = new Color("#dbb294", "Tag");
        this.customTagColor = new Color("#c0a8f0", "HTML custom tag");
        this.inlineTagColor = new Color("#f7d6a1", "HTML inline tag");
        this.jsonLevel01Color = new Color("#dbb294", "Level 1 JSON key");
        this.jsonLevel02Color = new Color("#d2accd", "Level 2 JSON key");
        this.jsonLevel03Color = new Color("#6ecacf", "Level 3 JSON key");
        this.jsonLevel04Color = new Color("#cfc4a5", "Level 4 JSON key");
        this.jsonLevel05Color = new Color("#dd98a3", "Level 5 JSON key");
        this.jsonLevel06Color = new Color("#f7d6a1", "Level 6 JSON key");
        this.jsonLevel07Color = new Color("#b6c9e7", "Level 7 JSON key");
        this.jsonLevel08Color = new Color("#f18983", "Level 8 JSON key");
        this.jsonLevel09Color = new Color("#d5bc95", "Level 9 JSON key");
        this.jsonLevel11Color = new Color("#dbb294", "Level > 10 JSON key");
        this.bracketPair2 = new Color("#d2accd");
        this.bracketPair4 = new Color("#d5bc95");
        this.bracketPair5 = new Color("#f7d6a1");
        this.bracketPair6 = new Color("#dd98a3");
        this.ansiGreen = new Color("#9cc9b8");
        this.ansiBlue = new Color("#b6c9e7");
        this.ansiMagenta = new Color("#d2accd");
        this.editorLightBulbForeground = new Color("#f18983");
        this.inlineValuesBackground = new Color("#d5bc9555");
        this.variant = "Black";
    }
    baseColor() {
        return "#000000";
    }
}
