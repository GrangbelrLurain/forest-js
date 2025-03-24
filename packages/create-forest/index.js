#!/usr/bin/env node

import { resolve } from "path";
import { existsSync } from "fs";
import { run } from "@forest-js/cli";

const args = process.argv.slice(2);
const targetDir = args[0] || "forest-app";
const root = resolve(process.cwd(), targetDir);

if (existsSync(root)) {
  console.error(`\n❌ folder '${targetDir}' already exists`);
  process.exit(1);
}

run();
