module.exports = {
  extends: [
    './rules/base',
    './rules/typescript',
    './rules/jest',
    './rules/node',
    './rules/airbnb-overrides',
    './rules/restricted-imports',
    './rules/import-sort',
    './rules/prettier',
  ].map(require.resolve),
}
