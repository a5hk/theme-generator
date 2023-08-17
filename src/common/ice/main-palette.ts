import { Palette, Color, registerPalette } from "../colors.js";

class IcePalette extends Palette {
  contrastBackground = new Color("#012237");

  // token colors
  constantColor = /* .................... */ new Color("#b3fbff", "Constant");
  defaultLibraryClassTypeColor = /* ..... */ new Color("#77d8f8");
  defaultLibraryFunctionColor = /* ...... */ new Color("#86f9d2");
  functionCallColor = /* ................ */ new Color("#86f9d2", "Function call");
  functionDeclarationColor = /* ......... */ new Color("#7ece98", "Function declaration");
  importColor = /* ...................... */ new Color("#b3fbff", "Import/Require/Use");
  keywordColor = /* ..................... */ new Color("#d1aaf8", "Keyword");
  literalConstantColor = /* ............. */ new Color("#a8a8ff", "Literal constant");
  namespaceClassStructColor = /* ........ */ new Color("#77d8f8", "Namespace/Class/Struct");
  operatorColor = /* .................... */ new Color("#d1aaf8", "Operator");
  comparisonLogicalOperatorColor = /* ... */ new Color("#b3fbff", "Comparison/Logical operator");
  propertyColor = /* .................... */ new Color("#2dd2ae", "Property");
  stringColor = /* ...................... */ new Color("#20dfd6", "String");
  typeColor = /* ........................ */ new Color("#4dc3fe", "Type");
  annotationColor = /* .................. */ new Color("#a8a8ff", "Annotation");
  miscellaneousColor = /* ............... */ new Color("#a8a8ff", "Miscellaneous");

  // markup
  attributeNameColor = /* ..... */ new Color("#86f9d2", "Attribute name");
  customTagColor = /* ......... */ new Color("#a8a8ff", "HTML custom tag");
  headingColor = /* ........... */ new Color("#86f9d2", "Heading");
  inlineTagColor = /* ......... */ new Color("#86f9d2", "HTML inline tag");
  italicColor = /* ............ */ new Color("#b3fbff", "Italic");
  linkTagColor = /* ........... */ new Color("#d1aaf8", "HTML link tag");
  metaTagColor = /* ........... */ new Color("#d1aaf8", "HTML meta tag");
  styleTagColor = /* .......... */ new Color("#d1aaf8", "HTML style tag");
  scriptTagColor = /* ......... */ new Color("#d1aaf8", "Script tag");
  objectTagColor = /* ......... */ new Color("#77d8f8", "HTML object tag");
  tagColor = /* ............... */ new Color("#2dd2ae", "Tag");
  unrecognizedTagColor = /* ... */ new Color("#b3fbff", "HTML unrecognized tag");

  // json
  jsonLevel01Color = new Color("#2dd2ae", "Level 1 JSON key");
  jsonLevel02Color = new Color("#d1aaf8", "Level 2 JSON key");
  jsonLevel03Color = new Color("#4dc3fe", "Level 3 JSON key");
  jsonLevel04Color = new Color("#86f9d2", "Level 4 JSON key");
  jsonLevel05Color = new Color("#77d8f8", "Level 5 JSON key");
  jsonLevel06Color = new Color("#2dd2ae", "Level 6 JSON key");
  jsonLevel07Color = new Color("#d1aaf8", "Level 7 JSON key");
  jsonLevel08Color = new Color("#4dc3fe", "Level 8 JSON key");
  jsonLevel09Color = new Color("#86f9d2", "Level 9 JSON key");
  jsonLevel10Color = new Color("#77d8f8", "Level 10 JSON key");
  jsonLevel11Color = new Color("#2dd2ae", "Level > 10 JSON key");

  // terminal colors
  ansiBrightBlack = /* ..... */ new Color("#888b92"); // background88
  ansiBrightBlue = /* ...... */ new Color("#80bfff");
  ansiBrightCyan = /* ...... */ new Color("#0fa5d7");
  ansiBrightGreen = /* ..... */ new Color("#89b971");
  ansiBrightMagenta = /* ... */ new Color("#f28ca6");
  ansiBrightRed = /* ....... */ new Color("#ef7b6d");
  ansiBrightWhite = /* ..... */ new Color("#c5c6c9"); // backgroundc5
  ansiBlack = /* ........... */ new Color("#353a45"); // background33
  ansiBlue = /* ............ */ new Color("#859dc3");
  ansiBrightYellow = /* .... */ new Color("#f5d780");
  ansiGreen = /* ........... */ new Color("#85c3ab");
  ansiMagenta = /* ......... */ new Color("#c385bc");
  ansiRed = /* ............. */ new Color("#ff7575");
  ansiWhite = /* ........... */ new Color("#acaeb3");
  ansiYellow = /* .......... */ new Color("#d9d326");

  // workbench colors
  activityBarBadgeBackground = /* ..... */ new Color("#186d75");
  activityBarBadgeForeground = /* ..... */ new Color("#dee3e6");
  minimapSelectionHighlight = /* ...... */ new Color("#186d7566");
  statusBarBackground = /* ............ */ new Color("#186d75");
  statusBarForeground = /* ............ */ new Color("#dee3e6");
  statusBarRemoteBackground = /* ...... */ new Color("#752018");
  statusBarRemoteForeground = /* ...... */ new Color("#dee3e6");

  constructor() {
    super();
    this.name = "Ice";
  }

  baseColor(): string {
    return "#012841";
  }
}

function mainVariant(): Palette {
  const p = new IcePalette();
  return p;
}

registerPalette(mainVariant());
