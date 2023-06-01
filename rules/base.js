module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  rules: {
    'eslint-comments/no-unused-disable': 'warn',

    'unicorn/catch-error-name': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-negated-condition': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/switch-case-braces': ['error', 'avoid'],
  },

  overrides: [
    {
      extends: ['plugin:import/typescript', 'airbnb-typescript/base'],
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['.eslintrc.js'],
      rules: {
        'sort-keys': ['error', 'asc', { allowLineSeparatedGroups: true }],
      },
    },
  ],
}
