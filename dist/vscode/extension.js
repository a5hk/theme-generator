import { getPalettes } from "../common/colors.js";
import { VSTheme } from "./theme.js";
export class Extension {
    constructor() {
        this.themes = [];
        this.name = "";
        this.displayName = "";
        this.description = "";
        this.version = "";
        this.publisher = "a5hk";
        this.author = "a5hk";
        this.license = "MIT";
        this.icon = "icon.png";
        this.keywords = ["Dark"];
        this.galleryBanner = { color: "#030917", theme: "dark" };
        this.engines = { vscode: "^1.60.0" };
        this.homepage = "";
        this.repository = { type: "git", url: "" };
        this.categories = ["Themes"];
        this.contributes = { themes: [] };
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
        this.version = "4.2.0";
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
    constructor() {
        super();
        this.preview = true;
        this.name = "ice";
        this.displayName = "Ice";
        this.description = "Cold as Ice";
        this.version = "0.6.0";
        this.keywords = ["Ice", "Cold", "Dark", "Borderless", "Italic", "Contrast"];
        this.homepage = "https://github.com/a5hk/ice";
        this.repository = { type: "git", url: "https://github.com/a5hk/ice" };
        this.galleryBanner.color = "";
        this.createThemes();
    }
}
