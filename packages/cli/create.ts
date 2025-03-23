// create.ts
import { mkdir, cp, readFile, writeFile } from "fs/promises";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { rename } from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function createAppTemplate(targetDir: string, appName: string) {
  const templateDir = resolve(__dirname, "../templates/pure");
  await mkdir(targetDir, { recursive: true });

  await cp(templateDir, targetDir, { recursive: true });

  const pkgPath = resolve(targetDir, "package.json");
  const pkg = JSON.parse(await readFile(pkgPath, "utf-8"));
  pkg.name = appName;
  await writeFile(pkgPath, JSON.stringify(pkg, null, 2));

  console.log(`\n✅ '${appName}' 프로젝트가 생성되었습니다!`);
  console.log(`📦 위치: ${targetDir}`);
  console.log(`\n🛠  다음 명령어로 시작하세요:`);
  console.log(`  cd ${appName}`);
  console.log(`  pnpm install`);
  console.log(`  pnpm dev\n`);
}
