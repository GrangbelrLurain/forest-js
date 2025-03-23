import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  outDir: "bin",
  format: ["esm"],
  target: "node18",
  splitting: false,
  shims: false,
  clean: true,
  dts: false,
  minify: true,
});
