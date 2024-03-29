import { Palette, Color, registerPalette } from "./colors.js";
class IcePalette extends Palette {
    constructor() {
        super();
        this.contrastBackground = new Color("#012237");
        this.constantColor = new Color("#b3fbff", "Constant");
        this.defaultLibraryClassTypeColor = new Color("#77d8f8");
        this.defaultLibraryFunctionColor = new Color("#86f9d2");
        this.functionCallColor = new Color("#86f9d2", "Function call");
        this.functionDeclarationColor = new Color("#7ece98", "Function declaration");
        this.importColor = new Color("#b3fbff", "Import/Require/Use");
        this.keywordColor = new Color("#d1aaf8", "Keyword");
        this.literalConstantColor = new Color("#a8a8ff", "Literal constant");
        this.namespaceClassStructColor = new Color("#77d8f8", "Namespace/Class/Struct");
        this.operatorColor = new Color("#d1aaf8", "Operator");
        this.comparisonLogicalOperatorColor = new Color("#b3fbff", "Comparison/Logical operator");
        this.propertyColor = new Color("#2dd2ae", "Property");
        this.stringColor = new Color("#20dfd6", "String");
        this.typeColor = new Color("#4dc3fe", "Type");
        this.annotationColor = new Color("#a8a8ff", "Annotation");
        this.miscellaneousColor = new Color("#a8a8ff", "Miscellaneous");
        this.attributeNameColor = new Color("#86f9d2", "Attribute name");
        this.customTagColor = new Color("#a8a8ff", "HTML custom tag");
        this.headingColor = new Color("#86f9d2", "Heading");
        this.inlineTagColor = new Color("#86f9d2", "HTML inline tag");
        this.italicColor = new Color("#b3fbff", "Italic");
        this.linkTagColor = new Color("#d1aaf8", "HTML link tag");
        this.metaTagColor = new Color("#d1aaf8", "HTML meta tag");
        this.styleTagColor = new Color("#d1aaf8", "HTML style tag");
        this.scriptTagColor = new Color("#d1aaf8", "Script tag");
        this.objectTagColor = new Color("#77d8f8", "HTML object tag");
        this.tagColor = new Color("#2dd2ae", "Tag");
        this.unrecognizedTagColor = new Color("#b3fbff", "HTML unrecognized tag");
        this.jsonLevel01Color = new Color("#2dd2ae", "Level 1 JSON key");
        this.jsonLevel02Color = new Color("#d1aaf8", "Level 2 JSON key");
        this.jsonLevel03Color = new Color("#4dc3fe", "Level 3 JSON key");
        this.jsonLevel04Color = new Color("#86f9d2", "Level 4 JSON key");
        this.jsonLevel05Color = new Color("#77d8f8", "Level 5 JSON key");
        this.jsonLevel06Color = new Color("#2dd2ae", "Level 6 JSON key");
        this.jsonLevel07Color = new Color("#d1aaf8", "Level 7 JSON key");
        this.jsonLevel08Color = new Color("#4dc3fe", "Level 8 JSON key");
        this.jsonLevel09Color = new Color("#86f9d2", "Level 9 JSON key");
        this.jsonLevel10Color = new Color("#77d8f8", "Level 10 JSON key");
        this.jsonLevel11Color = new Color("#2dd2ae", "Level > 10 JSON key");
        this.ansiBrightBlack = new Color("#888b92");
        this.ansiBrightBlue = new Color("#80bfff");
        this.ansiBrightCyan = new Color("#0fa5d7");
        this.ansiBrightGreen = new Color("#89b971");
        this.ansiBrightMagenta = new Color("#f28ca6");
        this.ansiBrightRed = new Color("#ef7b6d");
        this.ansiBrightWhite = new Color("#c5c6c9");
        this.ansiBlack = new Color("#353a45");
        this.ansiBlue = new Color("#859dc3");
        this.ansiBrightYellow = new Color("#f5d780");
        this.ansiGreen = new Color("#85c3ab");
        this.ansiMagenta = new Color("#c385bc");
        this.ansiRed = new Color("#ff7575");
        this.ansiWhite = new Color("#acaeb3");
        this.ansiYellow = new Color("#d9d326");
        this.activityBarBadgeBackground = new Color("#186d75");
        this.activityBarBadgeForeground = new Color("#dee3e6");
        this.minimapSelectionHighlight = new Color("#186d7566");
        this.statusBarBackground = new Color("#186d75");
        this.statusBarForeground = new Color("#dee3e6");
        this.statusBarRemoteBackground = new Color("#752018");
        this.statusBarRemoteForeground = new Color("#dee3e6");
        this.name = "Ice";
    }
    baseColor() {
        return "#012841";
    }
}
function mainVariant() {
    const p = new IcePalette();
    return p;
}
registerPalette(mainVariant());
