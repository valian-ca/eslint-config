import plugin from '@vitest/eslint-plugin'
import { defineConfig } from 'eslint/config'

import { testFiles } from './test-files.mjs'

export const vitest = defineConfig([
  {
    name: 'valian/vitest/recommended',
    files: testFiles,
    extends: [plugin.configs.recommended],
  },
])

export default vitest
