import jestEslint from 'eslint-plugin-jest'

export const testFiles = [
  '**/tests/**',
  '**/__tests__/**',
  '**/__mocks__/**',
  '**/*.test.ts',
  '**/*.test.tsx',
  '**/*.spec.ts',
  '**/*.spec.tsx',
]

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
