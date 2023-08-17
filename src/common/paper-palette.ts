import chroma from "chroma-js";

import { Palette, Color, registerPalette } from "./colors.js";

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

class PaperPalette extends Palette {
  contrastBackground = new Color("#fbf5df");

  // token colors
  annotationColor = /* .................. */ new Color("#675332", "Annotation");
  commentColor = /* ..................... */ new Color(mix("44"), "Comment");
  constantColor = /* .................... */ new Color("#c91d1d", "Constant");
  comparisonLogicalOperatorColor = /* ... */ new Color("#0000ff", "Comparison/Logical operator");
  defaultLibraryClassTypeColor = /* ..... */ new Color("#2059cb", "Default library class/type");
  defaultLibraryFunctionColor = /* ...... */ new Color("#007aa3", "Default library function"); // TODO: same as non default
  documentationColor = /* ............... */ new Color(mix("aa"), "Documentation");
  foregroundColor = /* .................. */ new Color(mix("c0"), "Foreground");
  functionCallColor = /* ................ */ new Color("#9e4200", "Function call");
  functionDeclarationColor = /* ......... */ new Color("#007aa3", "Function declaration");
  importColor = /* ...................... */ new Color("#c91d1d", "Import/Require/Use");
  keywordColor = /* ..................... */ new Color("#c20aac", "Keyword");
  literalConstantColor = /* ............. */ new Color("#a100d6", "Literal constant");
  miscellaneousColor = /* ............... */ new Color("#675332", "Miscellaneous");
  namespaceClassStructColor = /* ........ */ new Color("#2059cb", "Namespace/Class/Struct");
  operatorColor = /* .................... */ new Color("#981aff", "Operator");
  parameterArgumentColor = /* ........... */ new Color(mix("e5"), "Parameter, Argument");
  propertyColor = /* .................... */ new Color("#956a04", "Property");
  stringColor = /* ...................... */ new Color("#3b7203", "String");
  typeColor = /* ........................ */ new Color("#2059cb", "Type");
  variableColor = /* .................... */ new Color(mix("c0"), "Variable");

  // markup
  attributeNameColor = /* ..... */ new Color("#9e4200", "Attribute name");
  customTagColor = /* ......... */ new Color("#a100d6", "HTML custom tag");
  headingColor = /* ........... */ new Color("#9e4200", "Heading");
  inlineTagColor = /* ......... */ new Color("#007aa3", "HTML inline tag");
  italicColor = /* ............ */ new Color("#0000ff", "Italic");
  linkTagColor = /* ........... */ new Color("#c20aac", "HTML link tag");
  metaTagColor = /* ........... */ new Color("#c20aac", "HTML meta tag");
  objectTagColor = /* ......... */ new Color("#2059cb", "HTML object tag");
  scriptTagColor = /* ......... */ new Color("#c20aac", "Script tag");
  styleTagColor = /* .......... */ new Color("#c20aac", "HTML style tag");
  tagColor = /* ............... */ new Color("#956a04", "Tag");
  tagPunctuationColor = /* .... */ new Color(mix("77"), "Tag punctuation");
  unrecognizedTagColor = /* ... */ new Color("#c91d1d", "HTML unrecognized tag");

  // json
  jsonLevel01Color = new Color("#c20aac", "Level 1 JSON key");
  jsonLevel02Color = new Color("#2059cb", "Level 2 JSON key");
  jsonLevel03Color = new Color("#c91d1d", "Level 3 JSON key");
  jsonLevel04Color = new Color("#007aa3", "Level 4 JSON key");
  jsonLevel05Color = new Color("#956a04", "Level 5 JSON key");
  jsonLevel06Color = new Color("#c20aac", "Level 6 JSON key");
  jsonLevel07Color = new Color("#2059cb", "Level 7 JSON key");
  jsonLevel08Color = new Color("#c91d1d", "Level 8 JSON key");
  jsonLevel09Color = new Color("#007aa3", "Level 9 JSON key");
  jsonLevel10Color = new Color("#956a04", "Level 10 JSON key");
  jsonLevel11Color = new Color("#c20aac", "Level > 10 JSON key");

  // workbench colors
  // eslint-disable-next-line sort-keys
  background = new Color(backgroundMix("0"));
  background11 = new Color(backgroundMix("11"));
  background1a = new Color(backgroundMix("1a"));
  background22 = new Color(backgroundMix("22"));
  background25 = new Color(backgroundMix("25"));
  background33 = new Color(backgroundMix("33"));
  background44 = new Color(backgroundMix("44"));
  background55 = new Color(backgroundMix("55"));
  background66 = new Color(backgroundMix("66"));
  background77 = new Color(backgroundMix("77"));
  background88 = new Color(backgroundMix("88"));
  background99 = new Color(backgroundMix("99"));
  backgroundaa = new Color(backgroundMix("aa"));
  backgroundbb = new Color(backgroundMix("bb"));
  backgroundc5 = new Color(backgroundMix("c5"));
  backgroundcc = new Color(backgroundMix("cc"));
  backgrounddd = new Color(backgroundMix("dd"));
  backgrounde5 = new Color(backgroundMix("e5"));
  backgroundee = new Color(backgroundMix("ee"));

