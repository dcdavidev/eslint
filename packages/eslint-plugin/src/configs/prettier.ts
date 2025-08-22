import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettierFlat from 'eslint-config-prettier/flat';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import jsoncParser from 'jsonc-eslint-parser'; // <-- import corretto
import { ERROR, OFF } from '../utils/severity.js';

const prettierConfig: Linter.Config[] = defineConfig([
  {
    files: [
      '**/*.js',
      '**/*.cjs',
      '**/*.mjs',
      '**/*.jsx',
      '**/*.ts',
      '**/*.mts',
      '**/*.cts',
      '**/*.tsx',
      '**/*.vue',
    ],
    plugins: { prettier: eslintPluginPrettier },
    extends: [eslintConfigPrettierFlat],
    rules: { 'prettier/prettier': ERROR },
  },
  {
    files: ['**/*.html', '**/*.css', '**/*.scss', '**/*.less'],
    plugins: { prettier: eslintPluginPrettier },
    extends: [eslintConfigPrettierFlat],
    rules: { 'prettier/prettier': ERROR },
  },
  {
    files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    languageOptions: { parser: jsoncParser },
    plugins: { prettier: eslintPluginPrettier },
    extends: [eslintConfigPrettierFlat],
    rules: { 'prettier/prettier': ERROR },
  },
  {
    files: ['**/*.md', '**/*.markdown', '**/*.mdx'],
    plugins: { prettier: eslintPluginPrettier },
    extends: [eslintConfigPrettierFlat],
    rules: { 'prettier/prettier': OFF },
  },
]);

export default prettierConfig;
