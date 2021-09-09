import { ColorPalette } from "../common/colors.js";
import { workbenchColor } from "./workbench_common.js";

const palette = new ColorPalette();

export const regularWorkbenchColors: workbenchColor = {
  "activityBar.background": /* ............. */ palette.background.code,
  "editorGroup.border": /* ................. */ palette.background.code,
  "editorGroupHeader.tabsBackground": /* ... */ palette.background.code,
  "panel.border": /* ....................... */ palette.background.code,
  "sideBar.background": /* ................. */ palette.background.code,
  "sideBarSectionHeader.background": /* .... */ palette.background11.code,
  "tab.border": /* ......................... */ palette.background.code,
  "tab.inactiveBackground": /* ............. */ palette.background.code,
  "titleBar.activeBackground": /* .......... */ palette.background.code,
  "titleBar.inactiveBackground": /* ........ */ palette.background.code,
};
