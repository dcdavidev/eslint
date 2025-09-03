# @dcdavidev/eslint-plugin

A collection of shareable ESLint configurations for modern JavaScript and TypeScript projects.  
It bundles rules and presets for common use cases like JSON, Markdown, JSDoc, Prettier, and recommended defaults.

## Installation

First, install ESLint and this plugin:

```bash
npm install --save-dev eslint @dcdavidev/eslint-plugin
# or with
yarn add --dev eslint @dcdavidev/eslint-plugin
# or with
pnpm add -D eslint @dcdavidev/eslint-plugin
# or with
bun add -D eslint @dcdavidev/eslint-plugin
```

## Usage

Extend the configurations you need in your ESLint config file (`eslint.config.js` or `.eslintrc.js`):

```js
import plugin from '@dcdavidev/eslint-plugin';

export default [
  {
    extends: [
      'plugin:@dcdavidev/recommended', // full recommended config
      // or 'plugin:@dcdavidev/recommended/base',
      // or pick one or more specific configs:
      // 'plugin:@dcdavidev/javascriptBase',
      // 'plugin:@dcdavidev/typescriptBase',
      // 'plugin:@dcdavidev/prettier',
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
import plugin from '@dcdavidev/eslint-plugin';

export default [
  {
    extends: ['plugin:@dcdavidev/typescriptBase', 'plugin:@dcdavidev/prettier'],
  },
];
```

## Contributing

Run Nx commands to typecheck, build, build-deps, whatch-deps, lint or nx-release-publish:

```bash
pnpm nx run @dcdavidev/eslint-plugin:{build,build-deps,whatch-deps,lint,nx-release-publish}
```

I highly discourage to run nx-release-publish though.
If you wan to publish a package, since ESLint will complain that you haven't build the eslint-plugin so it can't find it inside the root eslint.config.mjs,
I highly encourage to use one of the following commands:

- `pnpm run safe:first-release`: if it is your first release.
- `pnpm run safe:release`: otherwise.

### License

[MIT License](./LICENSE)
