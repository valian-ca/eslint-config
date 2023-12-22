module.exports = {
  extends: ['plugin:react-hooks/recommended', 'plugin:react/recommended', 'airbnb', 'plugin:react/jsx-runtime'],

  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      extends: ['airbnb-typescript'],
      rules: {
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'unicorn/filename-case': ['error', { cases: { kebabCase: true } }],
      },
    },
  ],
}
