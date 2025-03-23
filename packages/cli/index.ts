// packages/cli/index.ts
import { createAppTemplate } from "./create.js";
import { basename, resolve } from "path";
import { existsSync } from "fs";

const args = process.argv.slice(2);
const targetDir = args[0] || "forest-app";
const root = resolve(process.cwd(), targetDir);

if (existsSync(root)) {
  console.error(`\n❌ 폴더 '${targetDir}' 이(가) 이미 존재합니다.`);
  process.exit(1);
}

createAppTemplate(root, basename(root)).catch((err) => {
  console.error("🚨 프로젝트 생성 중 오류 발생:", err);
  process.exit(1);
});

export { createAppTemplate };
