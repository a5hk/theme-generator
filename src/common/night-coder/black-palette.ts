import { Color } from "../colors.js";
import { NightCoderPalette } from "./ember-palette.js";

export class NightCoderBlackPalette extends NightCoderPalette {
  contrastBackground = new Color("#050505");

  constructor() {
    super();
    this.variant = "Black";
  }

  baseColor(): string {
    return "#000000";
  }
}
