import type { Linter } from 'eslint';

import baseConfig from './base.js';
import webpackConfig from './webpack.js';
import yarnPnpConfig from './yarn-pnp.js';

type Config = 'base' | 'webpack' | 'yarnPnp';
type JavascriptConfigs = Record<Config, Linter.Config[]>;

const javascriptConfigs: JavascriptConfigs = {
  base: baseConfig,
  webpack: webpackConfig,
  yarnPnp: yarnPnpConfig,
};

export default javascriptConfigs;
