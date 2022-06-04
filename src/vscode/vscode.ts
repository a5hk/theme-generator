import path from "path";

import { getPaletteCategories } from "../common/colors.js";
import { themeWriter } from "../common/theme-writer.js";
import { Extension, Ice, NightCoder } from "./extension.js";

function fileWriter(content: string, category: string, filepath: string) {
  const baseOutputDir = "vscode";
  const p = path.normalize(path.join(category, baseOutputDir, filepath));
  themeWriter(p, content, `Generated ${p}.`);
}

export function vscodeThemesWriter(): void {
  const categories = getPaletteCategories();
  let ext: Extension;

  for (const cat of categories) {
    if (cat === "night-coder") {
      ext = new NightCoder();
    } else {
      ext = new Ice();
    }

    for (const t of ext.themes) {
      fileWriter(t.generateTheme(), cat, t.path);
    }

    fileWriter(ext.generateManifest(), cat, "package.json");
    // fileWriter(ext.generateColorPaletteMap(), cat, "ColorPalette.md");
    fileWriter(ext.generateReadme(), cat, "README.md");
  }
}
