import eslintPluginNode from 'eslint-plugin-n'

export const node = [
  eslintPluginNode.configs['flat/recommended-module'],
  {
    rules: {
      'n/no-extraneous-import': 'off',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
    },
  },
]

export const mixedEsmAndCjs = [
  ...eslintPluginNode.configs['flat/mixed-esm-and-cjs'],
  {
    rules: {
      'n/no-extraneous-import': 'off',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
    },
  },
]

export const cjs = [
  eslintPluginNode.configs['flat/recommended-script'],
  {
    rules: {
      'n/no-extraneous-import': 'off',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
    },
  },
]

export default node
