import { Palette } from "./common/colors.js";
import { NightCoderEmberPalette } from "./common/night-coder/ember-palette.js";
import { NightCoderAshPalette } from "./common/night-coder/ash-palette.js";
import { NightCoderFlamePalette } from "./common/night-coder/flame-palette.js";
import { NightCoderCharcoalPalette } from "./common/night-coder/charcoal-palette.js";
import { IcePalette } from "./common/ice/main-palette.js";
import { PaperPalette } from "./common/paper/main-palette.js";
import { vscodeThemesWriter } from "./vscode/vscode.js";
import { vimColorScheme } from "./vim/vim.js";
import { batColorScheme } from "./bat/bat.js";
import { windowsTerminalColorScheme } from "./windows-terminal/windows-terminal.js";
import { hljsColorScheme } from "./highlightjs/hightlightjs.js";

const palettes: Palette[] = [];
palettes.push(new NightCoderEmberPalette());
palettes.push(new NightCoderFlamePalette());
palettes.push(new NightCoderAshPalette());
palettes.push(new NightCoderCharcoalPalette());
palettes.push(new IcePalette());
palettes.push(new PaperPalette());
const paletteCategories = [...new Set(palettes.map((p) => p.name.toLowerCase().replace(/ +/g, "-")))];

vscodeThemesWriter(palettes, paletteCategories);
vimColorScheme(palettes, paletteCategories);
batColorScheme(palettes, paletteCategories);
windowsTerminalColorScheme(palettes, paletteCategories);
hljsColorScheme(palettes, paletteCategories);
