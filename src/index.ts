import "./common/night-coder/main-palette.js";
import "./common/night-coder/warm-palette.js";
import "./common/night-coder/gray-palette.js";
import "./common/ice/main-palette.js";
import "./common/paper/main-palette.js";
import { vscodeThemesWriter } from "./vscode/vscode.js";
import { vimColorScheme } from "./vim/vim.js";
import { batColorScheme } from "./bat/bat.js";
import { windowsTerminalColorScheme } from "./windows-terminal/windows-terminal.js";

vscodeThemesWriter();
vimColorScheme();
batColorScheme();
windowsTerminalColorScheme();
