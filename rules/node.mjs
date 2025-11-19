import { defineConfig } from 'eslint/config'
import eslintPluginNode from 'eslint-plugin-n'

export const node = defineConfig([
  {
    name: 'valian/node/recommended-module',
    files: ['**/*.{js,ts,jsx,tsx,mjs}'],
    extends: [eslintPluginNode.configs['flat/recommended-module']],
    rules: {
      'n/no-extraneous-import': 'off',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
    },
  },
  {
    name: 'valian/node/recommended-script',
    files: ['**/*.{cjs}'],
    extends: [eslintPluginNode.configs['flat/recommended-script']],
    rules: {
      'n/no-extraneous-import': 'off',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
    },
  },
])

export const mixedEsmAndCjs = defineConfig([
  ...eslintPluginNode.configs['flat/mixed-esm-and-cjs'],
  {
    name: 'valian/node/mixed-esm-and-cjs/custom',
    rules: {
      'n/no-extraneous-import': 'off',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
    },
  },
])

export default node
