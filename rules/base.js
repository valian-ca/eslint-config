module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'airbnb-base',
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
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:import/typescript', 'airbnb-typescript/base'],
    },
  ],
  rules: {
    'unicorn/switch-case-braces': ['error', 'avoid'],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-module': 'off',

    'import/prefer-default-export': 'off',
  },
}
