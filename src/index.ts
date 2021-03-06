import "./common/main-palette.js";
import "./common/warm-palette.js";
import "./common/gray-palette.js";
import "./common/ice-palette.js";
import "./common/paper-palette.js";
import { vscodeThemesWriter } from "./vscode/vscode.js";
import { vimColorScheme } from "./vim/vim.js";
import { batColorScheme } from "./bat/bat.js";
import { windowsTerminalColorScheme } from "./windows-terminal/windows-terminal.js";

vscodeThemesWriter();
vimColorScheme();
batColorScheme();
windowsTerminalColorScheme();
