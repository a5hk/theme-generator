import path from "path";
import { themeWriter } from "../common/theme-writer.js";
import { Ice, NightCoder, Paper } from "./extension.js";
function fileWriter(content, category, filepath) {
    const baseOutputDir = "vscode";
    const p = path.normalize(path.join(category, baseOutputDir, filepath));
    themeWriter(p, content, `Generated ${p}.`);
}
function filterPalettes(palettes, name) {
    return palettes.filter((p) => p.name === name);
}
export function vscodeThemesWriter(palettes, categories) {
    let ext;
    for (const cat of categories) {
        if (cat === "night-coder") {
            ext = new NightCoder(filterPalettes(palettes, "Night Coder"));
        }
        else if (cat === "ice") {
            ext = new Ice(filterPalettes(palettes, "Ice"));
        }
        else {
            ext = new Paper(filterPalettes(palettes, "Paper"));
        }
        for (const t of ext.themes) {
            fileWriter(t.generateTheme(), cat, t.path);
        }
        fileWriter(ext.generateManifest(), cat, "package.json");
        fileWriter(ext.generateReadme(), cat, "README.md");
    }
}
