// eslint-disable-next-line import-x/no-rename-default
import vitestPlugin from '@vitest/eslint-plugin'

import { testFiles } from './test-files.mjs'

export const vitest = [
  {
    files: testFiles,
    ...vitestPlugin.configs.recommended,
  },
]
