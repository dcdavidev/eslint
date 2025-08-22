# @davdevx/eslint-plugin

A collection of shareable ESLint configurations for modern JavaScript and TypeScript projects.  
It bundles rules and presets for common use cases like JSON, Markdown, JSDoc, Prettier, and recommended defaults.

## Installation

First, install ESLint and this plugin:

```bash
npm install --save-dev eslint @davdevx/eslint-plugin
# or with
yarn add --dev eslint @davdevx/eslint-plugin
# or with
pnpm add -D eslint @davdevx/eslint-plugin
# or with
bun add -D eslint @davdevx/eslint-plugin
```

## Usage

Extend the configurations you need in your ESLint config file (`eslint.config.js` or `.eslintrc.js`):

```js
import plugin from '@davdevx/eslint-plugin';

export default [
  {
    extends: [
      'plugin:@davdevx/recommended', // full recommended config
      // or 'plugin:@davdevx/recommended/base',
      // or pick one or more specific configs:
      // 'plugin:@davdevx/javascriptBase',
      // 'plugin:@davdevx/typescriptBase',
      // 'plugin:@davdevx/prettier',
    ],
  },
];
```

## Available Configurations

- **ignores** – Global ignores for build artifacts, lockfiles, etc.
- **json** – ESLint rules for JSON files.
- **markdownGithubYaml / markdownGithubJson / markdownGithubToml** – Markdown linting with GitHub-flavored Markdown.
- **markdownCommonmarkYaml / markdownCommonmarkJson / markdownCommonmarkToml** – Markdown linting with CommonMark.
- **javascriptBase** – Base configuration for JavaScript.
- **javascriptWebpack** – JavaScript + Webpack projects.
- **javascriptYarnPnp** – JavaScript with Yarn Plug’n’Play.
- **typescriptBase** – Base configuration for TypeScript.
- **typescriptWebpack** – TypeScript + Webpack.
- **typescriptYarnPnp** – TypeScript with Yarn Plug’n’Play.
- **jsdoc** – Rules for JSDoc comments.
- **prettier** – Integrates Prettier with ESLint.
- **recommended** – Full recommended configuration (ignores + JS + TS + JSDoc + JSON + Markdown + Prettier).
- **recommended/base** – Lightweight recommended base (JS + TS + JSDoc + JSON + Markdown).

## Example

For a TypeScript + Prettier project:

```js
import plugin from '@davdevx/eslint-plugin';

export default [
  {
    extends: ['plugin:@davdevx/typescriptBase', 'plugin:@davdevx/prettier'],
  },
];
```

### License

MIT
