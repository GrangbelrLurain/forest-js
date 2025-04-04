import { runCommand } from "./libs/index.ts";

runCommand(`pnpm exec typedoc --options typedoc.docs.json`);
