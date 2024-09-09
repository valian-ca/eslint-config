import eslintPluginImportX from 'eslint-plugin-import-x'
import { configs as tsConfigs } from 'typescript-eslint'

import { testFiles } from './jest.mjs'

export const importTypescript = [
  eslintPluginImportX.flatConfigs.typescript,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'off',
    },
    settings: {
      'import-x/resolver': 'eslint-import-resolver-typescript',
    },
  },
]

export const typescript = [
  ...importTypescript,
  ...tsConfigs.strictTypeChecked,
  ...tsConfigs.stylisticTypeChecked,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ...tsConfigs.disableTypeChecked,
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      'default-case': 'off',

      '@typescript-eslint/no-non-null-assertion': 'warn',

      '@typescript-eslint/no-invalid-void-type': ['error', { allowAsThisParameter: true }],
      '@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'generic' }],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNullish: true }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
  {
    files: testFiles,
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
]
