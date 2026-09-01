// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from '@angular-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.ts'],
    ignores: ['**/node_modules/**', '**/dist/**'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@angular-eslint': angular,
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      '@angular-eslint/component-class-suffix': 'off',
      '@angular-eslint/directive-class-suffix': 'warn',
      '@angular-eslint/use-lifecycle-interface': 'warn',
      '@angular-eslint/no-empty-lifecycle-method': 'warn',
      '@angular-eslint/prefer-inject': 'warn',
      '@angular-eslint/prefer-standalone': 'warn',
      '@angular-eslint/no-lifecycle-call': 'error',
      '@angular-eslint/prefer-signals': 'warn',

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "none",
          ignoreRestSiblings: true,
          caughtErrors: "none"
        }
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "no-duplicate-imports": "error",
      "@typescript-eslint/no-unused-expressions": "error",
      "no-var": "error",
      "eqeqeq": ["error", "always"],
      "no-redeclare": "error",
    }

  },
  {
    "files": ["*.html"],
    "parser": "@angular-eslint/template-parser",
    "plugins": ["@angular-eslint/template"],
    "rules": {
      "@angular-eslint/template/no-negated-async": "error"
    }
  },
  ...storybook.configs["flat/recommended"]
];
