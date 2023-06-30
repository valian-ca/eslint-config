module.exports = {
  extends: [
    './rules/base',
    './rules/typescript',
    './rules/jest',
    './rules/react',
    './rules/airbnb-overrides',
    './rules/restricted-imports',
    './rules/import-sort',
    './rules/prettier',
  ].map(require.resolve),

  rules: {
    'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
  },
}
