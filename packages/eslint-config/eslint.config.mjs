import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextjs from "eslint-config-next";
import playwright from "eslint-plugin-playwright";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // Core JS/TS rules
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
  },

  // Next.js 15 specific rules (optimized)
  ...compat.config(nextjs),

  // Plugins with type-safe config
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      unicorn,
      playwright,
      prettier,
    },
    rules: {
      // Import sorting
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // Unicorn rules
      "unicorn/no-array-callback-reference": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/prefer-module": "off", // Disabled for all files (better than file-specific override)

      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: { e2e: true },
          replacements: {
            props: false,
            ref: false,
            params: false,
          },
        },
      ],

      // Playwright rules
      "playwright/no-skipped-test": "error",
      "playwright/no-page-pause": "warn",
      "prettier/prettier": "error",
      // Disable conflicting rules
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
    },
  },

  // Global ignores
  {
    ignores: [".next/**", "dist/**", "**/*.d.ts"],
  },
];
