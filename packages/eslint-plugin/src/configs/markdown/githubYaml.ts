import markdown from '@eslint/markdown';
import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';

const markdownGithubYamlConfig: Linter.Config[] = defineConfig([
  {
    files: ['**/*.md', '**/*.markdown', '**/*.mdx'],
    plugins: { markdown },
    language: 'markdown/gfm',
    languageOptions: {
      frontmatter: 'yaml',
    },
    rules: {
      'markdown/no-html': 'off',
    },
  },
]);

export default markdownGithubYamlConfig;
