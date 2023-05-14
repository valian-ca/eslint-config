module.exports = {
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
