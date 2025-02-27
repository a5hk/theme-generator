import { Palette } from "../common/colors.js";
import { VSTheme, VSThemeManifest } from "./theme.js";

export class Extension {
  themes: VSTheme[] = [];

  author = "a5hk";
  categories = ["Themes"];
  contributes: {
    themes: VSThemeManifest[];
  } = { themes: [] };
  description = "";
  displayName = "";
  engines: {
    vscode: string;
  } = { vscode: "^1.60.0" };
  galleryBanner: {
    color: string;
    theme: "light" | "dark";
  } = { color: "#030917", theme: "dark" };
  homepage = "";
  icon = "icon.png";
  keywords: string[] = ["Dark"];
  license = "MIT";
  name = "";
  publisher = "a5hk";
  repository: {
    type: string;
    url: string;
  } = { type: "git", url: "" };
  version = "";

  constructor() {
    Object.defineProperty(this, "themes", { enumerable: false });
  }

  get palettes(): Palette[] {
    return this.themes.map((t) => t.palette);
  }

  createThemes(palettes: Palette[]) {
    for (const p of palettes) {
      for (const contrast of [false, true]) {
        const t = new VSTheme(p, {
          contrast: contrast,
          uiTheme: p.lightOrDark == "dark" ? "vs-dark" : "vs",
        });
        this.addTheme(t);
      }
    }
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

  variants(): Palette[] {
    const pv = new Set();

    for (const p of this.palettes) {
      pv.add(p.variant);
    }

    return this.palettes.filter((p) => {
      if (pv.has(p.variant)) {
        pv.delete(p.variant);
        return true;
      }
      return false;
    });
  }

  generateColorPaletteMap(): string {
    return `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

## Color palettes

${this.variants()
  .map((p) => p.toMarkdownTable())
  .join("\n\n")}
`;
  }
}

export class NightCoder extends Extension {
  constructor(palettes: Palette[]) {
    super();

    this.name = "night-coder";
    this.displayName = "Night Coder";
    this.description = "The dark side of coding.";
    this.version = "6.0.0";
    this.keywords = ["NightCoder", "Night Coder", "Dark"];
    this.homepage = "https://github.com/a5hk/night-coder";
    this.repository = { type: "git", url: "https://github.com/a5hk/night-coder" };

    this.createThemes(palettes);
  }

  generateReadme(): string {
    return `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

A dark theme for Night Coders. There are three main variants:
- **Night Coder Ember** A color scheme with a very dark blue background and variety of cold and warm colors.
- **Night Coder Ash** For those who prefer a little lighter background.
- **Night Coder Flame** A color scheme that evokes the intensity and warmth of fire, with shades of red, orange, and yellow that create a vibrant and energetic mood, inspired by [Mayukai Sunset](https://marketplace.visualstudio.com/items?itemName=GulajavaMinistudio.mayukaithemevsc)
- **Night Coder Charcoal** A black canvas for your coding masterpiece.

Each of these main variants, has a contrast version. Built using [Theme Generator](https://github.com/a5hk/theme-generator)

![html](/screenshot/demo.gif)

## Other versions

- [vim](/vim/colors/)
- [bat](/bat/)
- [Windows Terminal](/windows-terminal/)

## Screenshots

### JavaScript [(Night Coder Ember)]${this.previewURL("Night Coder Ember")}

![javascript](/screenshot/vscode-ember-javascript.png)

### Python [(Night Coder Flame)]${this.previewURL("Night Coder Flame")}

![python](/screenshot/vscode-flame-python.png)

### JSON [(Night Coder Ash Contrast)]${this.previewURL("Night Coder Ash Contrast")}

![json](/screenshot/vscode-ash-contrast-json.png)

### Ruby [(Night Coder Charcoal)]${this.previewURL("Night Coder Ash Charcoal")}

![ruby](/screenshot/vscode-charcoal-ruby.png)

## License

[MIT License](/LICENSE)
`;
  }
}

export class Ice extends Extension {
  constructor(palettes: Palette[]) {
    super();

    this.name = "ice";
    this.displayName = "Ice";
    this.description = "Cold as Ice";
    this.version = "3.0.0";
    this.keywords = ["Ice", "Cold", "Dark"];
    this.homepage = "https://github.com/a5hk/ice";
    this.repository = { type: "git", url: "https://github.com/a5hk/ice" };
    this.galleryBanner.color = "#012841";

    this.createThemes(palettes);
  }

  generateReadme(): string {
    return `# [Ice](https://marketplace.visualstudio.com/items?itemName=a5hk.ice)

A theme that mimics the frozen and crystalline beauty of ice.

Also available for [vim](/vim/colors/), [bat](/bat/), and [Windows Terminal](/windows-terminal/). Built using [Theme Generator](https://github.com/a5hk/theme-generator)

## Screenshots

### JavaScript [(Ice)]${this.previewURL("Ice")}

![javascript](/screenshot/javascript.png)

## License

[MIT License](/LICENSE)
`;
  }
}

export class Paper extends Extension {
  constructor(palettes: Palette[]) {
    super();

    this.name = "paper";
    this.displayName = "Paper";
    this.description = "Light theme with good contrast";
    this.version = "3.0.0";
    this.keywords = ["Paper", "Light"];
    this.homepage = "https://github.com/a5hk/paper";
    this.repository = { type: "git", url: "https://github.com/a5hk/paper" };
    this.galleryBanner.color = "#eff1f3";
    this.galleryBanner.theme = "light";

    this.createThemes(palettes);
  }

  generateReadme(): string {
    return `# [paper](https://marketplace.visualstudio.com/items?itemName=a5hk.paper)

The goal was to create a light theme with good contrast ratio and a yellowish paper like background color.

Also available for [vim](/vim/colors/) and [Windows Terminal](/windows-terminal/). Built using [Theme Generator](https://github.com/a5hk/theme-generator)

## Screenshots

### HTML [(paper)]${this.previewURL("paper")}

![HTML](/screenshot/html.png)

### JavaScript [(paper)]${this.previewURL("paper")}

![javascript](/screenshot/javascript.png)

### Python [(paper)]${this.previewURL("paper")}

![Python](/screenshot/python.png)

## License

[MIT License](/LICENSE)
`;
  }
}
