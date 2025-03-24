// packages/cli/index.ts
import { fetchPureTemplate } from "./create.js";
import { resolve } from "path";
import { existsSync } from "fs";

const args = process.argv.slice(2);
const targetDir = args[0] || "forest-app";
const root = resolve(process.cwd(), targetDir);

const run = async () => {
  if (existsSync(root)) {
    console.error(`\n❌ folder '${targetDir}' already exists`);
    process.exit(1);
  }

  fetchPureTemplate(root)
    .then(() => {
      console.log(`\n✅ Project created at: ${root}`);
      console.log(`\nNext steps:\n  cd ${targetDir}\n  pnpm install\n  pnpm dev`);
    })
    .catch((err) => {
      console.error("🚨 error occurred during project creation", err);
      process.exit(1);
    });
};

export { run };
