import tsBaseConfig from './base.js';
import tsWebpackConfig from './webpack.js';
import tsYarnPnpConfig from './yarn-pnp.js';
import type { Linter } from 'eslint';

type Config = 'base' | 'webpack' | 'yarnPnp';
type TypescriptConfigs = Record<Config, Linter.Config[]>;

const typescriptConfigs: TypescriptConfigs = {
  base: tsBaseConfig,
  webpack: tsWebpackConfig,
  yarnPnp: tsYarnPnpConfig,
};

export default typescriptConfigs;
