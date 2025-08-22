import js from '@eslint/js';
import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
// @ts-expect-error no types available
import sortImportRequires from 'eslint-plugin-sort-imports-requires';

import { ERROR, OFF, WARN } from '../../utils/severity.js';

/**
 * ESLint configuration for projects using Webpack.
 * - Supports both ESM (`.js`, `.mjs`) and CommonJS (`.cjs`).
 * - Uses `eslint-import-resolver-webpack` to resolve imports via Webpack config.
 * - Applies import/require sorting rules depending on module type.
 */
const webpackConfig: Linter.Config[] = defineConfig([
  {
    files: ['**/*.js', '**/*.mjs'],
    extends: [
      js.configs.recommended,
      eslintPluginImport.flatConfigs.recommended,
    ],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: { 'simple-import-sort': eslintPluginSimpleImportSort },
    settings: {
      'import/resolver': {
        webpack: {
          config: [
            './webpack.config.js',
            './webpack.config.ts',
            './config/webpack.config.js',
            './config/webpack.config.ts',
          ],
        },
        node: {
          extensions: ['.js', '.jsx', '.mjs', '.cjs', '.json', '.node'],
        },
      },
      'import/extensions': ['.js', '.jsx', '.mjs', '.cjs'],
    },
    rules: {
      'sort-imports': OFF,
      'sort-imports-requires/sort-imports': OFF,
      'sort-imports-requires/sort-requires': OFF,
      'simple-import-sort/imports': ERROR,
      'simple-import-sort/exports': ERROR,
      'import/no-unresolved': OFF,
      'no-undef': WARN,
      'no-use-before-define': [
        ERROR,
        { functions: true, classes: true, variables: true },
      ],
    },
  },
  {
    files: ['**/*.cjs'],
    extends: [
      js.configs.recommended,
      eslintPluginImport.flatConfigs.recommended,
    ],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'commonjs' },
    plugins: { 'sort-imports-requires': sortImportRequires },
    settings: {
      'import/resolver': {
        webpack: {
          config: [
            './webpack.config.js',
            './webpack.config.ts',
            './config/webpack.config.js',
            './config/webpack.config.ts',
          ],
        },
        node: {
          extensions: ['.js', '.jsx', '.mjs', '.cjs', '.json', '.node'],
        },
      },
      'import/extensions': ['.js', '.jsx', '.mjs', '.cjs'],
    },
    rules: {
      'sort-imports': OFF,
      'simple-import-sort/imports': OFF,
      'simple-import-sort/exports': OFF,
      'sort-imports-requires/sort-requires': [ERROR, { unsafeAutofix: true }],
      'sort-imports-requires/sort-imports': [ERROR, { unsafeAutofix: true }],
      'import/no-unresolved': OFF,
      'no-undef': WARN,
      'no-use-before-define': [
        ERROR,
        { functions: true, classes: true, variables: true },
      ],
    },
  },
  {
    files: ['**/cspell.config.mjs'],
    rules: { 'import/named': OFF },
  },
  {
    files: ['eslint.config.{js,cjs,mjs}', '**/eslint.config.{js,cjs,mjs}'],
    rules: {
      'import/no-named-as-default': OFF,
    },
  },
]);

export default webpackConfig;
