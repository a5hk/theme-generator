import { themeWriter } from "../common/theme-writer.js";
function hljsColors(palette) {
    const tokens = [
        {
            classes: ["meta"],
            color: palette.annotationColor.code,
            name: "annotation",
        },
        {
            classes: ["comment"],
            color: palette.commentColor.code,
            name: "comment",
        },
        {
            classes: ["variable.constant_", "variable.language_"],
            color: palette.constantColor.code,
            name: "constant",
        },
        {
            classes: ["operator"],
            color: palette.operatorColor.code,
            name: "operator",
        },
        {
            classes: ["doctag"],
            color: palette.documentationColor.code,
            name: "documentation",
        },
        {
            classes: ["title.function_.invoke__"],
            color: palette.functionCallColor.code,
            name: "function call",
        },
        {
            classes: ["title.function_"],
            color: palette.functionDeclarationColor.code,
            name: "function declaration",
        },
        {
            classes: ["keyword", "meta .hljs-keyword"],
            color: palette.keywordColor.code,
            name: "keyword",
        },
        {
            classes: ["literal", "number", "symbol", "regexp", "char.escape_"],
            color: palette.literalConstantColor.code,
            name: "literal constant",
        },
        {
            classes: ["built_in"],
            color: palette.defaultLibraryClassTypeColor.code,
            name: "default library",
        },
        {
            classes: ["title", "title.class_", "title.class_.inherited__"],
            color: palette.namespaceClassStructColor.code,
            name: "class",
        },
        {
            classes: ["params"],
            color: palette.parameterArgumentColor.code,
            name: "parameter",
        },
        {
            classes: ["property"],
            color: palette.propertyColor.code,
            name: "property",
        },
        {
            classes: ["string", "meta .hljs-string"],
            color: palette.stringColor.code,
            name: "string",
        },
        {
            classes: ["type"],
            color: palette.typeColor.code,
            name: "type",
        },
        {
            classes: ["variable", "template-variable"],
            color: palette.variableColor.code,
            name: "variable",
        },
        {
            classes: [
                "attr",
                "tag .hljs-attr",
                "attribute",
                "selector-tag",
                "selector-id",
                "selector-class",
                "selector-attr",
                "selector-pseudo",
            ],
            color: palette.attributeNameColor.code,
            name: "attribute",
        },
        {
            classes: ["tag", "template-tag", "tag .hljs-name", "name"],
            color: palette.tagColor.code,
            name: "tag",
        },
        {
            classes: ["section"],
            color: palette.headingColor.code,
            name: "heading",
        },
        {
            classes: ["strong"],
            "font-weight": "bold",
            name: "bold",
        },
        {
            classes: ["emphasis", "quote"],
            "font-style": "italic",
            name: "italic",
        },
        {
            classes: ["punctuation"],
            color: palette.documentationColor.code,
            name: "punctuation",
        },
        {
            classes: ["deletion"],
            color: palette.errorForeground.code,
            name: "deletion",
        },
        {
            classes: ["addition"],
            color: palette.activeIndentGuideBackground.code,
            name: "addition",
        },
        {
            classes: ["subst"],
            color: palette.foregroundColor.code,
            name: "other",
        },
        {
            classes: ["bullet"],
            color: palette.parameterArgumentColor.code,
            name: "bullet",
        },
        {
            classes: ["link"],
            color: palette.linkTagColor.code,
            name: "link",
        },
        {
            classes: ["formula"],
            color: palette.annotationColor.code,
            name: "formula",
        },
        {
            classes: ["code"],
            color: palette.documentationColor.code,
            name: "code",
        },
    ];
    return (tokens
        .map((x) => {
        return (x.classes.map((e) => `.hljs-${e}`).join(",\n") +
            " {\n" +
            Object.entries(x)
                .map((e) => {
                if (e[0] !== "classes" && e[0] !== "name") {
                    return `  ${e[0]}: ${e[1]};\n`;
                }
                return "";
            })
                .join("") +
            "}");
    })
        .join("\n\n") +
        `\n\n.hljs {\n  background: ${palette.background.code};\n  color: ${palette.foregroundColor.code};\n}`);
}
export function hljsColorScheme(palettes, categories) {
    for (const cat of categories) {
        for (const p of palettes) {
            if (p.name.toLowerCase().replace(/ +/g, "-") === cat) {
                themeWriter(`${cat}/highlightjs/${p.filename()}.css`, hljsColors(p), "highlightjs color scheme generated.");
            }
        }
    }
}
