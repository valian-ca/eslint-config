import { defineConfig } from 'eslint/config'
import eslintPluginNode from 'eslint-plugin-n'

export const node = defineConfig([
  {
    files: ['**/*.{js,ts,jsx,tsx,mjs}'],
    extends: [eslintPluginNode.configs['flat/recommended-module']],
    rules: {
      'n/no-extraneous-import': 'off',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
    },
  },
  {
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
    rules: {
      'n/no-extraneous-import': 'off',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
    },
  },
])

export default node
