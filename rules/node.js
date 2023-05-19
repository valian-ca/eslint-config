module.exports = {
  rules: {
    // remove duplicate rule
    'unicorn/no-process-exit': 'off',

    // until we use ESM
    'unicorn/prefer-top-level-await': 'off',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      extends: ['plugin:n/recommended-module'],
      rules: {
        'n/no-extraneous-import': 'off',
        'n/no-missing-import': 'off',
        'n/no-unpublished-import': 'off',
      },
    },
  ],
}
