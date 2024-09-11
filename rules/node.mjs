import eslintPluginNode from 'eslint-plugin-n'

export const node = [
  ...eslintPluginNode.configs['flat/mixed-esm-and-cjs'],
  {
    rules: {
      'n/no-extraneous-import': 'off',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
    },
  },
]
