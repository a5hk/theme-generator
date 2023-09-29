import { Color } from "../colors.js";
import { NightCoderPalette } from "./ember-palette.js";

export class NightCoderGrayPalette extends NightCoderPalette {
  contrastBackground = new Color("#262626");

  // token colors
  defaultLibraryFunctionColor = /* ...... */ new Color("#80caff", "Default library function");
  functionCallColor = /* ................ */ new Color("#e6d299", "Function call");
  constantColor = /* .................... */ new Color("#ff9e9e", "Constant");
  miscellaneousColor = /* ............... */ new Color("#d1b485", "Miscellaneous");
  annotationColor = /* .................. */ new Color("#d1b485", "Annotation");
  typeColor = /* ........................ */ new Color("#04ccd7", "Type");
  operatorColor = /* .................... */ new Color("#e0e0b8", "Operator");
  comparisonLogicalOperatorColor = /* ... */ new Color("#b8e0c8", "Comparison/Logical operator");
  functionDeclarationColor = /* ......... */ new Color("#42d79e", "Function declaration");
  literalConstantColor = /* ............. */ new Color("#c5abf7", "Literal constant");
  defaultLibraryClassTypeColor = /* ..... */ new Color("#fc9cc4", "Default library class/type");
  namespaceClassStructColor = /* ........ */ new Color("#9db9e7", "Namespace/Class/Struct");
  stringColor = /* ...................... */ new Color("#8fc78a", "String");
  importColor = /* ...................... */ new Color("#8fc78a", "Import/Require/Use");
  propertyColor = /* .................... */ new Color("#f0a875", "Property");
  keywordColor = /* ..................... */ new Color("#eea0e5", "Keyword");

  tagColor = /* ............... */ new Color("#f0a875", "Tag");
  italicColor = /* ............ */ new Color("#b8e0c8", "Italic");
  headingColor = /* ........... */ new Color("#e6d299", "Heading");
  linkTagColor = /* ........... */ new Color("#42d79e", "HTML link tag");
  metaTagColor = /* ........... */ new Color("#eea0e5", "HTML meta tag");
  styleTagColor = /* .......... */ new Color("#9db9e7", "HTML style tag");
  objectTagColor = /* ......... */ new Color("#fc9cc4", "HTML object tag");
  inlineTagColor = /* ......... */ new Color("#80caff", "HTML inline tag");
  customTagColor = /* ......... */ new Color("#c5abf7", "HTML custom tag");
  scriptTagColor = /* ......... */ new Color("#e0dc52", "Script tag");
  attributeNameColor = /* ..... */ new Color("#e6d299", "Attribute name");
  unrecognizedTagColor = /* ... */ new Color("#ff9e9e", "HTML unrecognized tag");

  jsonLevel01Color = new Color("#f0a875", "Level 1 JSON key");
  jsonLevel02Color = new Color("#eea0e5", "Level 2 JSON key");
  jsonLevel03Color = new Color("#04ccd7", "Level 3 JSON key");
  jsonLevel04Color = new Color("#e6d299", "Level 4 JSON key");
  jsonLevel05Color = new Color("#fc9cc4", "Level 5 JSON key");
  jsonLevel06Color = new Color("#80caff", "Level 6 JSON key");
  jsonLevel07Color = new Color("#9db9e7", "Level 7 JSON key");
  jsonLevel08Color = new Color("#ff9e9e", "Level 8 JSON key");
  jsonLevel09Color = new Color("#d1b485", "Level 9 JSON key");
  jsonLevel10Color = new Color("#e0dc52", "Level 10 JSON key");
  jsonLevel11Color = new Color("#f0a875", "Level > 10 JSON key");

  bracketPair1 = new Color("#e0e0b8");
  bracketPair2 = new Color("#eea0e5");
  bracketPair3 = new Color("#b8e0c8");
  bracketPair4 = new Color("#d1b485");
  bracketPair5 = new Color("#80caff");
  bracketPair6 = new Color("#fc9cc4");

  ansiBrightBlack = this.background88;
  ansiBrightBlue = new Color("#80caff");
  ansiBrightCyan = new Color("#04ccd7");
  ansiBrightGreen = new Color("#8fc78a");
  ansiBrightMagenta = new Color("#fc9cc4");
  ansiBrightRed = new Color("#ff9e9e");
  ansiBrightWhite = this.backgroundee;
  ansiBrightYellow = new Color("#e6d299");

  ansiBlack = new Color("#020203");
  ansiBlue = new Color("#9db9e7");
  // p.ansiCyan = new Color("#");
  ansiGreen = new Color("#42d79e");
  ansiMagenta = new Color("#eea0e5");
  // p.ansiRed = new Color("#ff7575");
  ansiWhite = this.backgroundc5;
  ansiYellow = new Color("#e0dc52");

  constructor() {
    super();
    this.variant = "Smoke";
  }

  baseColor(): string {
    return "#2c2c2c";
  }
}
