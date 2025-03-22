import { spawn } from "child_process";

// 사용자 입력으로 프로젝트명 받기
const args = process.argv.slice(2);
const projectName = args[0] || "tree-app";

// tree CLI 실행 (templates/pure 복사용)
const child = spawn("npx", ["@tree/cli", "init", projectName], {
  stdio: "inherit",
});
