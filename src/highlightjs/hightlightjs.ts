import { Palette } from "../common/colors.js";
import { themeWriter } from "../common/theme-writer.js";

export interface Token {
  name: string;
  color?: string;
  "font-style"?: string;
  "font-weight"?: string;
  classes: string[];
}

function hljsColors(palette: Palette): string {
  const tokens: Token[] = [
    {
      name: "annotation",
      color: palette.annotationColor.code,
      classes: ["meta"],
    },
    {
      name: "comment",
      color: palette.commentColor.code,
      classes: ["comment"],
    },
    {
      name: "constant",
      color: palette.constantColor.code,
      classes: ["variable.constant_", "variable.language_"],
    },
    {
      name: "operator",
      color: palette.operatorColor.code,
      classes: ["operator"],
    },
    {
      name: "documentation",
      color: palette.documentationColor.code,
      classes: ["doctag"],
    },
    {
      name: "function call",
      color: palette.functionCallColor.code,
      classes: ["title.function_.invoke__"],
    },
    {
      name: "function declaration",
      color: palette.functionDeclarationColor.code,
      classes: ["title.function_"],
    },
    {
      name: "keyword",
      color: palette.keywordColor.code,
      classes: ["keyword"],
    },
    {
      name: "literal constant",
      color: palette.literalConstantColor.code,
      classes: ["literal", "number", "symbol"],
    },
    {
      name: "default library",
      color: palette.defaultLibraryClassTypeColor.code,
      classes: ["built_in"],
    },
    {
      name: "class",
      color: palette.namespaceClassStructColor.code,
      classes: ["title", "title.class_"],
    },
    {
      name: "parameter",
      color: palette.parameterArgumentColor.code,
      classes: ["params"],
    },
    {
      name: "property",
      color: palette.propertyColor.code,
      classes: ["property"],
    },
    {
      name: "string",
      color: palette.stringColor.code,
      classes: ["string"],
    },
    {
      name: "type",
      color: palette.typeColor.code,
      classes: ["type"],
    },
    {
      name: "variable",
      color: palette.variableColor.code,
      classes: ["variable", "template-variable"],
    },
    {
      name: "attribute",
      color: palette.attributeNameColor.code,
      classes: [
        "attr",
        "attribute",
        "selector-tag",
        "selector-id",
        "selector-class",
        "selector-attr",
        "selector-pseudo",
      ],
    },
    {
      name: "tag",
      color: palette.tagColor.code,
      classes: ["tag", "template-tag"],
    },
    {
      name: "heading",
      color: palette.headingColor.code,
      classes: ["section"],
    },
    {
      name: "bold",
      "font-weight": "bold",
      classes: ["strong"],
    },
    {
      name: "italic",
      "font-style": "italic",
      classes: ["emphasis"],
    },
    {
      name: "punctuation",
      color: palette.documentationColor.code,
      classes: ["punctuation"],
    },
    {
      name: "deletion",
      color: palette.errorForeground.code,
      classes: ["deletion"],
    },
    {
      name: "addition",
      color: palette.activeIndentGuideBackground.code,
      classes: ["addition"],
    },
    {
      name: "other",
      color: palette.foregroundColor.code,
      classes: ["subst"],
    },
  ];

  return (
    tokens
      .map((x) => {
        x.classes.map((e) => `.hljs-${e}`).join(",\n") + "{";
        Object.entries(x).map((e) => {
          if (e[0] !== "classes") {
            `${e[0]}: ${e[1]}`;
          }
        });
        +"}";
      })
      .join("\n\n") +
    `.hljs {
            background: ${palette.background.code};
            color: ${palette.foregroundColor.code};
    }`
  );
}

export function hljsColorScheme(palettes: Palette[], categories: string[]): void {
  for (const cat of categories) {
    for (const p of palettes) {
      if (p.name.toLowerCase().replace(/ +/g, "-") === cat) {
        themeWriter(`${cat}/vim/colors/${p.filename()}.vim`, hljsColors(p), "Vim color scheme generated.");
      }
    }
  }
}
