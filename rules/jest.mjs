import jestEslint from 'eslint-plugin-jest'

import { testFiles } from './test-files.mjs'

export const jest = [
  {
    files: testFiles,
    ...jestEslint.configs['flat/recommended'],
  },
  {
    files: testFiles,
    ...jestEslint.configs['flat/style'],
  },
]

export default jest
