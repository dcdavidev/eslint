import markdown from '@eslint/markdown';
import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';

const markdownGithubTomlConfig: Linter.Config[] = defineConfig([
  {
    files: ['**/*.md', '**/*.markdown', '**/*.mdx'],
    plugins: { markdown },
    language: 'markdown/gfm',
    languageOptions: {
      frontmatter: 'toml',
    },
    rules: {
      'markdown/no-html': 'off',
    },
  },
]);

export default markdownGithubTomlConfig;
