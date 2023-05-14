module.exports = {
  extends: ['plugin:react-hooks/recommended', 'plugin:react/recommended', 'airbnb'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-typescript'],
    },
  ],
  rules: {},
}
