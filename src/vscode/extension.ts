import { Palette } from "../common/colors.js";
import { VSTheme, VSThemeManifest } from "./theme.js";

export class Extension {
  themes: VSTheme[] = [];

  name = "";
  displayName = "";
  description = "";
  version = "";
  publisher = "a5hk";
  author = "a5hk";
  license = "MIT";
  icon = "icon.png";
  keywords: string[] = ["Dark"];
  galleryBanner: {
    color: string;
    theme: "light" | "dark";
  } = { color: "#030917", theme: "dark" };
  engines: {
    vscode: string;
  } = { vscode: "^1.60.0" };
  homepage = "";
  repository: {
    type: string;
    url: string;
  } = { type: "git", url: "" };
  categories = ["Themes"];
  contributes: {
    themes: VSThemeManifest[];
  } = { themes: [] };

  constructor() {
    Object.defineProperty(this, "themes", { enumerable: false });
  }

  get palettes(): Palette[] {
    return this.themes.map((t) => t.palette);
  }

  addTheme(theme: VSTheme) {
    this.themes.push(theme);
  }

  generateManifest(): string {
    this.contributes.themes = this.themes.map((t) => t.toManifestFormat());

    return JSON.stringify(this);
  }

  previewURL(theme: string): string {
    return `(https://vscode.dev/theme/a5hk.${this.name}/${encodeURIComponent(theme)})`;
  }

  generateReadme(): string {
    return this.name;
  }

  generateColorPaletteMap(): string {
    return `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

  ## Color palettes

  ${this.palettes.map((p) => p.toMarkdownTable()).join("\n\n")}
  `;
  }
}

export class NightCoder extends Extension {
  name = "night-coder";
  displayName = "Night Coder";
  description = "A dark theme for Night Coders";
  version = "4.2.0";
  keywords = ["NightCoder", "Night Coder", "Dark", "Borderless", "Italic", "Contrast", "Warm"];
  homepage = "https://github.com/a5hk/night-coder";
  repository = { type: "git", url: "https://github.com/a5hk/night-coder" };

  generateReadme(): string {
    const codeBlock = [
      "```json",
      `"editor.fontFamily": "'JetBrains Mono', 'Cascadia Code', 'Fira Code', Consolas, 'Courier New', monospace",`,
      `"editor.fontSize": 14,`,
      `"editor.fontLigatures": true,`,
      `"editor.bracketPairColorization.enabled": true,`,
      "```",
    ].join("\n");

    return `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

[![Preview in vscode.dev](https://img.shields.io/badge/preview%20in-vscode.dev-060?style=for-the-badge&labelColor=030917)]${this.previewURL(
      "Night Coder"
    )}

A dark theme for Night Coders. There are three main variants:
- **Night Coder** The first and main variant
- **Night Coder Gray** For those who prefer a little lighter background
- **Night Coder Warm** The lively and happier version, inspired by [Mayukai Sunset](https://marketplace.visualstudio.com/items?itemName=GulajavaMinistudio.mayukaithemevsc)

Each of these main variants, has contrast and italic versions.

![html](/screenshot/demo.gif)

## Other versions

- [vim](/color-themes/vim/colors/)
- [bat](/color-themes/bat/)
- [Windows Terminal](/color-themes/windows-terminal/)

## Color palettes

- [Color Palettes](/color-themes/vscode/ColorPalette.md)

## Screenshots

### JavaScript [(Night Coder)]${this.previewURL("Night Coder")}

![javascript](/screenshot/n-javascript.png)

### Python [(Night Coder Warm Contrast)]${this.previewURL("Night Coder Warm Contrast")}

![python](/screenshot/nwc-python.png)

### JSON [(Night Coder Gray Contrast Italic)]${this.previewURL("Night Coder Gray Contrast Italic")}

![json](/screenshot/ngci-json.png)

## Preferences shown in the screenshots

${codeBlock}

## License

[MIT License](/LICENSE)
`;
  }
}

export class Ice extends Extension {
  name = "ice";
  displayName = "Ice";
  description = "Cold as Ice";
  preview = true;
  version = "0.6.0";
  keywords = ["Ice", "Cold", "Dark", "Borderless", "Italic", "Contrast"];
  homepage = "https://github.com/a5hk/ice";
  repository = { type: "git", url: "https://github.com/a5hk/ice" };
}
