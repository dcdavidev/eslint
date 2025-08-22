import markdown from '@eslint/markdown';
import { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';

const markdownGithubJsonConfig: Linter.Config[] = defineConfig([
  {
    files: ['**/*.md', '**/*.markdown', '**/*.mdx'],
    plugins: { markdown },
    language: 'markdown/gfm',
    languageOptions: {
      frontmatter: 'json',
    },
    rules: {
      'markdown/no-html': 'off',
    },
  },
]);

export default markdownGithubJsonConfig;
