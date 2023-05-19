module.exports = {
  extends: ['plugin:react-hooks/recommended', 'plugin:react/recommended', 'airbnb', 'plugin:react/jsx-runtime'],

  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',

    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      extends: ['airbnb-typescript'],
    },
  ],
}
