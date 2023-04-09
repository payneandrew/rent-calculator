/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    clearMocks: true,
    coverageProvider: "v8",
    preset: "ts-jest",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  };
};
