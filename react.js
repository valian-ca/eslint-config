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
}
