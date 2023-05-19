module.exports = {
  extends: ['./index'].map(require.resolve),
  rules: {
    'unicorn/no-array-callback-reference': 'off',

    'sort-keys': ['error', 'asc', { allowLineSeparatedGroups: true }],
  },
}
