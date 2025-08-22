import { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import jsdoc from 'eslint-plugin-jsdoc';

const configJsdoc: Linter.Config[] = defineConfig([
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx'],
    extends: [jsdoc.configs['flat/recommended-typescript-flavor-error']],
  },
  {
    files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],
    extends: [jsdoc.configs['flat/recommended-typescript-error']],
  },
]);

export default configJsdoc;
