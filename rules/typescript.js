module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',

      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint'],
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

        // https://typescript-eslint.io/blog/consistent-type-imports-and-exports-why-and-how/
        '@typescript-eslint/consistent-type-imports': 'error',

        '@typescript-eslint/restrict-template-expressions': ['error', { allowNullish: true }],
      },

      overrides: [
        {
          files: ['tests/**', '__tests__/**', '*.test.ts', '*.test.tsx', '*.spec.ts', '*.spec.tsx'],
          rules: {
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/unbound-method': 'off',
          },
        },
      ],
    },
  ],
}
