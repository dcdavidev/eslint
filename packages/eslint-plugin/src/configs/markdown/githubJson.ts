import markdown from '@eslint/markdown';
import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';

import { OFF } from '../../utils/severity.js';

const markdownGithubJsonConfig: Linter.Config[] = defineConfig([
  {
    files: ['**/*.md', '**/*.markdown', '**/*.mdx'],
    plugins: { markdown },
    language: 'markdown/gfm',
    languageOptions: {
      frontmatter: 'json',
    },
    rules: {
      'markdown/no-html': OFF,
    },
  },
]);

export default markdownGithubJsonConfig;
