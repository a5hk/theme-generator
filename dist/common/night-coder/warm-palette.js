import { Color } from "../colors.js";
import { NightCoderPalette } from "./main-palette.js";
export class NightCoderWarmPalette extends NightCoderPalette {
    constructor() {
        super();
        this.contrastBackground = new Color("#0a0d0f");
        this.constantColor = new Color("#57c79c", "Constant");
        this.defaultLibraryClassTypeColor = new Color("#dfca9f");
        this.defaultLibraryFunctionColor = new Color("#e9de63");
        this.functionCallColor = new Color("#e9de63", "Function call");
        this.functionDeclarationColor = new Color("#ff7566", "Function declaration");
        this.importColor = new Color("#99c270", "Import/Require/Use");
        this.keywordColor = new Color("#ff8833", "Keyword");
        this.literalConstantColor = new Color("#b999fa", "Literal constant");
        this.namespaceClassStructColor = new Color("#dfca9f", "Namespace/Class/Struct");
        this.propertyColor = new Color("#f4b271", "Property");
        this.stringColor = new Color("#99c270", "String");
        this.typeColor = new Color("#ff8595", "Type");
        this.attributeNameColor = new Color("#e9de63", "Attribute name");
        this.customTagColor = new Color("#b999fa", "HTML custom tag");
        this.headingColor = new Color("#e9de63", "Heading");
        this.inlineTagColor = new Color("#57c79c", "HTML inline tag");
        this.linkTagColor = new Color("#57c79c", "HTML link tag");
        this.metaTagColor = new Color("#ff8833", "HTML meta tag");
        this.objectTagColor = new Color("#ff8833", "HTML object tag");
        this.tagColor = new Color("#f4b271", "Tag");
        this.unrecognizedTagColor = new Color("#f4b271", "HTML unrecognized tag");
        this.jsonLevel01Color = new Color("#f4b271", "Level 1 JSON key");
        this.jsonLevel02Color = new Color("#57c79c", "Level 2 JSON key");
        this.jsonLevel03Color = new Color("#e9de63", "Level 3 JSON key");
        this.jsonLevel04Color = new Color("#ff7566", "Level 4 JSON key");
        this.jsonLevel05Color = new Color("#dfca9f", "Level 5 JSON key");
        this.jsonLevel06Color = new Color("#ff8595", "Level 6 JSON key");
        this.jsonLevel07Color = new Color("#c3ab85", "Level 7 JSON key");
        this.jsonLevel08Color = new Color("#57c79c", "Level 8 JSON key");
        this.jsonLevel09Color = new Color("#e9de63", "Level 9 JSON key");
        this.jsonLevel10Color = new Color("#ff7566", "Level 10 JSON key");
        this.jsonLevel11Color = new Color("#f4b271", "Level > 10 JSON key");
        this.variant = "Warm";
        this.displayName = "Night Coder Flame";
    }
    baseColor() {
        return "#0f1317";
    }
}
