import plugin from '@vitest/eslint-plugin'
import { defineConfig } from 'eslint/config'

import { testFiles } from './test-files.mjs'

export const vitest = defineConfig([
  {
    files: testFiles,
    ...plugin.configs.recommended,
  },
])

export default vitest
