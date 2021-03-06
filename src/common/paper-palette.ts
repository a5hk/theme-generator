import chroma from "chroma-js";

import { colorPaletteFactory, Palette, Color, registerPalette } from "./colors.js";

function hexAlphaToDec(alpha: string): number {
  return parseInt(alpha, 16) / 255;
}

function mix(alpha: string): string {
  return chroma.mix("#fcf8e8", "#000000", hexAlphaToDec(alpha), "rgb").toString();
}

function backgroundMix(alpha: string): string {
  return chroma.mix("#fcf8e8", "#505050", hexAlphaToDec(alpha), "rgb").toString();
}

function accentBackgroundMix(alpha: string): string {
  return chroma.mix("#0fbda8", "#000000", hexAlphaToDec(alpha), "rgb").toString();
}

function mainVariant(): Palette {
  const p = new (colorPaletteFactory("#fcf8e8"))("Paper", "Main");
  p.contrastBackground = new Color("#fbf5df");

  // token colors
  p.annotationColor = /* .................. */ new Color("#675332", "Annotation");
  p.commentColor = /* ..................... */ new Color(mix("44"), "Comment");
  p.constantColor = /* .................... */ new Color("#c91d1d", "Constant");
  p.comparisonLogicalOperatorColor = /* ... */ new Color("#0000ff", "Comparison/Logical operator");
  p.defaultLibraryClassTypeColor = /* ..... */ new Color("#2059cb", "Default library class/type");
  p.defaultLibraryFunctionColor = /* ...... */ new Color("#007aa3", "Default library function"); // TODO: same as non default
  p.documentationColor = /* ............... */ new Color(mix("aa"), "Documentation");
  p.foregroundColor = /* .................. */ new Color(mix("c0"), "Foreground");
  p.functionCallColor = /* ................ */ new Color("#9e4200", "Function call");
  p.functionDeclarationColor = /* ......... */ new Color("#007aa3", "Function declaration");
  p.importColor = /* ...................... */ new Color("#c91d1d", "Import/Require/Use");
  p.keywordColor = /* ..................... */ new Color("#c20aac", "Keyword");
  p.literalConstantColor = /* ............. */ new Color("#a100d6", "Literal constant");
  p.miscellaneousColor = /* ............... */ new Color("#675332", "Miscellaneous");
  p.namespaceClassStructColor = /* ........ */ new Color("#2059cb", "Namespace/Class/Struct");
  p.operatorColor = /* .................... */ new Color("#981aff", "Operator");
  p.parameterArgumentColor = /* ........... */ new Color(mix("e5"), "Parameter, Argument");
  p.propertyColor = /* .................... */ new Color("#956a04", "Property");
  p.stringColor = /* ...................... */ new Color("#3b7203", "String");
  p.typeColor = /* ........................ */ new Color("#2059cb", "Type");
  p.variableColor = /* .................... */ new Color(mix("c0"), "Variable");

  // markup
  p.attributeNameColor = /* ..... */ new Color("#9e4200", "Attribute name");
  p.customTagColor = /* ......... */ new Color("#a100d6", "HTML custom tag");
  p.headingColor = /* ........... */ new Color("#9e4200", "Heading");
  p.inlineTagColor = /* ......... */ new Color("#007aa3", "HTML inline tag");
  p.italicColor = /* ............ */ new Color("#0000ff", "Italic");
  p.linkTagColor = /* ........... */ new Color("#c20aac", "HTML link tag");
  p.metaTagColor = /* ........... */ new Color("#c20aac", "HTML meta tag");
  p.objectTagColor = /* ......... */ new Color("#2059cb", "HTML object tag");
  p.scriptTagColor = /* ......... */ new Color("#c20aac", "Script tag");
  p.styleTagColor = /* .......... */ new Color("#c20aac", "HTML style tag");
  p.tagColor = /* ............... */ new Color("#956a04", "Tag");
  p.tagPunctuationColor = /* .... */ new Color(mix("77"), "Tag punctuation");
  p.unrecognizedTagColor = /* ... */ new Color("#c91d1d", "HTML unrecognized tag");

  // json
  p.jsonLevel01Color = new Color("#c20aac", "Level 1 JSON key");
  p.jsonLevel02Color = new Color("#2059cb", "Level 2 JSON key");
  p.jsonLevel03Color = new Color("#c91d1d", "Level 3 JSON key");
  p.jsonLevel04Color = new Color("#007aa3", "Level 4 JSON key");
  p.jsonLevel05Color = new Color("#956a04", "Level 5 JSON key");
  p.jsonLevel06Color = new Color("#c20aac", "Level 6 JSON key");
  p.jsonLevel07Color = new Color("#2059cb", "Level 7 JSON key");
  p.jsonLevel08Color = new Color("#c91d1d", "Level 8 JSON key");
  p.jsonLevel09Color = new Color("#007aa3", "Level 9 JSON key");
  p.jsonLevel10Color = new Color("#956a04", "Level 10 JSON key");
  p.jsonLevel11Color = new Color("#c20aac", "Level > 10 JSON key");

  // workbench colors
  // eslint-disable-next-line sort-keys
  p.background = new Color(backgroundMix("0"));
  p.background11 = new Color(backgroundMix("11"));
  p.background1a = new Color(backgroundMix("1a"));
  p.background22 = new Color(backgroundMix("22"));
  p.background25 = new Color(backgroundMix("25"));
  p.background33 = new Color(backgroundMix("33"));
  p.background44 = new Color(backgroundMix("44"));
  p.background55 = new Color(backgroundMix("55"));
  p.background66 = new Color(backgroundMix("66"));
  p.background77 = new Color(backgroundMix("77"));
  p.background88 = new Color(backgroundMix("88"));
  p.background99 = new Color(backgroundMix("99"));
  p.backgroundaa = new Color(backgroundMix("aa"));
  p.backgroundbb = new Color(backgroundMix("bb"));
  p.backgroundc5 = new Color(backgroundMix("c5"));
  p.backgroundcc = new Color(backgroundMix("cc"));
  p.backgrounddd = new Color(backgroundMix("dd"));
  p.backgrounde5 = new Color(backgroundMix("e5"));
  p.backgroundee = new Color(backgroundMix("ee"));

  p.activeIndentGuideBackground = /* ................ */ new Color("#6547b8");
  p.activityBarBadgeBackground = /* ................. */ new Color(accentBackgroundMix("22"));
  p.activityBarBadgeForeground = /* ................. */ new Color(accentBackgroundMix("c5"));
  p.buttonBackground = /* ........................... */ new Color("#f04257");
  p.buttonForeground = /* ........................... */ new Color(
    chroma.mix("#f04257", "#ffffff", hexAlphaToDec("d5"), "rgb").toString()
  );
  p.disabledForeground = /* ......................... */ new Color(mix("77"));
  p.editorErrorForeground = /* ...................... */ new Color("#ff7575");
  p.editorInfoForeground = /* ....................... */ new Color("#02cad4");
  p.editorWarningBackground = /* .................... */ new Color("#d9d32633");
  p.editorWarningForeground = /* .................... */ new Color("#d9d326");
  p.gitDecorationAddedResourceForeground = /* ....... */ new Color("#007aa3");
  p.gitDecorationDeletedResourceForeground = /* ..... */ new Color("#c91d1d");
  p.gitDecorationModifiedResourceForeground = /* .... */ new Color("#956a04");
  p.gitDecorationUntrackedResourceForeground = /* ... */ new Color("#3b7203");
  p.listFocusBackground = /* ........................ */ new Color("#fffffff0");
  p.menuForeground = /* ............................. */ new Color(mix("c5"));
  p.minimapSelectionHighlight = /* .................. */ new Color(`${accentBackgroundMix("22")}66`);
  p.progressBarBackground = /* ...................... */ new Color("#6547b8");
  p.statusBarBackground = /* ........................ */ new Color(accentBackgroundMix("0"));
  p.statusBarDebuggingBackground = /* ............... */ new Color("#9b2c2c");
  p.statusBarDebuggingBorder = /* ................... */ new Color("#770000");
  p.statusBarDebuggingForeground = /* ............... */ new Color("#fdf7f7");
  p.statusBarForeground = /* ........................ */ new Color(accentBackgroundMix("ee"));
  p.statusBarNoFolderBackground = /* ................ */ new Color("#6547b8");
  p.statusBarNoFolderForeground = /* ................ */ new Color("#ede9f6");
  p.statusBarRemoteBackground = /* .................. */ new Color("#f04257");
  p.statusBarRemoteForeground = /* .................. */ new Color(
    chroma.mix("#f04257", "#ffffff", hexAlphaToDec("d5"), "rgb").toString()
  );
  p.textLinkForeground = /* ......................... */ new Color("#6547b8");
  p.buttonHoverBackground = /* ...................... */ new Color(
    chroma.mix("#f04257", "#000000", hexAlphaToDec("11"), "rgb").toString()
  );

  p.bracketPair1 = new Color("#0000ff");
  p.bracketPair2 = new Color("#c20aac");
  p.bracketPair3 = new Color("#2059cb");
  p.bracketPair4 = new Color("#c91d1d");
  p.bracketPair5 = new Color("#007aa3");
  p.bracketPair6 = new Color("#956a04");

  p.ansiBrightBlack = /* ..... */ new Color("#888b92");
  p.ansiBrightBlue = /* ...... */ new Color("#80bfff");
  p.ansiBrightCyan = /* ...... */ new Color("#0fa5d7");
  p.ansiBrightGreen = /* ..... */ new Color("#89b971");
  p.ansiBrightMagenta = /* ... */ new Color("#f28ca6");
  p.ansiBrightRed = /* ....... */ new Color("#ef7b6d");
  p.ansiBrightWhite = /* ..... */ new Color(chroma.mix("#f8ecc2", "#ffffff", hexAlphaToDec("ee"), "rgb").toString());
  p.ansiBlack = /* ........... */ new Color("#353a45");
  p.ansiBlue = /* ............ */ new Color("#859dc3");
  p.ansiBrightYellow = /* .... */ new Color("#f5d780");
  p.ansiGreen = /* ........... */ new Color("#85c3ab");
  p.ansiMagenta = /* ......... */ new Color("#c385bc");
  p.ansiRed = /* ............. */ new Color("#ff7575");
  p.ansiWhite = /* ........... */ new Color("#c5c6c9");
  p.ansiYellow = /* .......... */ new Color("#d9d326");

  return p;
}

registerPalette(mainVariant());
