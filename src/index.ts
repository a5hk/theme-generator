// import "./common/night-coder/main-palette.js";
// import "./common/night-coder/warm-palette.js";
// import "./common/night-coder/gray-palette.js";
// import "./common/ice/main-palette.js";
// import "./common/paper/main-palette.js";
import { Palette } from "./common/colors.js";
import { NightCoderPalette } from "./common/night-coder/main-palette.js";
import { NightCoderGrayPalette } from "./common/night-coder/gray-palette.js";
import { NightCoderWarmPalette } from "./common/night-coder/warm-palette.js";
import { IcePalette } from "./common/ice/main-palette.js";
import { PaperPalette } from "./common/paper/main-palette.js";
import { vscodeThemesWriter } from "./vscode/vscode.js";
import { vimColorScheme } from "./vim/vim.js";
import { batColorScheme } from "./bat/bat.js";
import { windowsTerminalColorScheme } from "./windows-terminal/windows-terminal.js";

const palettes: Palette[] = [];
palettes.push(new NightCoderPalette());
palettes.push(new NightCoderWarmPalette());
palettes.push(new NightCoderGrayPalette());
palettes.push(new IcePalette());
palettes.push(new PaperPalette());
const paletteCategories = [...new Set(palettes.map((p) => p.name.toLowerCase().replace(/ +/g, "-")))];

vscodeThemesWriter(palettes, paletteCategories);
vimColorScheme(palettes, paletteCategories);
batColorScheme(palettes, paletteCategories);
windowsTerminalColorScheme(palettes, paletteCategories);
