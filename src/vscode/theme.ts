import { Palette } from "../common/colors.js";
import { TextmateTheme } from "./textmate-regular.js";
import { SemanticTheme } from "./semantic-regular.js";
import { commonWorkbenchColors, workbenchColor } from "./workbench-common.js";
import { contrastWorkbenchColors } from "./workbench-contrast.js";

export interface VSThemeManifest {
  label: string;
  path: string;
  uiTheme: string;
}

interface ThemeOptions {
  contrast: boolean;
  uiTheme: "vs" | "vs-dark" | "hc-black" | "hc-light";
}

export class VSTheme {
  palette: Palette;
  options: ThemeOptions;

  constructor(palette: Palette, options: ThemeOptions) {
    this.palette = palette;
    this.options = options;
  }

  get path(): string {
    return "./themes/" + this.label.trim().toLowerCase().replace(/ +/g, "-") + "-color-theme.json";
  }

  get label(): string {
    return [
      this.palette.fullName(), //
      this.options.contrast ? "Contrast" : "",
    ]
      .join(" ")
      .replace(/ +/g, " ")
      .trim();
  }

  get workbenchColors(): workbenchColor {
    if (this.options.contrast) {
      return { ...commonWorkbenchColors(this.palette), ...contrastWorkbenchColors(this.palette) };
    } else {
      return commonWorkbenchColors(this.palette);
    }
  }

  toManifestFormat(): VSThemeManifest {
    return {
      label: this.label,
      path: this.path,
      uiTheme: this.options.uiTheme,
    };
  }

  generateTheme(): string {
    const textmateTheme = new TextmateTheme(this.palette);
    const semanticTheme = new SemanticTheme(this.palette);

    return JSON.stringify({
      $schema: "vscode://schemas/color-theme",
      colors: this.workbenchColors,
      name: this.label,
      semanticHighlighting: true,
      semanticTokenColors: semanticTheme.getRules(),
      tokenColors: textmateTheme.getRules(),
    });
  }
}
