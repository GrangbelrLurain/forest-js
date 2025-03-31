import { fileURLToPath } from "url";
import { dirname } from "path";

export function getDirname(metaUrl: string): string {
  return dirname(fileURLToPath(metaUrl));
}
