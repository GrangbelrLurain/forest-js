import { runCommand } from "./libs/index.ts";

runCommand(`npx concat-md packages/docs > README.md`);

runCommand(`npx concat-md packages/docs > packages/core/README.md`);
