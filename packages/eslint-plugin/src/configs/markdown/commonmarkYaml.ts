import markdown from '@eslint/markdown';
import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';

const markdownCommonmarkYamlConfig: Linter.Config[] = defineConfig([
  {
    files: ['**/*.md', '**/*.markdown', '**/*.mdx'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    languageOptions: {
      frontmatter: 'yaml',
    },
    rules: {
      'markdown/no-html': 'off',
    },
  },
]);

export default markdownCommonmarkYamlConfig;
