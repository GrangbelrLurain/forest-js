import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/runtime/**/*.test.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/tests/types/"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
};

export default config;
