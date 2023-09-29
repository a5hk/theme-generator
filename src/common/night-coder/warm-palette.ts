import { Color } from "../colors.js";
import { NightCoderPalette } from "./main-palette.js";

export class NightCoderWarmPalette extends NightCoderPalette {
  contrastBackground = new Color("#0a0d0f");

  // token colors
  constantColor = new Color("#57c79c", "Constant");
  defaultLibraryClassTypeColor = new Color("#dfca9f");
  defaultLibraryFunctionColor = new Color("#e9de63");
  functionCallColor = new Color("#e9de63", "Function call");
  functionDeclarationColor = new Color("#ff7566", "Function declaration");
  importColor = new Color("#99c270", "Import/Require/Use");
  keywordColor = new Color("#ff8833", "Keyword");
  literalConstantColor = new Color("#b999fa", "Literal constant");
  namespaceClassStructColor = new Color("#dfca9f", "Namespace/Class/Struct");
  propertyColor = new Color("#f4b271", "Property");
  stringColor = new Color("#99c270", "String");
  typeColor = new Color("#ff8595", "Type");

  // markup
  attributeNameColor = new Color("#e9de63", "Attribute name");
  customTagColor = new Color("#b999fa", "HTML custom tag");
  headingColor = new Color("#e9de63", "Heading");
  inlineTagColor = new Color("#57c79c", "HTML inline tag");
  // italicColor=new Color("#93ecb8", "Italic")
  linkTagColor = new Color("#57c79c", "HTML link tag");
  metaTagColor = new Color("#ff8833", "HTML meta tag");
  objectTagColor = new Color("#ff8833", "HTML object tag");
  tagColor = new Color("#f4b271", "Tag");
  unrecognizedTagColor = new Color("#f4b271", "HTML unrecognized tag");

  // json
  jsonLevel01Color = new Color("#f4b271", "Level 1 JSON key");
  jsonLevel02Color = new Color("#57c79c", "Level 2 JSON key");
  jsonLevel03Color = new Color("#e9de63", "Level 3 JSON key");
  jsonLevel04Color = new Color("#ff7566", "Level 4 JSON key");
  jsonLevel05Color = new Color("#dfca9f", "Level 5 JSON key");
  jsonLevel06Color = new Color("#ff8595", "Level 6 JSON key");
  jsonLevel07Color = new Color("#c3ab85", "Level 7 JSON key");
  jsonLevel08Color = new Color("#57c79c", "Level 8 JSON key");
  jsonLevel09Color = new Color("#e9de63", "Level 9 JSON key");
  jsonLevel10Color = new Color("#ff7566", "Level 10 JSON key");
  jsonLevel11Color = new Color("#f4b271", "Level > 10 JSON key");

  constructor() {
    super();
    this.variant = "Warm";
    this.displayName = "Night Coder Flame";
  }

  baseColor(): string {
    return "#0f1317";
  }
}
