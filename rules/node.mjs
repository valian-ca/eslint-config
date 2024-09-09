import eslintPluginNode from 'eslint-plugin-n'

export const node = [
  eslintPluginNode.configs['flat/recommended-module'],
  {
    files: ['**/*.{ts,tsx}'],

    rules: {
      'n/no-extraneous-import': 'off',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
    },
  },
]
