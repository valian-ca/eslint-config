import reactPlugin from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export const react = [
  {
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'unicorn/filename-case': ['error', { cases: { kebabCase: true } }],
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  reactPlugin.configs.flat['jsx-runtime'],
  {
    plugins: {
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
  },
  {
    plugins: {
      'react-refresh': eslintPluginReactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
    },
  },
  {
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

      // from eslint-config-airbnb/rules
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],

      'react/jsx-no-useless-fragment': 'error',
      'react/no-invalid-html-attribute': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/button-has-type': [
        'error',
        {
          button: true,
          submit: true,
          reset: false,
        },
      ],
    },
  },
]
