import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettierFlat from 'eslint-config-prettier/flat';
import eslintPluginPrettier from 'eslint-plugin-prettier';

const prettierConfig: Linter.Config[] = defineConfig([
  {
    files: [
      // JavaScript
      '**/*.js',
      '**/*.cjs',
      '**/*.mjs',
      '**/*.jsx',

      // TypeScript
      '**/*.ts',
      '**/*.mts',
      '**/*.cts',
      '**/*.tsx',

      // Vue
      '**/*.vue',

      // HTML & CSS
      '**/*.html',
      '**/*.htm',
      '**/*.css',
      '**/*.scss',
      '**/*.less',

      // Handlebars
      '**/*.hbs',

      // JSON
      '**/*.json',
      '**/*.jsonc',
      '**/*.json5',

      // GraphQL
      '**/*.graphql',
      '**/*.gql',

      // Markdown
      '**/*.md',
      '**/*.markdown',
      '**/*.mdx',

      // YAML
      '**/*.yaml',
      '**/*.yml',
    ],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    extends: [eslintConfigPrettierFlat],
    rules: {
      'prettier/prettier': 'error',
    },
  },
]);

export default prettierConfig;
