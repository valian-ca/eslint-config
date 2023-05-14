module.exports = {
  extends: ['./rules/base', './rules/typescript', './rules/jest', './rules/prettier'].map(require.resolve),
}
