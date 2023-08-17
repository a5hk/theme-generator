import chroma from "chroma-js";
import { Palette, Color } from "../colors.js";
function hexAlphaToDec(alpha) {
    return parseInt(alpha, 16) / 255;
}
function mix(alpha) {
    return chroma.mix("#fcf8e8", "#000000", hexAlphaToDec(alpha), "rgb").toString();
}
function backgroundMix(alpha) {
    return chroma.mix("#fcf8e8", "#505050", hexAlphaToDec(alpha), "rgb").toString();
}
function accentBackgroundMix(alpha) {
    return chroma.mix("#0fbda8", "#000000", hexAlphaToDec(alpha), "rgb").toString();
}
export class PaperPalette extends Palette {
    constructor() {
        super();
        this.contrastBackground = new Color("#fbf5df");
        this.annotationColor = new Color("#675332", "Annotation");
        this.commentColor = new Color(mix("44"), "Comment");
        this.constantColor = new Color("#c91d1d", "Constant");
        this.comparisonLogicalOperatorColor = new Color("#0000ff", "Comparison/Logical operator");
        this.defaultLibraryClassTypeColor = new Color("#2059cb", "Default library class/type");
        this.defaultLibraryFunctionColor = new Color("#007aa3", "Default library function");
        this.documentationColor = new Color(mix("aa"), "Documentation");
        this.foregroundColor = new Color(mix("c0"), "Foreground");
        this.functionCallColor = new Color("#9e4200", "Function call");
        this.functionDeclarationColor = new Color("#007aa3", "Function declaration");
        this.importColor = new Color("#c91d1d", "Import/Require/Use");
        this.keywordColor = new Color("#c20aac", "Keyword");
        this.literalConstantColor = new Color("#a100d6", "Literal constant");
        this.miscellaneousColor = new Color("#675332", "Miscellaneous");
        this.namespaceClassStructColor = new Color("#2059cb", "Namespace/Class/Struct");
        this.operatorColor = new Color("#981aff", "Operator");
        this.parameterArgumentColor = new Color(mix("e5"), "Parameter, Argument");
        this.propertyColor = new Color("#956a04", "Property");
        this.stringColor = new Color("#3b7203", "String");
        this.typeColor = new Color("#2059cb", "Type");
        this.variableColor = new Color(mix("c0"), "Variable");
        this.attributeNameColor = new Color("#9e4200", "Attribute name");
        this.customTagColor = new Color("#a100d6", "HTML custom tag");
        this.headingColor = new Color("#9e4200", "Heading");
        this.inlineTagColor = new Color("#007aa3", "HTML inline tag");
        this.italicColor = new Color("#0000ff", "Italic");
        this.linkTagColor = new Color("#c20aac", "HTML link tag");
        this.metaTagColor = new Color("#c20aac", "HTML meta tag");
        this.objectTagColor = new Color("#2059cb", "HTML object tag");
        this.scriptTagColor = new Color("#c20aac", "Script tag");
        this.styleTagColor = new Color("#c20aac", "HTML style tag");
        this.tagColor = new Color("#956a04", "Tag");
        this.tagPunctuationColor = new Color(mix("77"), "Tag punctuation");
        this.unrecognizedTagColor = new Color("#c91d1d", "HTML unrecognized tag");
        this.jsonLevel01Color = new Color("#c20aac", "Level 1 JSON key");
        this.jsonLevel02Color = new Color("#2059cb", "Level 2 JSON key");
        this.jsonLevel03Color = new Color("#c91d1d", "Level 3 JSON key");
        this.jsonLevel04Color = new Color("#007aa3", "Level 4 JSON key");
        this.jsonLevel05Color = new Color("#956a04", "Level 5 JSON key");
        this.jsonLevel06Color = new Color("#c20aac", "Level 6 JSON key");
        this.jsonLevel07Color = new Color("#2059cb", "Level 7 JSON key");
        this.jsonLevel08Color = new Color("#c91d1d", "Level 8 JSON key");
        this.jsonLevel09Color = new Color("#007aa3", "Level 9 JSON key");
        this.jsonLevel10Color = new Color("#956a04", "Level 10 JSON key");
        this.jsonLevel11Color = new Color("#c20aac", "Level > 10 JSON key");
        this.background = new Color(backgroundMix("0"));
        this.background11 = new Color(backgroundMix("11"));
        this.background1a = new Color(backgroundMix("1a"));
        this.background22 = new Color(backgroundMix("22"));
        this.background25 = new Color(backgroundMix("25"));
        this.background33 = new Color(backgroundMix("33"));
        this.background44 = new Color(backgroundMix("44"));
        this.background55 = new Color(backgroundMix("55"));
        this.background66 = new Color(backgroundMix("66"));
        this.background77 = new Color(backgroundMix("77"));
        this.background88 = new Color(backgroundMix("88"));
        this.background99 = new Color(backgroundMix("99"));
        this.backgroundaa = new Color(backgroundMix("aa"));
        this.backgroundbb = new Color(backgroundMix("bb"));
        this.backgroundc5 = new Color(backgroundMix("c5"));
        this.backgroundcc = new Color(backgroundMix("cc"));
        this.backgrounddd = new Color(backgroundMix("dd"));
        this.backgrounde5 = new Color(backgroundMix("e5"));
        this.backgroundee = new Color(backgroundMix("ee"));
        this.activeIndentGuideBackground = new Color("#6547b8");
        this.activityBarBadgeBackground = new Color(accentBackgroundMix("22"));
        this.activityBarBadgeForeground = new Color(accentBackgroundMix("c5"));
        this.buttonBackground = new Color("#f04257");
        this.buttonForeground = new Color(chroma.mix("#f04257", "#ffffff", hexAlphaToDec("d5"), "rgb").toString());
        this.disabledForeground = new Color(mix("77"));
        this.editorInfoForeground = new Color("#02cad4");
        this.editorWarningBackground = new Color("#d9d32633");
        this.editorWarningForeground = new Color("#d9d326");
        this.gitDecorationAddedResourceForeground = new Color("#007aa3");
        this.gitDecorationDeletedResourceForeground = new Color("#c91d1d");
        this.gitDecorationModifiedResourceForeground = new Color("#956a04");
        this.gitDecorationUntrackedResourceForeground = new Color("#3b7203");
        this.listFocusBackground = new Color("#fffffff0");
        this.menuForeground = new Color(mix("c5"));
        this.minimapSelectionHighlight = new Color(`${accentBackgroundMix("22")}66`);
        this.progressBarBackground = new Color("#6547b8");
        this.statusBarBackground = new Color(accentBackgroundMix("0"));
        this.statusBarDebuggingBackground = new Color("#9b2c2c");
        this.statusBarDebuggingBorder = new Color("#770000");
        this.statusBarDebuggingForeground = new Color("#fdf7f7");
        this.statusBarForeground = new Color(accentBackgroundMix("ee"));
        this.statusBarNoFolderBackground = new Color("#6547b8");
        this.statusBarNoFolderForeground = new Color("#ede9f6");
        this.statusBarRemoteBackground = new Color("#f04257");
        this.statusBarRemoteForeground = new Color(chroma.mix("#f04257", "#ffffff", hexAlphaToDec("d5"), "rgb").toString());
        this.textLinkForeground = new Color("#6547b8");
        this.buttonHoverBackground = new Color(chroma.mix("#f04257", "#000000", hexAlphaToDec("11"), "rgb").toString());
        this.bracketPair1 = new Color("#0000ff");
        this.bracketPair2 = new Color("#c20aac");
        this.bracketPair3 = new Color("#2059cb");
        this.bracketPair4 = new Color("#c91d1d");
        this.bracketPair5 = new Color("#007aa3");
        this.bracketPair6 = new Color("#956a04");
        this.ansiBrightBlack = new Color("#888b92");
        this.ansiBrightBlue = new Color("#80bfff");
        this.ansiBrightCyan = new Color("#0fa5d7");
        this.ansiBrightGreen = new Color("#89b971");
        this.ansiBrightMagenta = new Color("#f28ca6");
        this.ansiBrightRed = new Color("#ef7b6d");
        this.ansiBrightWhite = new Color(chroma.mix("#f8ecc2", "#ffffff", hexAlphaToDec("ee"), "rgb").toString());
        this.ansiBlack = new Color("#353a45");
        this.ansiBlue = new Color("#859dc3");
        this.ansiBrightYellow = new Color("#f5d780");
        this.ansiGreen = new Color("#85c3ab");
        this.ansiMagenta = new Color("#c385bc");
        this.ansiRed = new Color("#ff7575");
        this.ansiWhite = new Color("#c5c6c9");
        this.ansiYellow = new Color("#d9d326");
        this.name = "Paper";
    }
    baseColor() {
        return "#fcf8e8";
    }
}
