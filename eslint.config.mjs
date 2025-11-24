import { defineConfig } from 'eslint/config'

import { config } from './index.mjs'

export default defineConfig([
  ...config.base,
  ...config.typescript,
  ...config.importSort,
  ...config.node,
  ...config.json,
  {
    files: ['**/*.mjs'],
    rules: {
      'import-x/no-rename-default': 'off',
    },
  },
])
