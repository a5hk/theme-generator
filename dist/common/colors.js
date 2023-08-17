var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Color_code;
import chroma from "chroma-js";
export class Color {
    constructor(code, description = "") {
        _Color_code.set(this, void 0);
        this.description = "";
        __classPrivateFieldSet(this, _Color_code, code, "f");
        this.description = description;
    }
    get code() {
        return __classPrivateFieldGet(this, _Color_code, "f");
    }
    set code(hex) {
        if (/^#[0-9a-f]{6}$/i.test(hex)) {
            __classPrivateFieldSet(this, _Color_code, hex, "f");
        }
    }
}
_Color_code = new WeakMap();
function hexAlphaToDec(alpha) {
    return parseInt(alpha, 16) / 255;
}
function mix(alpha, background) {
    return chroma.mix(background, "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}
export class Palette {
    constructor() {
        this.annotationColor = new Color("#c3ab85", "Annotation");
        this.commentColor = new Color(mix("44", this.baseColor()), "Comment");
        this.comparisonLogicalOperatorColor = new Color("#93ecb8", "Comparison/Logical operator");
        this.constantColor = new Color("#f1836f", "Constant");
        this.defaultLibraryClassTypeColor = new Color("#ff99b3", "Default library class/type");
        this.defaultLibraryFunctionColor = new Color("#7dbbe8", "Default library function");
        this.documentationColor = new Color(mix("aa", this.baseColor()), "Documentation");
        this.foregroundColor = new Color(mix("c0", this.baseColor()), "Foreground");
        this.functionCallColor = new Color("#ddc888", "Function call");
        this.functionDeclarationColor = new Color("#85c3ab", "Function declaration");
        this.importColor = new Color("#8dbf82", "Import/Require/Use");
        this.keywordColor = new Color("#c982c1", "Keyword");
        this.literalConstantColor = new Color("#bfa6f2", "Literal constant");
        this.miscellaneousColor = new Color("#c3ab85", "Miscellaneous");
        this.namespaceClassStructColor = new Color("#829dc9", "Namespace/Class/Struct");
        this.operatorColor = new Color("#f2f28c", "Operator");
        this.parameterArgumentColor = new Color(mix("e5", this.baseColor()), "Parameter, Argument");
        this.propertyColor = new Color("#e4aa81", "Property");
        this.stringColor = new Color("#8dbf82", "String");
        this.typeColor = new Color("#0bc2cb", "Type");
        this.variableColor = new Color(mix("c0", this.baseColor()), "Variable");
        this.attributeNameColor = new Color("#ddc888", "Attribute name");
        this.customTagColor = new Color("#bfa6f2", "HTML custom tag");
        this.headingColor = new Color("#ddc888", "Heading");
        this.inlineTagColor = new Color("#7dbbe8", "HTML inline tag");
        this.italicColor = new Color("#93ecb8", "Italic");
        this.linkTagColor = new Color("#85c3ab", "HTML link tag");
        this.metaTagColor = new Color("#c982c1", "HTML meta tag");
        this.objectTagColor = new Color("#ff99b3", "HTML object tag");
        this.scriptTagColor = new Color("#d9d326", "Script tag");
        this.styleTagColor = new Color("#829dc9", "HTML style tag");
        this.tagColor = new Color("#e4aa81", "Tag");
        this.tagPunctuationColor = new Color(mix("77", this.baseColor()), "Tag punctuation");
        this.unrecognizedTagColor = new Color("#f1836f", "HTML unrecognized tag");
        this.jsonLevel01Color = new Color("#e4aa81", "Level 1 JSON key");
        this.jsonLevel02Color = new Color("#c982c1", "Level 2 JSON key");
        this.jsonLevel03Color = new Color("#0bc2cb", "Level 3 JSON key");
        this.jsonLevel04Color = new Color("#ddc888", "Level 4 JSON key");
        this.jsonLevel05Color = new Color("#ff99b3", "Level 5 JSON key");
        this.jsonLevel06Color = new Color("#7dbbe8", "Level 6 JSON key");
        this.jsonLevel07Color = new Color("#829dc9", "Level 7 JSON key");
        this.jsonLevel08Color = new Color("#f1836f", "Level 8 JSON key");
        this.jsonLevel09Color = new Color("#c3ab85", "Level 9 JSON key");
        this.jsonLevel10Color = new Color("#d9d326", "Level 10 JSON key");
        this.jsonLevel11Color = new Color("#e4aa81", "Level > 10 JSON key");
        this.background = new Color(mix("0", this.baseColor()));
        this.background11 = new Color(mix("11", this.baseColor()));
        this.background1a = new Color(mix("1a", this.baseColor()));
        this.background22 = new Color(mix("22", this.baseColor()));
        this.background25 = new Color(mix("25", this.baseColor()));
        this.background33 = new Color(mix("33", this.baseColor()));
        this.background44 = new Color(mix("44", this.baseColor()));
        this.background55 = new Color(mix("55", this.baseColor()));
        this.background66 = new Color(mix("66", this.baseColor()));
        this.background77 = new Color(mix("77", this.baseColor()));
        this.background88 = new Color(mix("88", this.baseColor()));
        this.background99 = new Color(mix("99", this.baseColor()));
        this.backgroundaa = new Color(mix("aa", this.baseColor()));
        this.backgroundbb = new Color(mix("bb", this.baseColor()));
        this.backgroundc5 = new Color(mix("c5", this.baseColor()));
        this.backgroundcc = new Color(mix("cc", this.baseColor()));
        this.backgrounddd = new Color(mix("dd", this.baseColor()));
        this.backgrounde5 = new Color(mix("e5", this.baseColor()));
        this.backgroundee = new Color(mix("ee", this.baseColor()));
        this.contrastBackground = new Color("#030612");
        this.activeIndentGuideBackground = new Color("#53ac53");
        this.activityBarBadgeBackground = new Color("#006600");
        this.activityBarBadgeForeground = new Color("#f5fff5");
        this.buttonBackground = new Color(mix("44", this.baseColor()));
        this.buttonForeground = new Color(mix("cc", this.baseColor()));
        this.buttonHoverBackground = new Color(mix("33", this.baseColor()));
        this.disabledForeground = new Color(mix("77", this.baseColor()));
        this.editorInfoForeground = new Color("#02cad4");
        this.editorLightBulbAutoFixForeground = new Color("#f2f28c");
        this.editorLightBulbForeground = new Color("#f1836f");
        this.editorWarningBackground = new Color("#d9d32633");
        this.editorWarningForeground = new Color("#d9d326");
        this.errorForeground = new Color("#ff7575");
        this.gitDecorationAddedResourceForeground = new Color("#81b88b");
        this.gitDecorationDeletedResourceForeground = new Color("#c74e39");
        this.gitDecorationModifiedResourceForeground = new Color("#e2c08d");
        this.gitDecorationUntrackedResourceForeground = new Color("#73c991");
        this.inlineValuesBackground = new Color("#c3ab8555");
        this.inlineValuesForeground = new Color(mix("cc", this.baseColor()));
        this.inputOptionActiveBackground = new Color(mix("44", this.baseColor()));
        this.inputOptionHoverBackground = new Color(mix("33", this.baseColor()));
        this.listFocusBackground = new Color("#000000f0");
        this.menuForeground = new Color(mix("aa", this.baseColor()));
        this.minimapSelectionHighlight = new Color("#00660066");
        this.progressBarBackground = new Color("#d9d326");
        this.sideBySideEditorBorder = new Color(mix("22", this.baseColor()));
        this.statusBarBackground = new Color("#006600");
        this.statusBarDebuggingBackground = new Color("#9b2c2c");
        this.statusBarDebuggingBorder = new Color("#770000");
        this.statusBarDebuggingForeground = new Color("#fdf7f7");
        this.statusBarForeground = new Color("#f5fff5");
        this.statusBarNoFolderBackground = new Color("#553c9a");
        this.statusBarNoFolderForeground = new Color("#ede9f6");
        this.statusBarRemoteBackground = new Color("#660066");
        this.statusBarRemoteForeground = new Color("#fff5ff");
        this.tabActiveBorder = new Color("#009900");
        this.textLinkForeground = new Color("#89b971");
        this.bracketPair1 = new Color("#f2f28c");
        this.bracketPair2 = new Color("#c982c1");
        this.bracketPair3 = new Color("#93ecb8");
        this.bracketPair4 = new Color("#c3ab85");
        this.bracketPair5 = new Color("#7dbbe8");
        this.bracketPair6 = new Color("#ff99b3");
        this.ansiBrightBlack = new Color("#888b92");
        this.ansiBrightBlue = new Color("#80bfff");
        this.ansiBrightCyan = new Color("#a0f1f8");
        this.ansiBrightGreen = new Color("#89b971");
        this.ansiBrightMagenta = new Color("#f28ca6");
        this.ansiBrightRed = new Color("#f18a7e");
        this.ansiBrightWhite = new Color("#c5c6c9");
        this.ansiBlack = new Color("#353a45");
        this.ansiBlue = new Color("#829dc9");
        this.ansiBrightYellow = new Color("#f5d780");
        this.ansiCyan = new Color("#0fc6d7");
        this.ansiGreen = new Color("#85c3ab");
        this.ansiMagenta = new Color("#c982c1");
        this.ansiRed = new Color("#ff7575");
        this.ansiWhite = new Color("#acaeb3");
        this.ansiYellow = new Color("#d9d326");
        this.name = "Night Coder";
        this.variant = "Main";
        Object.defineProperty(this, "name", { enumerable: false });
        Object.defineProperty(this, "variant", { enumerable: false });
    }
    baseColor() {
        return "#030917";
    }
    fullName() {
        return [this.name, this.variant].filter((s) => s !== "Main").join(" ");
    }
    filename() {
        return this.fullName().trim().toLowerCase().replace(/ +/g, "-");
    }
    toString() {
        return Object.entries(Object.values(this)
            .map((c) => [c.code, c.description])
            .reduce((acc, nv) => {
            acc[nv[0]] ? (acc[nv[0]] += `, ${nv[1]}`) : (acc[nv[0]] = nv[1]);
            return acc;
        }, []))
            .map((c) => [
            "",
            c[1],
            `![${c[0]}](https://via.placeholder.com/23/${c[0].replace("#", "")}/?text=+)`,
            c[0].toLocaleUpperCase(),
            "",
        ].join("|"))
            .join("\n");
    }
    toMarkdownTable() {
        return [
            `### ${this.variant} variant`,
            "",
            "| Scope | Color | Hex |",
            "|:------|:-----:|:----|",
            this.toString(),
        ].join("\n");
    }
}
const availablePalettes = [];
export function registerPalette(p) {
    availablePalettes.push(p);
}
export function getPalettes() {
    return availablePalettes;
}
export function getPaletteCategories() {
    return [...new Set(availablePalettes.map((p) => p.name.toLowerCase().replace(/ +/g, "-")))];
}
