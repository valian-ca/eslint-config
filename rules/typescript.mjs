import { flatConfigs as importXConfigs } from 'eslint-plugin-import-x'
import { configs as tsConfigs } from 'typescript-eslint'

import { testFiles } from './test-files.mjs'

export const importTypescript = [
  importXConfigs.typescript,
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
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
  ...tsConfigs.strictTypeChecked.map((config) => ({ files: ['**/*.{ts,tsx}'], ...config })),
  ...tsConfigs.stylisticTypeChecked.map((config) => ({ files: ['**/*.{ts,tsx}'], ...config })),
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ...tsConfigs.disableTypeChecked,
  },
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      camelcase: 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'variable',
          modifiers: ['destructured'],
          format: null,
        },
      ],

      '@typescript-eslint/switch-exhaustiveness-check': ['error', { considerDefaultExhaustiveForUnions: true }],
      'default-case': 'off',

      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',

      '@typescript-eslint/no-invalid-void-type': ['error', { allowAsThisParameter: true }],
      '@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'generic' }],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNullish: true }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignorePrimitives: true }],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
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
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
    },
  },
]

export default typescript
