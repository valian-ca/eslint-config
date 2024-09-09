import globals from 'globals'

import { importTypescript } from './rules/typescript.mjs'
import { config } from './index.mjs'

export default [
  ...config.base,
  ...importTypescript,
  ...config.importSort,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    rules: {
      'unicorn/prefer-module': 'off',
    },
  },
]
