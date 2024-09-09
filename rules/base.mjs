import eslintJavascript from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginImportX from 'eslint-plugin-import-x'
import eslintPluginPromise from 'eslint-plugin-promise'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

import { airbnb } from './airbnb.mjs'
import { comments } from './comments.mjs'

export const base = [
  eslintConfigPrettier,
  eslintJavascript.configs.recommended,
  eslintPluginUnicorn.configs['flat/all'],
  eslintPluginPromise.configs['flat/recommended'],
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.warnings,
  {
    rules: {
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-negated-condition': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/switch-case-braces': ['error', 'avoid'],
    },
  },
  airbnb,
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: {
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  },
  ...comments,
]
