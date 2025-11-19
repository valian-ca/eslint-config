import { defineConfig } from 'eslint/config'
import reactPlugin from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export const react = defineConfig([
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.{ts,tsx,jsx,js}'],
    extends: [
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      eslintPluginReactRefresh.configs.recommended,
      eslintPluginReactHooks.configs.flat.recommended,
    ],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],

      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/display-name': 'off',

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
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'unicorn/filename-case': ['error', { cases: { kebabCase: true } }],
    },
  },
])

export default react
