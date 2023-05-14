module.exports = {
  extends: ['./rules/base', './rules/typescript', './rules/jest', './rules/node', './rules/prettier'].map(
    require.resolve
  ),
}
