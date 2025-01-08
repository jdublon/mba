/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/$1",
  },
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.tests.jsx"],
};

export default createJestConfig(config);
