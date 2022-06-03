import { TextmateTheme } from "./textmate-regular.js";
import { SemanticTheme } from "./semantic-regular.js";
import { commonWorkbenchColors } from "./workbench-common.js";
import { contrastWorkbenchColors } from "./workbench-contrast.js";
export class VSTheme {
    constructor(palette, options) {
        this.palette = palette;
        this.options = options;
    }
    get path() {
        return "./themes/" + this.label.trim().toLowerCase().replace(/ +/g, "-") + "-color-theme.json";
    }
    get label() {
        return [
            this.palette.fullName(),
            this.options.contrast ? "Contrast" : "",
            this.options.italic ? "Italic" : "",
        ]
            .join(" ")
            .replace(/ +/g, " ")
            .trim();
    }
    get workbenchColors() {
        if (this.options.contrast) {
            return Object.assign(Object.assign({}, commonWorkbenchColors(this.palette)), contrastWorkbenchColors(this.palette));
        }
        else {
            return commonWorkbenchColors(this.palette);
        }
    }
    toManifestFormat() {
        return {
            label: this.label,
            path: this.path,
            uiTheme: this.options.uiTheme,
        };
    }
    generateTheme() {
        const textmateTheme = new TextmateTheme(this.palette);
        const semanticTheme = new SemanticTheme(this.palette);
        return this.__italicReject({
            $schema: "vscode://schemas/color-theme",
            colors: this.workbenchColors,
            name: this.label,
            semanticHighlighting: true,
            semanticTokenColors: semanticTheme.getRules(this.options.italic),
            tokenColors: textmateTheme.getRules(this.options.italic),
        });
    }
    __italicReject(theme) {
        return JSON.stringify(theme, (k, v) => {
            if (k === "__italic") {
                return undefined;
            }
            return v;
        });
    }
}
