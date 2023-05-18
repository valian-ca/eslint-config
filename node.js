module.exports = {
  extends: [
    './rules/base',
    './rules/typescript',
    './rules/jest',
    './rules/node',
    './rules/airbnb-overrides.js',
    './rules/prettier',
  ].map(require.resolve),
}
