export function commonWorkbenchColors(palette) {
    const colors = {
        "activityBar.activeBorder": palette.statusBarBackground.code,
        "activityBar.background": palette.background.code,
        "activityBar.foreground": palette.backgroundaa.code,
        "activityBarBadge.background": palette.activityBarBadgeBackground.code,
        "activityBarBadge.foreground": palette.activityBarBadgeForeground.code,
        "badge.background": palette.activityBarBadgeBackground.code,
        "button.background": palette.buttonBackground.code,
        "button.foreground": palette.buttonForeground.code,
        "button.hoverBackground": palette.buttonHoverBackground.code,
        "button.secondaryBackground": palette.background33.code,
        "button.secondaryForeground": palette.backgroundbb.code,
        "debugToolBar.background": palette.background44.code,
        "diffEditor.insertedTextBackground": `${palette.statusBarBackground.code}33`,
        disabledForeground: palette.disabledForeground.code,
        "dropdown.background": palette.background11.code,
        "dropdown.border": palette.background.code,
        "editor.background": palette.background.code,
        "editor.findMatchBackground": palette.background22.code,
        "editor.findMatchBorder": palette.activeIndentGuideBackground.code,
        "editor.findMatchHighlightBackground": `${palette.background33.code}77`,
        "editor.foldBackground": `${palette.statusBarBackground.code}1f`,
        "editor.foreground": palette.foregroundColor.code,
        "editor.inlineValuesBackground": palette.inlineValuesBackground.code,
        "editor.inlineValuesForeground": palette.inlineValuesForeground.code,
        "editor.lineHighlightBackground": `${palette.background33.code}77`,
        "editor.selectionBackground": `${palette.background55.code}99`,
        "editor.selectionHighlightBackground": `${palette.background22.code}77`,
        "editor.selectionHighlightBorder": palette.background66.code,
        "editor.wordHighlightBackground": `${palette.background11.code}77`,
        "editor.wordHighlightBorder": palette.background55.code,
        "editor.wordHighlightStrongBackground": `${palette.backgroundbb.code}22`,
        "editor.wordHighlightStrongBorder": palette.background77.code,
        "editorBracketHighlight.foreground1": palette.bracketPair1.code,
        "editorBracketHighlight.foreground2": palette.bracketPair2.code,
        "editorBracketHighlight.foreground3": palette.bracketPair3.code,
        "editorBracketHighlight.foreground4": palette.bracketPair4.code,
        "editorBracketHighlight.foreground5": palette.bracketPair5.code,
        "editorBracketHighlight.foreground6": palette.bracketPair6.code,
        "editorBracketMatch.background": palette.background55.code,
        "editorBracketMatch.border": palette.background55.code,
        "editorCursor.background": palette.background11.code,
        "editorCursor.foreground": palette.backgroundee.code,
        "editorError.background": `${palette.editorErrorForeground.code}33`,
        "editorError.foreground": palette.editorErrorForeground.code,
        "editorGroup.border": palette.background.code,
        "editorGroupHeader.tabsBackground": palette.background.code,
        "editorHoverWidget.background": palette.background22.code,
        "editorHoverWidget.border": palette.background.code,
        "editorIndentGuide.activeBackground": palette.activeIndentGuideBackground.code,
        "editorIndentGuide.background": palette.background33.code,
        "editorInfo.background": `${palette.editorInfoForeground.code}33`,
        "editorInfo.foreground": palette.editorInfoForeground.code,
        "editorLightBulb.foreground": palette.editorLightBulbForeground.code,
        "editorLightBulbAutoFix.foreground": palette.editorLightBulbAutoFixForeground.code,
        "editorLineNumber.activeForeground": palette.backgroundaa.code,
        "editorLineNumber.foreground": palette.background55.code,
        "editorMarkerNavigation.background": palette.background22.code,
        "editorOverviewRuler.border": palette.background.code,
        "editorRuler.foreground": `${palette.backgroundbb.code}26`,
        "editorSuggestWidget.background": palette.background11.code,
        "editorSuggestWidget.border": palette.background.code,
        "editorSuggestWidget.foreground": palette.backgroundcc.code,
        "editorSuggestWidget.highlightForeground": palette.backgroundee.code,
        "editorSuggestWidget.selectedBackground": palette.background55.code,
        "editorWarning.background": palette.editorWarningBackground.code,
        "editorWarning.foreground": palette.editorWarningForeground.code,
        "editorWhitespace.foreground": palette.background66.code,
        "editorWidget.background": palette.background22.code,
        "editorWidget.border": palette.background.code,
        "editorWidget.resizeBorder": palette.statusBarBackground.code,
        foreground: palette.foregroundColor.code,
        "input.background": palette.background11.code,
        "list.activeSelectionBackground": palette.background33.code,
        "list.activeSelectionForeground": palette.backgroundcc.code,
        "list.focusBackground": palette.listFocusBackground.code,
        "list.focusForeground": palette.backgrounddd.code,
        "list.focusOutline": palette.statusBarBackground.code,
        "list.highlightForeground": palette.backgroundee.code,
        "list.hoverBackground": palette.background33.code,
        "list.inactiveSelectionBackground": palette.background22.code,
        "list.inactiveSelectionForeground": palette.backgrounddd.code,
        "list.warningForeground": palette.progressBarBackground.code,
        "menu.background": palette.background11.code,
        "menu.foreground": palette.menuForeground.code,
        "minimap.selectionHighlight": palette.minimapSelectionHighlight.code,
        "notebook.cellBorderColor": palette.background22.code,
        "notebook.cellEditorBackground": palette.background.code,
        "notebook.cellHoverBackground": palette.background22.code,
        "notebook.focusedCellBorder": palette.statusBarBackground.code,
        "notebook.focusedEditorBorder": palette.background44.code,
        "notebook.inactiveFocusedCellBorder": palette.background44.code,
        "notebook.selectedCellBackground": palette.background11.code,
        "panel.border": palette.background.code,
        "peekView.border": palette.statusBarBackground.code,
        "peekViewEditor.background": palette.background11.code,
        "peekViewEditor.matchHighlightBackground": palette.background33.code,
        "peekViewResult.background": palette.background11.code,
        "peekViewResult.selectionBackground": palette.background33.code,
        "peekViewTitle.background": palette.background11.code,
        "peekViewTitleLabel.foreground": palette.backgroundaa.code,
        "progressBar.background": palette.progressBarBackground.code,
        "quickInputList.focusBackground": palette.background55.code,
        "sash.hoverBorder": palette.statusBarBackground.code,
        "scrollbar.shadow": `${palette.background11.code}00`,
        "scrollbarSlider.activeBackground": palette.minimapSelectionHighlight.code,
        "scrollbarSlider.background": `${palette.background44.code}77`,
        "scrollbarSlider.hoverBackground": `${palette.background55.code}88`,
        "settings.headerForeground": palette.foregroundColor.code,
        "sideBar.background": palette.background.code,
        "sideBarSectionHeader.background": palette.background11.code,
        "sideBySideEditor.horizontalBorder": palette.sideBySideEditorBorder.code,
        "sideBySideEditor.verticalBorder": palette.background.code,
        "statusBar.background": palette.statusBarBackground.code,
        "statusBar.debuggingBackground": palette.statusBarDebuggingBackground.code,
        "statusBar.debuggingBorder": palette.statusBarDebuggingBorder.code,
        "statusBar.debuggingForeground": palette.statusBarDebuggingForeground.code,
        "statusBar.foreground": palette.statusBarForeground.code,
        "statusBar.noFolderBackground": palette.statusBarNoFolderBackground.code,
        "statusBar.noFolderForeground": palette.statusBarNoFolderForeground.code,
        "statusBarItem.hoverBackground": `${palette.background11.code}44`,
        "statusBarItem.remoteBackground": palette.statusBarRemoteBackground.code,
        "statusBarItem.remoteForeground": palette.statusBarRemoteForeground.code,
        "symbolIcon.booleanForeground": palette.literalConstantColor.code,
        "symbolIcon.classForeground": palette.namespaceClassStructColor.code,
        "symbolIcon.colorForeground": palette.literalConstantColor.code,
        "symbolIcon.constantForeground": palette.constantColor.code,
        "symbolIcon.constructorForeground": palette.typeColor.code,
        "symbolIcon.enumeratorForeground": palette.namespaceClassStructColor.code,
        "symbolIcon.enumeratorMemberForeground": palette.propertyColor.code,
        "symbolIcon.fieldForeground": palette.propertyColor.code,
        "symbolIcon.functionForeground": palette.functionDeclarationColor.code,
        "symbolIcon.interfaceForeground": palette.namespaceClassStructColor.code,
        "symbolIcon.keyForeground": palette.propertyColor.code,
        "symbolIcon.keywordForeground": palette.keywordColor.code,
        "symbolIcon.methodForeground": palette.functionDeclarationColor.code,
        "symbolIcon.moduleForeground": palette.namespaceClassStructColor.code,
        "symbolIcon.namespaceForeground": palette.namespaceClassStructColor.code,
        "symbolIcon.nullForeground": palette.literalConstantColor.code,
        "symbolIcon.numberForeground": palette.literalConstantColor.code,
        "symbolIcon.operatorForeground": palette.operatorColor.code,
        "symbolIcon.packageForeground": palette.namespaceClassStructColor.code,
        "symbolIcon.propertyForeground": palette.propertyColor.code,
        "symbolIcon.stringForeground": palette.stringColor.code,
        "symbolIcon.structForeground": palette.namespaceClassStructColor.code,
        "symbolIcon.textForeground": palette.stringColor.code,
        "symbolIcon.typeParameterForeground": palette.typeColor.code,
        "symbolIcon.unitForeground": palette.literalConstantColor.code,
        "symbolIcon.variableForeground": palette.parameterArgumentColor.code,
        "tab.activeBackground": palette.background22.code,
        "tab.activeForeground": palette.backgrounddd.code,
        "tab.activeModifiedBorder": palette.statusBarNoFolderBackground.code,
        "tab.border": palette.background.code,
        "tab.hoverBackground": palette.background33.code,
        "tab.hoverBorder": palette.activeIndentGuideBackground.code,
        "tab.inactiveBackground": palette.background.code,
        "tab.inactiveForeground": palette.background77.code,
        "tab.inactiveModifiedBorder": palette.statusBarDebuggingBackground.code,
        "tab.unfocusedHoverBackground": palette.background25.code,
        "terminal.ansiBlack": palette.ansiBlack.code,
        "terminal.ansiBlue": palette.ansiBlue.code,
        "terminal.ansiBrightBlack": palette.ansiBrightBlack.code,
        "terminal.ansiBrightBlue": palette.ansiBrightBlue.code,
        "terminal.ansiBrightCyan": palette.ansiBrightCyan.code,
        "terminal.ansiBrightGreen": palette.ansiBrightGreen.code,
        "terminal.ansiBrightMagenta": palette.ansiBrightMagenta.code,
        "terminal.ansiBrightRed": palette.ansiBrightRed.code,
        "terminal.ansiBrightWhite": palette.ansiBrightWhite.code,
        "terminal.ansiBrightYellow": palette.ansiBrightYellow.code,
        "terminal.ansiCyan": palette.ansiCyan.code,
        "terminal.ansiGreen": palette.ansiGreen.code,
        "terminal.ansiMagenta": palette.ansiMagenta.code,
        "terminal.ansiRed": palette.ansiRed.code,
        "terminal.ansiWhite": palette.ansiWhite.code,
        "terminal.ansiYellow": palette.ansiYellow.code,
        "terminal.foreground": palette.ansiWhite.code,
        "textLink.foreground": palette.textLinkForeground.code,
        "titleBar.activeBackground": palette.background.code,
        "titleBar.activeForeground": palette.backgroundaa.code,
        "titleBar.inactiveBackground": palette.background.code,
        "titleBar.inactiveForeground": palette.background99.code,
        "widget.shadow": `${palette.background11.code}00`,
        focusBorder: palette.background.code,
    };
    return colors;
}