  activeIndentGuideBackground = /* ................ */ new Color("#6547b8");
  activityBarBadgeBackground = /* ................. */ new Color(accentBackgroundMix("22"));
  activityBarBadgeForeground = /* ................. */ new Color(accentBackgroundMix("c5"));
  buttonBackground = /* ........................... */ new Color("#f04257");
  buttonForeground = /* ........................... */ new Color(
    chroma.mix("#f04257", "#ffffff", hexAlphaToDec("d5"), "rgb").toString()
  );
  disabledForeground = /* ......................... */ new Color(mix("77"));
  // editorErrorForeground = /* ...................... */ new Color("#ff7575");
  editorInfoForeground = /* ....................... */ new Color("#02cad4");
  editorWarningBackground = /* .................... */ new Color("#d9d32633");
  editorWarningForeground = /* .................... */ new Color("#d9d326");
  gitDecorationAddedResourceForeground = /* ....... */ new Color("#007aa3");
  gitDecorationDeletedResourceForeground = /* ..... */ new Color("#c91d1d");
  gitDecorationModifiedResourceForeground = /* .... */ new Color("#956a04");
  gitDecorationUntrackedResourceForeground = /* ... */ new Color("#3b7203");
  listFocusBackground = /* ........................ */ new Color("#fffffff0");
  menuForeground = /* ............................. */ new Color(mix("c5"));
  minimapSelectionHighlight = /* .................. */ new Color(`${accentBackgroundMix("22")}66`);
  progressBarBackground = /* ...................... */ new Color("#6547b8");
  statusBarBackground = /* ........................ */ new Color(accentBackgroundMix("0"));
  statusBarDebuggingBackground = /* ............... */ new Color("#9b2c2c");
  statusBarDebuggingBorder = /* ................... */ new Color("#770000");
  statusBarDebuggingForeground = /* ............... */ new Color("#fdf7f7");
  statusBarForeground = /* ........................ */ new Color(accentBackgroundMix("ee"));
  statusBarNoFolderBackground = /* ................ */ new Color("#6547b8");
  statusBarNoFolderForeground = /* ................ */ new Color("#ede9f6");
  statusBarRemoteBackground = /* .................. */ new Color("#f04257");
  statusBarRemoteForeground = /* .................. */ new Color(
    chroma.mix("#f04257", "#ffffff", hexAlphaToDec("d5"), "rgb").toString()
  );
  textLinkForeground = /* ......................... */ new Color("#6547b8");
  buttonHoverBackground = /* ...................... */ new Color(
    chroma.mix("#f04257", "#000000", hexAlphaToDec("11"), "rgb").toString()
  );

  bracketPair1 = new Color("#0000ff");
  bracketPair2 = new Color("#c20aac");
  bracketPair3 = new Color("#2059cb");
  bracketPair4 = new Color("#c91d1d");
  bracketPair5 = new Color("#007aa3");
  bracketPair6 = new Color("#956a04");

  ansiBrightBlack = /* ..... */ new Color("#888b92");
  ansiBrightBlue = /* ...... */ new Color("#80bfff");
  ansiBrightCyan = /* ...... */ new Color("#0fa5d7");
  ansiBrightGreen = /* ..... */ new Color("#89b971");
  ansiBrightMagenta = /* ... */ new Color("#f28ca6");
  ansiBrightRed = /* ....... */ new Color("#ef7b6d");
  ansiBrightWhite = /* ..... */ new Color(chroma.mix("#f8ecc2", "#ffffff", hexAlphaToDec("ee"), "rgb").toString());
  ansiBlack = /* ........... */ new Color("#353a45");
  ansiBlue = /* ............ */ new Color("#859dc3");
  ansiBrightYellow = /* .... */ new Color("#f5d780");
  ansiGreen = /* ........... */ new Color("#85c3ab");
  ansiMagenta = /* ......... */ new Color("#c385bc");
  ansiRed = /* ............. */ new Color("#ff7575");
  ansiWhite = /* ........... */ new Color("#c5c6c9");
  ansiYellow = /* .......... */ new Color("#d9d326");

  constructor() {
    super();
    this.name = "Paper";
  }

  baseColor(): string {
    return "#fcf8e8";
  }
}

function mainVariant(): Palette {
  const p = new PaperPalette();
  return p;
}

registerPalette(mainVariant());
