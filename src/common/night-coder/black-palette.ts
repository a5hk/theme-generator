import chroma from "chroma-js";
import { Color } from "../colors.js";
import { NightCoderPalette } from "./ember-palette.js";

function hexAlphaToDec(alpha: string): number {
  return parseInt(alpha, 16) / 255;
}

function mix(alpha: string, background: string): string {
  return chroma.mix(background, "#ffffff", hexAlphaToDec(alpha), "rgb").toString();
}

export class NightCoderBlackPalette extends NightCoderPalette {
  contrastBackground = new Color("#050505");

  // token colors
  annotationColor = /* .................. */ new Color("#d5bc95", "Annotation");
  comparisonLogicalOperatorColor = /* ... */ new Color("#bef4d4", "Comparison/Logical operator"); // adebc7
  constantColor = /* .................... */ new Color("#f18983", "Constant");
  defaultLibraryClassTypeColor = /* ..... */ new Color("#8caad9", "Default library class/type");
  defaultLibraryFunctionColor = /* ...... */ new Color("#f7d6a1", "Default library function");
  functionCallColor = /* ................ */ new Color("#cfc4a5", "Function call");
  functionDeclarationColor = /* ......... */ new Color("#9cc9b8", "Function declaration");
  importColor = /* ...................... */ new Color("#a6bc94", "Import/Require/Use");
  keywordColor = /* ..................... */ new Color("#d2accd", "Keyword");
  literalConstantColor = /* ............. */ new Color("#c0a8f0", "Literal constant");
  miscellaneousColor = /* ............... */ new Color("#d5bc95", "Miscellaneous");
  namespaceClassStructColor = /* ........ */ new Color("#b6c9e7", "Namespace/Class/Struct");
  operatorColor = /* .................... */ new Color("#ffffcc", "Operator");
  parameterArgumentColor = /* ........... */ new Color(mix("d5", this.baseColor()), "Parameter, Argument");
  propertyColor = /* .................... */ new Color("#dbb294", "Property");
  stringColor = /* ...................... */ new Color("#a6bc94", "String");
  typeColor = /* ........................ */ new Color("#b6c9e7", "Type");

  // markup
  attributeNameColor = /* ..... */ new Color("#cfc4a5", "Attribute name");
  customTagColor = /* ......... */ new Color("#c0a8f0", "HTML custom tag");
  headingColor = /* ........... */ new Color("#cfc4a5", "Heading");
  inlineTagColor = /* ......... */ new Color("#f7d6a1", "HTML inline tag");
  italicColor = /* ............ */ new Color("#bef4d4", "Italic");
  linkTagColor = /* ........... */ new Color("#9cc9b8", "HTML link tag");
  metaTagColor = /* ........... */ new Color("#d2accd", "HTML meta tag");
  objectTagColor = /* ......... */ new Color("#8caad9", "HTML object tag");
  scriptTagColor = /* ......... */ new Color("#dbd994", "Script tag");
  styleTagColor = /* .......... */ new Color("#b6c9e7", "HTML style tag");
  tagColor = /* ............... */ new Color("#dbb294", "Tag");
  unrecognizedTagColor = /* ... */ new Color("#f18983", "HTML unrecognized tag");

  // json
  jsonLevel01Color = new Color("#dbb294", "Level 1 JSON key");
  jsonLevel02Color = new Color("#d2accd", "Level 2 JSON key");
  jsonLevel03Color = new Color("#f18983", "Level 3 JSON key");
  jsonLevel04Color = new Color("#8caad9", "Level 4 JSON key");
  jsonLevel05Color = new Color("#cfc4a5", "Level 5 JSON key");
  jsonLevel06Color = new Color("#9cc9b8", "Level 6 JSON key");
  jsonLevel07Color = new Color("#dbd994", "Level 7 JSON key");
  jsonLevel08Color = new Color("#dbb294", "Level > 7 JSON key");
  jsonLevel09Color = new Color("#dbb294");
  jsonLevel10Color = new Color("#dbb294");
  jsonLevel11Color = new Color("#dbb294");

  // bracket pairs
  bracketPair1 = new Color("#ffffcc");
  bracketPair2 = new Color("#d2accd");
  bracketPair3 = new Color("#bef4d4");
  bracketPair4 = new Color("#d5bc95");
  bracketPair5 = new Color("#f7d6a1");
  bracketPair6 = new Color("#8caad9");

  // terminal colors
  ansiGreen = /* ........... */ new Color("#9cc9b8");
  ansiBlue = /* ............ */ new Color("#b6c9e7");
  ansiMagenta = /* ......... */ new Color("#d2accd");
  ansiYellow = /* .......... */ new Color("#dbd994");

  // workbench colors
  editorLightBulbAutoFixForeground = /* .................... */ new Color("#f2f28c");
  editorLightBulbForeground = /* ........................... */ new Color("#f18983");
  editorWarningBackground = /* ............................. */ new Color("#dbd99433");
  editorWarningForeground = /* ............................. */ new Color("#dbd994");
  inlineValuesBackground = /* .............................. */ new Color("#d5bc9555");
  progressBarBackground = /* ............................... */ new Color("#dbd994");

  constructor() {
    super();
    this.variant = "Black";
  }

  baseColor(): string {
    return "#000000";
  }
}
