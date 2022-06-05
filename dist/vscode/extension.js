import { getPalettes } from "../common/colors.js";
import { VSTheme } from "./theme.js";
export class Extension {
    constructor() {
        this.themes = [];
        this.author = "a5hk";
        this.categories = ["Themes"];
        this.contributes = { themes: [] };
        this.description = "";
        this.displayName = "";
        this.engines = { vscode: "^1.60.0" };
        this.galleryBanner = { color: "#030917", theme: "dark" };
        this.homepage = "";
        this.icon = "icon.png";
        this.keywords = ["Dark"];
        this.license = "MIT";
        this.name = "";
        this.publisher = "a5hk";
        this.repository = { type: "git", url: "" };
        this.version = "";
        Object.defineProperty(this, "themes", { enumerable: false });
    }
    get palettes() {
        return this.themes.map((t) => t.palette);
    }
    createThemes() {
        const palettes = getPalettes().filter((p) => p.name === this.displayName);
        for (const p of palettes) {
            for (const style of [false, true]) {
                for (const contrast of [false, true]) {
                    const t = new VSTheme(p, { contrast: contrast, italic: style, uiTheme: "vs-dark" });
                    this.addTheme(t);
                }
            }
        }
    }
    addTheme(theme) {
        this.themes.push(theme);
    }
    generateManifest() {
        this.contributes.themes = this.themes.map((t) => t.toManifestFormat());
        return JSON.stringify(this);
    }
    previewURL(theme) {
        return `(https://vscode.dev/theme/a5hk.${this.name}/${encodeURIComponent(theme)})`;
    }
    generateReadme() {
        return this.name;
    }
    variants() {
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
    generateColorPaletteMap() {
        return `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

## Color palettes

${this.variants()
            .map((p) => p.toMarkdownTable())
            .join("\n\n")}
`;
    }
}
export class NightCoder extends Extension {
    constructor() {
        super();
        this.name = "night-coder";
        this.displayName = "Night Coder";
        this.description = "A dark theme for Night Coders";
        this.version = "4.2.2";
        this.keywords = ["NightCoder", "Night Coder", "Dark", "Borderless", "Italic", "Contrast", "Warm"];
        this.homepage = "https://github.com/a5hk/night-coder";
        this.repository = { type: "git", url: "https://github.com/a5hk/night-coder" };
        this.createThemes();
    }
    generateReadme() {
        const codeBlock = [
            "```json",
            `"editor.fontFamily": "'JetBrains Mono', 'Cascadia Code', 'Fira Code', Consolas, 'Courier New', monospace",`,
            `"editor.fontSize": 14,`,
            `"editor.fontLigatures": true,`,
            `"editor.bracketPairColorization.enabled": true,`,
            "```",
        ].join("\n");
        return `# [Night Coder](https://marketplace.visualstudio.com/items?itemName=a5hk.night-coder)

[![Preview in vscode.dev](https://img.shields.io/badge/preview%20in-vscode.dev-060?style=for-the-badge&labelColor=030917)]${this.previewURL("Night Coder")}

A dark theme for Night Coders. There are three main variants:
- **Night Coder** The first and main variant
- **Night Coder Gray** For those who prefer a little lighter background
- **Night Coder Warm** The lively and happier version, inspired by [Mayukai Sunset](https://marketplace.visualstudio.com/items?itemName=GulajavaMinistudio.mayukaithemevsc)

Each of these main variants, has contrast and italic versions.

![html](/screenshot/demo.gif)

## Other versions

- [vim](/vim/colors/)
- [bat](/bat/)
- [Windows Terminal](/windows-terminal/)

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
    constructor() {
        super();
        this.preview = true;
        this.name = "ice";
        this.displayName = "Ice";
        this.description = "Cold as Ice";
        this.version = "0.7.3";
        this.keywords = ["Ice", "Cold", "Dark", "Borderless", "Italic", "Contrast"];
        this.homepage = "https://github.com/a5hk/ice";
        this.repository = { type: "git", url: "https://github.com/a5hk/ice" };
        this.galleryBanner.color = "#012841";
        this.createThemes();
    }
    generateReadme() {
        return `# [Ice](https://marketplace.visualstudio.com/items?itemName=a5hk.ice)

A freezing cold dark theme.

Also available for [vim](/vim/colors/), [bat](/bat/), and [Windows Terminal](/windows-terminal/).

## Screenshots

### JavaScript [(Ice)]${this.previewURL("Ice")}

![javascript](/screenshot/javascript.png)

## License

[MIT License](/LICENSE)
`;
    }
}
export class Paper extends Extension {
    constructor() {
        super();
        this.preview = true;
        this.name = "paper";
        this.displayName = "Paper";
        this.description = "Light theme with good contrast";
        this.version = "0.6.0";
        this.keywords = ["Paper", "Light", "Borderless", "Italic", "Contrast"];
        this.homepage = "https://github.com/a5hk/paper";
        this.repository = { type: "git", url: "https://github.com/a5hk/paper" };
        this.galleryBanner.color = "#eff1f3";
        this.galleryBanner.theme = "light";
        this.createThemes();
    }
    generateReadme() {
        return `# [paper](https://marketplace.visualstudio.com/items?itemName=a5hk.paper)

The goal was to create a light theme with good contrast ratio and a yellowish paper like background color.

Also available for [vim](/vim/colors/) and [Windows Terminal](/windows-terminal/).

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
