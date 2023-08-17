import chroma from "chroma-js";

export class Color {
  #code: string;
  description = "";

  constructor(code: string, description = "") {
    this.#code = code;
    this.description = description;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get code() {
    return this.#code;
  }

  set code(hex: string) {
    if (/^#[0-9a-f]{6}$/i.test(hex)) {
      this.#code = hex;
    }
  }
}

function hexAlphaToDec(alpha: string): number {
  return parseInt(alpha, 16) / 255;
}

function mix(alpha: string, background: string): string {
  return chroma.mix(background, "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}

export class Palette {
  // token colors
  annotationColor = /* .................. */ new Color("#c3ab85", "Annotation");
  commentColor = /* ..................... */ new Color(mix("44", this.baseColor()), "Comment");
  comparisonLogicalOperatorColor = /* ... */ new Color("#93ecb8", "Comparison/Logical operator");
  constantColor = /* .................... */ new Color("#f1836f", "Constant");
  defaultLibraryClassTypeColor = /* ..... */ new Color("#ff99b3", "Default library class/type");
  defaultLibraryFunctionColor = /* ...... */ new Color("#7dbbe8", "Default library function");
  documentationColor = /* ............... */ new Color(mix("aa", this.baseColor()), "Documentation");
  foregroundColor = /* .................. */ new Color(mix("c0", this.baseColor()), "Foreground");
  functionCallColor = /* ................ */ new Color("#ddc888", "Function call");
  functionDeclarationColor = /* ......... */ new Color("#85c3ab", "Function declaration");
  importColor = /* ...................... */ new Color("#8dbf82", "Import/Require/Use");
  keywordColor = /* ..................... */ new Color("#c982c1", "Keyword");
  literalConstantColor = /* ............. */ new Color("#bfa6f2", "Literal constant");
  miscellaneousColor = /* ............... */ new Color("#c3ab85", "Miscellaneous");
  namespaceClassStructColor = /* ........ */ new Color("#829dc9", "Namespace/Class/Struct");
  operatorColor = /* .................... */ new Color("#f2f28c", "Operator");
  parameterArgumentColor = /* ........... */ new Color(mix("e5", this.baseColor()), "Parameter, Argument");
  propertyColor = /* .................... */ new Color("#e4aa81", "Property");
  stringColor = /* ...................... */ new Color("#8dbf82", "String");
  typeColor = /* ........................ */ new Color("#0bc2cb", "Type");
  variableColor = /* .................... */ new Color(mix("c0", this.baseColor()), "Variable");

  // html / markup
  // eslint-disable-next-line sort-keys
  attributeNameColor = /* ..... */ new Color("#ddc888", "Attribute name");
  customTagColor = /* ......... */ new Color("#bfa6f2", "HTML custom tag");
  headingColor = /* ........... */ new Color("#ddc888", "Heading");
  inlineTagColor = /* ......... */ new Color("#7dbbe8", "HTML inline tag");
  italicColor = /* ............ */ new Color("#93ecb8", "Italic");
  linkTagColor = /* ........... */ new Color("#85c3ab", "HTML link tag");
  metaTagColor = /* ........... */ new Color("#c982c1", "HTML meta tag");
  objectTagColor = /* ......... */ new Color("#ff99b3", "HTML object tag");
  scriptTagColor = /* ......... */ new Color("#d9d326", "Script tag");
  styleTagColor = /* .......... */ new Color("#829dc9", "HTML style tag");
  tagColor = /* ............... */ new Color("#e4aa81", "Tag");
  tagPunctuationColor = /* .... */ new Color(mix("77", this.baseColor()), "Tag punctuation");
  unrecognizedTagColor = /* ... */ new Color("#f1836f", "HTML unrecognized tag");

  // json
  // eslint-disable-next-line sort-keys
  jsonLevel01Color = new Color("#e4aa81", "Level 1 JSON key");
  jsonLevel02Color = new Color("#c982c1", "Level 2 JSON key");
  jsonLevel03Color = new Color("#0bc2cb", "Level 3 JSON key");
  jsonLevel04Color = new Color("#ddc888", "Level 4 JSON key");
  jsonLevel05Color = new Color("#ff99b3", "Level 5 JSON key");
  jsonLevel06Color = new Color("#7dbbe8", "Level 6 JSON key");
  jsonLevel07Color = new Color("#829dc9", "Level 7 JSON key");
  jsonLevel08Color = new Color("#f1836f", "Level 8 JSON key");
  jsonLevel09Color = new Color("#c3ab85", "Level 9 JSON key");
  jsonLevel10Color = new Color("#d9d326", "Level 10 JSON key");
  jsonLevel11Color = new Color("#e4aa81", "Level > 10 JSON key");

  // workbench colors
  // eslint-disable-next-line sort-keys
  background = new Color(mix("0", this.baseColor()));
  background11 = new Color(mix("11", this.baseColor()));
  background1a = new Color(mix("1a", this.baseColor()));
  background22 = new Color(mix("22", this.baseColor()));
  background25 = new Color(mix("25", this.baseColor()));
  background33 = new Color(mix("33", this.baseColor()));
  background44 = new Color(mix("44", this.baseColor()));
  background55 = new Color(mix("55", this.baseColor()));
  background66 = new Color(mix("66", this.baseColor()));
  background77 = new Color(mix("77", this.baseColor()));
  background88 = new Color(mix("88", this.baseColor()));
  background99 = new Color(mix("99", this.baseColor()));
  backgroundaa = new Color(mix("aa", this.baseColor()));
  backgroundbb = new Color(mix("bb", this.baseColor()));
  backgroundc5 = new Color(mix("c5", this.baseColor()));
  backgroundcc = new Color(mix("cc", this.baseColor()));
  backgrounddd = new Color(mix("dd", this.baseColor()));
  backgrounde5 = new Color(mix("e5", this.baseColor()));
  backgroundee = new Color(mix("ee", this.baseColor()));

  contrastBackground = new Color("#030612");

  // eslint-disable-next-line sort-keys
  activeIndentGuideBackground = /* ......................... */ new Color("#53ac53");
  activityBarBadgeBackground = /* .......................... */ new Color("#006600");
  activityBarBadgeForeground = /* .......................... */ new Color("#f5fff5");
  buttonBackground = /* .................................... */ new Color(mix("44", this.baseColor()));
  buttonForeground = /* .................................... */ new Color(mix("cc", this.baseColor()));
  buttonHoverBackground = /* ............................... */ new Color(mix("33", this.baseColor()));
  disabledForeground = /* .................................. */ new Color(mix("77", this.baseColor()));
  editorInfoForeground = /* ................................ */ new Color("#02cad4");
  editorLightBulbAutoFixForeground = /* .................... */ new Color("#f2f28c");
  editorLightBulbForeground = /* ........................... */ new Color("#f1836f");
  editorWarningBackground = /* ............................. */ new Color("#d9d32633");
  editorWarningForeground = /* ............................. */ new Color("#d9d326");
  errorForeground = /* ..................................... */ new Color("#ff7575");
  gitDecorationAddedResourceForeground = /* ................ */ new Color("#81b88b");
  gitDecorationDeletedResourceForeground = /* .............. */ new Color("#c74e39");
  gitDecorationModifiedResourceForeground = /* ............. */ new Color("#e2c08d");
  gitDecorationUntrackedResourceForeground = /* ............ */ new Color("#73c991");
  inlineValuesBackground = /* .............................. */ new Color("#c3ab8555");
  inlineValuesForeground = /* .............................. */ new Color(mix("cc", this.baseColor()));
  inputOptionActiveBackground = /* ......................... */ new Color(mix("44", this.baseColor()));
  inputOptionHoverBackground = /* .......................... */ new Color(mix("33", this.baseColor()));
  listFocusBackground = /* ................................. */ new Color("#000000f0");
  menuForeground = /* ...................................... */ new Color(mix("aa", this.baseColor()));
  minimapSelectionHighlight = /* ........................... */ new Color("#00660066");
  progressBarBackground = /* ............................... */ new Color("#d9d326");
  sideBySideEditorBorder = /* .............................. */ new Color(mix("22", this.baseColor()));
  statusBarBackground = /* ................................. */ new Color("#006600");
  statusBarDebuggingBackground = /* ........................ */ new Color("#9b2c2c");
  statusBarDebuggingBorder = /* ............................ */ new Color("#770000");
  statusBarDebuggingForeground = /* ........................ */ new Color("#fdf7f7");
  statusBarForeground = /* ................................. */ new Color("#f5fff5");
  statusBarNoFolderBackground = /* ......................... */ new Color("#553c9a");
  statusBarNoFolderForeground = /* ......................... */ new Color("#ede9f6");
  statusBarRemoteBackground = /* ........................... */ new Color("#660066");
  statusBarRemoteForeground = /* ........................... */ new Color("#fff5ff");
  tabActiveBorder = /* ..................................... */ new Color("#009900");
  textLinkForeground = /* .................................. */ new Color("#89b971");

  // bracket pairs
  // eslint-disable-next-line sort-keys
  bracketPair1 = new Color("#f2f28c");
  bracketPair2 = new Color("#c982c1");
  bracketPair3 = new Color("#93ecb8");
  bracketPair4 = new Color("#c3ab85");
  bracketPair5 = new Color("#7dbbe8");
  bracketPair6 = new Color("#ff99b3");

  // terminal colors
  // eslint-disable-next-line sort-keys
  ansiBrightBlack = /* ..... */ new Color("#888b92"); // background88
  ansiBrightBlue = /* ...... */ new Color("#80bfff");
  ansiBrightCyan = /* ...... */ new Color("#a0f1f8");
  ansiBrightGreen = /* ..... */ new Color("#89b971");
  ansiBrightMagenta = /* ... */ new Color("#f28ca6");
  ansiBrightRed = /* ....... */ new Color("#f18a7e");
  ansiBrightWhite = /* ..... */ new Color("#c5c6c9"); // backgroundc5
  // eslint-disable-next-line sort-keys
  ansiBlack = /* ........... */ new Color("#353a45"); // background33
  ansiBlue = /* ............ */ new Color("#829dc9");
  ansiBrightYellow = /* .... */ new Color("#f5d780");
  ansiCyan = /* ............ */ new Color("#0fc6d7");
  ansiGreen = /* ........... */ new Color("#85c3ab");
  ansiMagenta = /* ......... */ new Color("#c982c1");
  ansiRed = /* ............. */ new Color("#ff7575");
  ansiWhite = /* ........... */ new Color("#acaeb3");
  ansiYellow = /* .......... */ new Color("#d9d326");

  // other properties
  name = "Night Coder";
  variant = "Main";
  lightOrDark: "light" | "dark" = "dark";

  constructor() {
    Object.defineProperty(this, "name", { enumerable: false });
    Object.defineProperty(this, "variant", { enumerable: false });
    Object.defineProperty(this, "lightOrDark", { enumerable: false });
  }

  baseColor(): string {
    return "#030917";
  }

  fullName(): string {
    return [this.name, this.variant].filter((s) => s !== "Main").join(" ");
  }

  filename(): string {
    return this.fullName().trim().toLowerCase().replace(/ +/g, "-");
  }

  toString(): string {
    return Object.entries(
      Object.values(this)
        .map((c) => [c.code, c.description])
        .reduce((acc, nv) => {
          acc[nv[0]] ? (acc[nv[0]] += `, ${nv[1]}`) : (acc[nv[0]] = nv[1]);
          return acc;
        }, [])
    )
      .map((c) =>
        [
          "",
          c[1],
          `![${c[0]}](https://via.placeholder.com/23/${c[0].replace("#", "")}/?text=+)`,
          c[0].toLocaleUpperCase(),
          "",
        ].join("|")
      )
      .join("\n");
  }

  toMarkdownTable(): string {
    return [
      `### ${this.variant} variant`,
      "",
      "| Scope | Color | Hex |",
      "|:------|:-----:|:----|",
      this.toString(),
    ].join("\n");
  }
}
