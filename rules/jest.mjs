import { defineConfig } from 'eslint/config'
import jestEslint from 'eslint-plugin-jest'

import { testFiles } from './test-files.mjs'

export const jest = defineConfig([
  {
    name: 'valian/jest/recommended',
    files: testFiles,
    extends: [jestEslint.configs['flat/recommended']],
  },
  {
    name: 'valian/jest/flat/style',
    files: testFiles,
    extends: [jestEslint.configs['flat/style']],
  },
])

export default jest
