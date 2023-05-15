module.exports = {
  extends: ['plugin:react-hooks/recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'airbnb'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-typescript'],
    },
  ],
  rules: {},
}
