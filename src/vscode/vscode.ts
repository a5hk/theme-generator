import path from "path";

import { Palette } from "../common/colors.js";
import { themeWriter } from "../common/theme-writer.js";
import { Extension, Ice, NightCoder, Paper } from "./extension.js";

function fileWriter(content: string, category: string, filepath: string) {
  const baseOutputDir = "vscode";
  const p = path.normalize(path.join(category, baseOutputDir, filepath));
  themeWriter(p, content, `Generated ${p}.`);
}

function filterPalettes(palettes: Palette[], name: string): Palette[] {
  return palettes.filter((p) => p.name === name);
}

export function vscodeThemesWriter(palettes: Palette[], categories: string[]): void {
  let ext: Extension;

  for (const cat of categories) {
    if (cat === "night-coder") {
      ext = new NightCoder(filterPalettes(palettes, "Night Coder"));
    } else if (cat === "ice") {
      ext = new Ice(filterPalettes(palettes, "Ice"));
    } else {
      ext = new Paper(filterPalettes(palettes, "Paper"));
    }

    for (const t of ext.themes) {
      fileWriter(t.generateTheme(), cat, t.path);
    }

    fileWriter(ext.generateManifest(), cat, "package.json");
    // fileWriter(ext.generateColorPaletteMap(), cat, "ColorPalette.md");
    fileWriter(ext.generateReadme(), cat, "README.md");
  }
}
