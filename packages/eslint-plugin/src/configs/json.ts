import json from '@eslint/json';
import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import jsoncParser from 'jsonc-eslint-parser';

import { ERROR, OFF } from '../utils/severity.js';

const configJson: Linter.Config[] = defineConfig([
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    languageOptions: {
      parser: jsoncParser,
      parserOptions: { jsonSyntax: 'json' },
    },
    rules: {
      'no-irregular-whitespace': OFF,
      'json/no-duplicate-keys': ERROR,
    },
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    languageOptions: {
      parser: jsoncParser,
      parserOptions: { jsonSyntax: 'json5' },
    },
    rules: {
      'no-irregular-whitespace': OFF,
      'json/no-duplicate-keys': ERROR,
    },
  },
  {
    files: ['**/*.jsonc', '**/tsconfig*.json', '.vscode/*.json'],
    plugins: { json },
    language: 'json/jsonc',
    languageOptions: {
      parser: jsoncParser,
      parserOptions: { jsonSyntax: 'jsonc' },
    },
    rules: {
      'no-irregular-whitespace': OFF,
      'json/no-duplicate-keys': ERROR,
    },
  },
]);

export default configJson;
