import { colorPaletteFactory, Palette } from "./colors.js";

export function mainVariant(): Palette {
  const p = new (colorPaletteFactory())("Night Coder", "Main");
  return p;
}

export const mainPalette = mainVariant();
