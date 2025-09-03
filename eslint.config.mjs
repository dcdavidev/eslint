import davdevx from '@dcdavidev/eslint-plugin';
import nx from '@nx/eslint-plugin';

export default [
  ...davdevx.configs.ignores,
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  ...davdevx.configs.jsdoc,
  ...davdevx.configs.json,
  ...davdevx.configs.markdownGithubYaml,
  ...davdevx.configs.prettier,
];
