import { execSync } from "child_process";

function runCommand(command: string) {
  try {
    const result = execSync(command, { encoding: "utf-8" });
    console.log(`✅ Command succeeded: ${command}\n${result}`);
  } catch (error) {
    console.error(`❌ Command failed: ${command}\n${error}`);
    process.exit(1); // 빌드 실패 처리
  }
}

const commands = ["node packages/core/dist/cli.js --help", "node packages/core/dist/cli.js version", "node packages/core/dist/cli.js init"];

commands.forEach(runCommand);
