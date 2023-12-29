export class SemanticTheme {
    constructor(palette) {
        this.palette = palette;
    }
    getRules() {
        const rules = {
            class: {
                foreground: this.palette.namespaceClassStructColor.code,
            },
            "class.builtin": {
                foreground: this.palette.defaultLibraryClassTypeColor.code,
            },
            "class.defaultLibrary": {
                foreground: this.palette.defaultLibraryClassTypeColor.code,
            },
            function: {
                foreground: this.palette.functionCallColor.code,
            },
            "function.builtin": {
                foreground: this.palette.defaultLibraryFunctionColor.code,
            },
            "function.declaration": {
                foreground: this.palette.functionDeclarationColor.code,
            },
            "function.defaultLibrary": {
                foreground: this.palette.defaultLibraryFunctionColor.code,
            },
            keyword: {
                foreground: this.palette.keywordColor.code,
            },
            method: {
                foreground: this.palette.functionCallColor.code,
            },
            "method.builtin": {
                foreground: this.palette.defaultLibraryFunctionColor.code,
            },
            "method.declaration": {
                foreground: this.palette.functionDeclarationColor.code,
            },
            "method.defaultLibrary": {
                foreground: this.palette.defaultLibraryFunctionColor.code,
            },
            namespace: {
                foreground: this.palette.namespaceClassStructColor.code,
            },
            "namespace.defaultLibrary": {
                foreground: this.palette.defaultLibraryClassTypeColor.code,
            },
            operator: {
                foreground: this.palette.operatorColor.code,
            },
            parameter: {
                foreground: this.palette.parameterArgumentColor.code,
            },
            property: {
                foreground: this.palette.propertyColor.code,
            },
            string: {
                foreground: this.palette.stringColor.code,
            },
            struct: {
                foreground: this.palette.namespaceClassStructColor.code,
            },
            type: {
                foreground: this.palette.typeColor.code,
            },
            "type.defaultLibrary": {
                foreground: this.palette.defaultLibraryClassTypeColor.code,
            },
            variable: {
                foreground: this.palette.variableColor.code,
            },
            "variable.defaultLibrary": {
                foreground: this.palette.defaultLibraryClassTypeColor.code,
            },
            "variable.readonly": {
                foreground: this.palette.constantColor.code,
            },
        };
        return rules;
    }
}
