import { execSync } from "child_process";
import path from "path";
import { getDirname } from "./get-dirname.script.ts";

const docPath = path.resolve(getDirname(import.meta.url), "../packages/docs");

function runCommand(command: string) {
  try {
    const result = execSync(command, { encoding: "utf-8" });
    console.log(`✅ Documentation generated: ${command}\n${result}`);
  } catch (error) {
    console.error(`❌ Documentation generation failed: ${command}\n${error}`);
    process.exit(1);
  }
}

// TypeDoc 실행
runCommand(`npx typedoc --out ${docPath} packages/core/dist/index.d.ts`);
