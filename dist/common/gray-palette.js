import { Color, registerPalette } from "./colors.js";
import { NightCoderPalette } from "./main-palette.js";
class NightCoderGrayPalette extends NightCoderPalette {
    constructor() {
        super();
        this.contrastBackground = new Color("#262626");
        this.defaultLibraryFunctionColor = new Color("#80caff", "Default library function");
        this.functionCallColor = new Color("#e6d299", "Function call");
        this.constantColor = new Color("#ff9e9e", "Constant");
        this.miscellaneousColor = new Color("#d1b485", "Miscellaneous");
        this.annotationColor = new Color("#d1b485", "Annotation");
        this.typeColor = new Color("#04ccd7", "Type");
        this.operatorColor = new Color("#e0e0b8", "Operator");
        this.comparisonLogicalOperatorColor = new Color("#b8e0c8", "Comparison/Logical operator");
        this.functionDeclarationColor = new Color("#42d79e", "Function declaration");
        this.literalConstantColor = new Color("#c5abf7", "Literal constant");
        this.defaultLibraryClassTypeColor = new Color("#fc9cc4", "Default library class/type");
        this.namespaceClassStructColor = new Color("#9db9e7", "Namespace/Class/Struct");
        this.stringColor = new Color("#8fc78a", "String");
        this.importColor = new Color("#8fc78a", "Import/Require/Use");
        this.propertyColor = new Color("#f0a875", "Property");
        this.keywordColor = new Color("#eea0e5", "Keyword");
        this.tagColor = new Color("#f0a875", "Tag");
        this.italicColor = new Color("#b8e0c8", "Italic");
        this.headingColor = new Color("#e6d299", "Heading");
        this.linkTagColor = new Color("#42d79e", "HTML link tag");
        this.metaTagColor = new Color("#eea0e5", "HTML meta tag");
        this.styleTagColor = new Color("#9db9e7", "HTML style tag");
        this.objectTagColor = new Color("#fc9cc4", "HTML object tag");
        this.inlineTagColor = new Color("#80caff", "HTML inline tag");
        this.customTagColor = new Color("#c5abf7", "HTML custom tag");
        this.scriptTagColor = new Color("#e0dc52", "Script tag");
        this.attributeNameColor = new Color("#e6d299", "Attribute name");
        this.unrecognizedTagColor = new Color("#ff9e9e", "HTML unrecognized tag");
        this.jsonLevel01Color = new Color("#f0a875", "Level 1 JSON key");
        this.jsonLevel02Color = new Color("#eea0e5", "Level 2 JSON key");
        this.jsonLevel03Color = new Color("#04ccd7", "Level 3 JSON key");
        this.jsonLevel04Color = new Color("#e6d299", "Level 4 JSON key");
        this.jsonLevel05Color = new Color("#fc9cc4", "Level 5 JSON key");
        this.jsonLevel06Color = new Color("#80caff", "Level 6 JSON key");
        this.jsonLevel07Color = new Color("#9db9e7", "Level 7 JSON key");
        this.jsonLevel08Color = new Color("#ff9e9e", "Level 8 JSON key");
        this.jsonLevel09Color = new Color("#d1b485", "Level 9 JSON key");
        this.jsonLevel10Color = new Color("#e0dc52", "Level 10 JSON key");
        this.jsonLevel11Color = new Color("#f0a875", "Level > 10 JSON key");
        this.bracketPair1 = new Color("#e0e0b8");
        this.bracketPair2 = new Color("#eea0e5");
        this.bracketPair3 = new Color("#b8e0c8");
        this.bracketPair4 = new Color("#d1b485");
        this.bracketPair5 = new Color("#80caff");
        this.bracketPair6 = new Color("#fc9cc4");
        this.ansiBrightBlack = this.background88;
        this.ansiBrightBlue = new Color("#80caff");
        this.ansiBrightCyan = new Color("#04ccd7");
        this.ansiBrightGreen = new Color("#8fc78a");
        this.ansiBrightMagenta = new Color("#fc9cc4");
        this.ansiBrightRed = new Color("#ff9e9e");
        this.ansiBrightWhite = this.backgroundee;
        this.ansiBrightYellow = new Color("#e6d299");
        this.ansiBlack = new Color("#020203");
        this.ansiBlue = new Color("#9db9e7");
        this.ansiGreen = new Color("#42d79e");
        this.ansiMagenta = new Color("#eea0e5");
        this.ansiWhite = this.backgroundc5;
        this.ansiYellow = new Color("#e0dc52");
        this.variant = "Gray";
    }
    baseColor() {
        return "#2c2c2c";
    }
}
function grayVariant() {
    const p = new NightCoderGrayPalette();
    return p;
}
registerPalette(grayVariant());
