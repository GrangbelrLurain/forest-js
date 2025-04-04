import { execSync } from "child_process";

export function runCommand(command: string) {
  try {
    const result = execSync(command, { encoding: "utf-8" });
    console.log(`✅ Command succeeded: ${command}\n${result}`);
  } catch (error) {
    console.error(`❌ Command failed: ${command}\n${error}`);
    process.exit(1);
  }
}
