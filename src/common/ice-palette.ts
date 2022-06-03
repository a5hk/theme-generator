import { colorPaletteFactory, Palette, Color, registerPalette } from "./colors.js";

function mainVariant(): Palette {
  const p = new (colorPaletteFactory("#012841"))("Ice", "Main");
  p.contrastBackground = new Color("#012237");

  // token colors
  p.constantColor = /* .................... */ new Color("#b3fbff", "Constant");
  p.defaultLibraryClassTypeColor = /* ..... */ new Color("#77d8f8");
  p.defaultLibraryFunctionColor = /* ...... */ new Color("#86f9d2");
  p.functionCallColor = /* ................ */ new Color("#86f9d2", "Function call");
  p.functionDeclarationColor = /* ......... */ new Color("#7ece98", "Function declaration");
  p.importColor = /* ...................... */ new Color("#b3fbff", "Import/Require/Use");
  p.keywordColor = /* ..................... */ new Color("#d1aaf8", "Keyword");
  p.literalConstantColor = /* ............. */ new Color("#a8a8ff", "Literal constant");
  p.namespaceClassStructColor = /* ........ */ new Color("#77d8f8", "Namespace/Class/Struct");
  p.operatorColor = /* .................... */ new Color("#d1aaf8", "Operator");
  p.comparisonLogicalOperatorColor = /* ... */ new Color("#b3fbff", "Comparison/Logical operator");
  p.propertyColor = /* .................... */ new Color("#2dd2ae", "Property");
  p.stringColor = /* ...................... */ new Color("#20dfd6", "String");
  p.typeColor = /* ........................ */ new Color("#4dc3fe", "Type");
  p.annotationColor = /* .................. */ new Color("#a8a8ff", "Annotation");
  p.miscellaneousColor = /* ............... */ new Color("#a8a8ff", "Miscellaneous");

  // markup
  p.attributeNameColor = /* ..... */ new Color("#86f9d2", "Attribute name");
  p.customTagColor = /* ......... */ new Color("#a8a8ff", "HTML custom tag");
  p.headingColor = /* ........... */ new Color("#86f9d2", "Heading");
  p.inlineTagColor = /* ......... */ new Color("#86f9d2", "HTML inline tag");
  p.italicColor = /* ............ */ new Color("#b3fbff", "Italic");
  p.linkTagColor = /* ........... */ new Color("#7ece98", "HTML link tag");
  p.metaTagColor = /* ........... */ new Color("#77d8f8", "HTML meta tag");
  p.styleTagColor = /* .......... */ new Color("77d8f8", "HTML style tag");
  p.objectTagColor = /* ......... */ new Color("#77d8f8", "HTML object tag");
  p.tagColor = /* ............... */ new Color("#2dd2ae", "Tag");
  p.unrecognizedTagColor = /* ... */ new Color("#b3fbff", "HTML unrecognized tag");
  p.scriptTagColor = /* ......... */ new Color("#d1aaf8", "Script tag");

  // json
  p.jsonLevel01Color = new Color("#2dd2ae", "Level 1 JSON key");
  p.jsonLevel02Color = new Color("#d1aaf8", "Level 2 JSON key");
  p.jsonLevel03Color = new Color("#4dc3fe", "Level 3 JSON key");
  p.jsonLevel04Color = new Color("#86f9d2", "Level 4 JSON key");
  p.jsonLevel05Color = new Color("#77d8f8", "Level 5 JSON key");
  p.jsonLevel06Color = new Color("#a8a8ff", "Level 6 JSON key");
  p.jsonLevel07Color = new Color("#b3fbff", "Level 7 JSON key");
  p.jsonLevel08Color = new Color("#2dd2ae", "Level 8 JSON key");
  p.jsonLevel09Color = new Color("#d1aaf8", "Level 9 JSON key");
  p.jsonLevel10Color = new Color("#86f9d2", "Level 10 JSON key");
  p.jsonLevel11Color = new Color("#2dd2ae", "Level > 10 JSON key");

  // terminal colors
  p.ansiBrightBlack = /* ..... */ new Color("#888b92"); // background88
  p.ansiBrightBlue = /* ...... */ new Color("#80bfff");
  p.ansiBrightCyan = /* ...... */ new Color("#0fa5d7");
  p.ansiBrightGreen = /* ..... */ new Color("#89b971");
  p.ansiBrightMagenta = /* ... */ new Color("#f28ca6");
  p.ansiBrightRed = /* ....... */ new Color("#ef7b6d");
  p.ansiBrightWhite = /* ..... */ new Color("#c5c6c9"); // backgroundc5
  p.ansiBlack = /* ........... */ new Color("#353a45"); // background33
  p.ansiBlue = /* ............ */ new Color("#859dc3");
  p.ansiBrightYellow = /* .... */ new Color("#f5d780");
  p.ansiGreen = /* ........... */ new Color("#85c3ab");
  p.ansiMagenta = /* ......... */ new Color("#c385bc");
  p.ansiRed = /* ............. */ new Color("#ff7575");
  p.ansiWhite = /* ........... */ new Color("#acaeb3");
  p.ansiYellow = /* .......... */ new Color("#d9d326");

  // workbench colors
  p.statusBarBackground = /* ............ */ new Color("#186d75");
  p.statusBarForeground = /* ............ */ new Color("#dee3e6");
  p.statusBarRemoteBackground = /* ...... */ new Color("#752018");
  p.statusBarRemoteForeground = /* ...... */ new Color("#dee3e6");

  return p;
}

registerPalette(mainVariant());
