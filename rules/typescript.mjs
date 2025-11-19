import { defineConfig } from 'eslint/config'
import { flatConfigs as importXConfigs } from 'eslint-plugin-import-x'
import { configs as tsConfigs } from 'typescript-eslint'

export const importTypescript = defineConfig([
  importXConfigs.typescript,
  {
    name: 'valian/typescript/import-config',
    files: ['**/*.{ts,tsx,cts,mts}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      'import-x/resolver': 'eslint-import-resolver-typescript',
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
])

export const typescript = defineConfig([
  ...importTypescript,
  {
    name: 'valian/typescript/type-checked',
    files: ['**/*.{ts,tsx,cts,mts}'],
    extends: [tsConfigs.strictTypeChecked, tsConfigs.stylisticTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
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
    name: 'valian/typescript/test-files',
    files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
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
    },
  },
])

export default typescript
