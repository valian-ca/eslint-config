import { defineConfig } from 'eslint/config'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { flatConfigs as importXConfigs } from 'eslint-plugin-import-x'
import { configs as tsConfigs } from 'typescript-eslint'

export const typescript = defineConfig([
  {
    name: 'valian/typescript/type-checked',
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    extends: [importXConfigs.typescript, tsConfigs.strictTypeChecked, tsConfigs.stylisticTypeChecked],
    settings: {
      'import-x/resolver-next': [createTypeScriptImportResolver()],
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      'no-unused-vars': 'off',

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

      'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import-x/extensions': [
        'error',
        'always',
        {
          mjs: 'never',
          mts: 'never',
          cjs: 'never',
          cts: 'never',
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
  },
  {
    name: 'valian/typescript/test-files',
    files: [
      '**/__tests__/**/*.{ts,tsx}',
      '**/__mocks__/**/*.{ts,tsx}',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.ts',
      '**/*.spec.tsx',
    ],
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
  {
    name: 'valian/typescript/dts',
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',

      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    },
  },
])

export default typescript
