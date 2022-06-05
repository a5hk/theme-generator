import path from "path";
import { getPaletteCategories } from "../common/colors.js";
import { themeWriter } from "../common/theme-writer.js";
import { Ice, NightCoder, Paper } from "./extension.js";
function fileWriter(content, category, filepath) {
    const baseOutputDir = "vscode";
    const p = path.normalize(path.join(category, baseOutputDir, filepath));
    themeWriter(p, content, `Generated ${p}.`);
}
export function vscodeThemesWriter() {
    const categories = getPaletteCategories();
    let ext;
    for (const cat of categories) {
        if (cat === "night-coder") {
            ext = new NightCoder();
        }
        else if (cat === "ice") {
            ext = new Ice();
        }
        else {
            ext = new Paper();
        }
        for (const t of ext.themes) {
            fileWriter(t.generateTheme(), cat, t.path);
        }
        fileWriter(ext.generateManifest(), cat, "package.json");
        fileWriter(ext.generateReadme(), cat, "README.md");
    }
}
