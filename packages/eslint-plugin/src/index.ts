import type { ESLint, Linter } from 'eslint';
import { createRequire } from 'module';

import configIgnores from './configs/ignores.js';
import configJson from './configs/json.js';
import markdownConfigs from './configs/markdown/index.js';
import javascriptConfigs from './configs/javascript/index.js';
import typescriptConfigs from './configs/typescript/index.js';
import configJsdoc from './configs/jsdoc.js';
import prettierConfig from './configs/prettier.js';

type Configs =
  | 'ignores'
  | 'json'
  | 'markdownGithubYaml'
  | 'markdownGithubJson'
  | 'markdownGithubToml'
  | 'markdownCommonmarkYaml'
  | 'markdownCommonmarkJson'
  | 'markdownCommonmarkToml'
  | 'javascriptBase'
  | 'javascriptWebpack'
  | 'javascriptYarnPnp'
  | 'typescriptBase'
  | 'typescriptWebpack'
  | 'typescriptYarnPnp'
  | 'jsdoc'
  | 'prettier'
  | 'recommended'
  | 'recommended/base';

type EslintPluginConfigs = Record<Configs, Linter.Config[]>;

// Import version and name from package.json
const req = createRequire(import.meta.url);
const { version, name } = req('../package.json');

/**
 * Eslint Plugin definition
 */
const plugin: ESLint.Plugin = {
  meta: {
    name,
    version,
  },
  configs: {},
  rules: {},
  processors: {},
};

/**
 * Eslint Plugin Configurations
 */
export const configs: EslintPluginConfigs = {
  ignores: configIgnores,
  json: configJson,
  markdownGithubYaml: markdownConfigs.githubYaml,
  markdownGithubJson: markdownConfigs.githubJson,
  markdownGithubToml: markdownConfigs.githubToml,
  markdownCommonmarkYaml: markdownConfigs.commonmarkYaml,
  markdownCommonmarkJson: markdownConfigs.commonmarkJson,
  markdownCommonmarkToml: markdownConfigs.commonmarkToml,
  javascriptBase: javascriptConfigs.base,
  javascriptWebpack: javascriptConfigs.webpack,
  javascriptYarnPnp: javascriptConfigs.yarnPnp,
  typescriptBase: typescriptConfigs.base,
  typescriptWebpack: typescriptConfigs.webpack,
  typescriptYarnPnp: typescriptConfigs.yarnPnp,
  jsdoc: configJsdoc,
  prettier: prettierConfig,

  recommended: [
    ...configIgnores,
    ...javascriptConfigs.base,
    ...typescriptConfigs.base,
    ...configJsdoc,
    ...configJson,
    ...markdownConfigs.githubYaml,
    ...prettierConfig,
  ],

  'recommended/base': [
    ...javascriptConfigs.base,
    ...typescriptConfigs.base,
    ...configJsdoc,
    ...configJson,
    ...markdownConfigs.githubYaml,
  ],
};

// Extends eslint plugin config object with the defined configurations
plugin.configs = Object.assign({}, plugin.configs, configs);

export default plugin;
