import path from "path";

import { getPalettes, getPaletteCategories } from "../common/colors.js";
import { themeWriter } from "../common/theme-writer.js";
import { Extension, Ice, NightCoder } from "./extension.js";
import { VSTheme } from "./theme.js";

function fileWriter(content: string, category: string, filepath: string) {
  const baseOutputDir = "vscode";
  const p = path.normalize(path.join(baseOutputDir, category, filepath));
  themeWriter(p, content, `Generated ${p}.`);
}

export function vscodeThemesWriter(): void {
  const palettes = getPalettes();
  const categories = getPaletteCategories();
  let ext: Extension;

  for (const cat of categories) {
    if (cat === "night-coder") {
      ext = new NightCoder();
    } else {
      ext = new Ice();
    }

    for (const p of palettes) {
      for (const style of [false, true]) {
        for (const contrast of [false, true]) {
          const t = new VSTheme(p, { contrast: contrast, italic: style, uiTheme: "vs-dark" });
          ext.addTheme(t);
          fileWriter(t.generateTheme(), cat, t.path);
        }
      }
    }
    fileWriter(ext.generateManifest(), cat, "package.json");
    fileWriter(ext.generateColorPaletteMap(), cat, "ColorPalette.md");
    fileWriter(ext.generateReadme(), cat, "README.md");
  }
}
