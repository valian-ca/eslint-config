// eslint-disable-next-line import-x/no-rename-default
import vitestPlugin from '@vitest/eslint-plugin'

export const testFiles = [
  '**/tests/**',
  '**/__tests__/**',
  '**/__mocks__/**',
  '**/*.test.ts',
  '**/*.test.tsx',
  '**/*.spec.ts',
  '**/*.spec.tsx',
]

export const vitest = [
  {
    files: testFiles,
    ...vitestPlugin.configs.recommended,
  },
]
