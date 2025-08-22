import { Linter } from 'eslint';

import markdownCommonmarkJsonConfig from './commonmarkJson.js';
import markdownCommonmarkTomlConfig from './commonmarkToml.js';
import markdownCommonmarkYamlConfig from './commonmarkYaml.js';
import markdownGithubJsonConfig from './githubJson.js';
import markdownGithubTomlConfig from './githubToml.js';
import markdownGithubYamlConfig from './githubYaml.js';

type Config =
  | 'commonmarkJson'
  | 'commonmarkToml'
  | 'commonmarkYaml'
  | 'githubJson'
  | 'githubToml'
  | 'githubYaml';
type MarkdownConfigs = Record<Config, Linter.Config[]>;

const markdownConfigs: MarkdownConfigs = {
  commonmarkJson: markdownCommonmarkJsonConfig,
  commonmarkToml: markdownCommonmarkTomlConfig,
  commonmarkYaml: markdownCommonmarkYamlConfig,
  githubJson: markdownGithubJsonConfig,
  githubToml: markdownGithubTomlConfig,
  githubYaml: markdownGithubYamlConfig,
};

export default markdownConfigs;
