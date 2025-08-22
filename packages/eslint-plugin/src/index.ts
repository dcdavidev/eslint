import type { ESLint } from 'eslint';
import { createRequire } from 'module';

import configIgnores from './configs/ignores.js';

const require = createRequire(import.meta.url);
const { version, name } = require('../package.json');

const plugin: ESLint.Plugin = {
  meta: {
    name,
    version,
  },
  configs: {},
  rules: {},
  processors: {},
};

plugin.configs = Object.assign({}, plugin.configs, {
  ignores: configIgnores,
});

export default plugin;
