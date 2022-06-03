import fs from "fs";
import path from "path";

export function themeWriter(outFile: string, theme: string, message: string): void {
  const baseOutputDir = "./../color-themes";
  const output = path.resolve(baseOutputDir, outFile);
  ensureDirExists(path.dirname(output));

  fs.writeFile(output, theme, (err) => {
    if (err) {
      throw err;
    }
    console.log(message);
  });
}

function ensureDirExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}
