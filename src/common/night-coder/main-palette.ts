import { Palette, registerPalette } from "../colors.js";

export class NightCoderPalette extends Palette {}

function mainVariant(): Palette {
  const p = new NightCoderPalette();
  return p;
}

registerPalette(mainVariant());
