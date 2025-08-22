import js from '@eslint/js';
import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginImport from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { ERROR, OFF, WARN } from '../../utils/severity.js';

const tsBaseConfig: Linter.Config[] = defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      eslintPluginImport.flatConfigs.recommended,
      eslintPluginImport.flatConfigs.typescript,
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: process.cwd(),
        noWarnOnMultipleProjects: true,
      },
      globals: { ...globals.node },
    },
    plugins: { 'simple-import-sort': simpleImportSort },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: true,
        },
        node: {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.mjs',
            '.cjs',
            '.json',
            '.node',
          ],
          moduleDirectory: ['node_modules', 'src'],
        },
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', '.cts'],
      },
    },
    rules: {
      'sort-imports': OFF,
      'simple-import-sort/imports': ERROR,
      'simple-import-sort/exports': ERROR,
      'import/no-unresolved': OFF,
      'import/no-named-as-default-member': OFF,
      'no-undef': WARN,
      'no-use-before-define': OFF,
      '@typescript-eslint/no-use-before-define': [
        ERROR,
        { functions: true, classes: true, variables: true },
      ],
    },
  },
]);

export default tsBaseConfig;
