module.exports = {
  extends: ['./rules/base', './rules/typescript', './rules/jest', './rules/react', './rules/prettier'].map(
    require.resolve
  ),
}
