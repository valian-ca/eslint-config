import jsonPlugin from '@eslint/json'

export const json = [
  {
    plugins: {
      json: jsonPlugin,
    },
    files: ['**/*.json'],
    language: 'json/json',
    rules: {
      'json/no-duplicate-keys': 'error',
      'json/no-empty-keys': 'error',
    },
  },
  {
    plugins: {
      json: jsonPlugin,
    },
    files: ['**/*.jsonc'],
    language: 'json/jsonc',
    rules: {
      'json/no-duplicate-keys': 'error',
      'json/no-empty-keys': 'error',
    },
  },
  {
    plugins: {
      json: jsonPlugin,
    },
    files: ['**/*.json5'],
    language: 'json/json5',
    rules: {
      'json/no-duplicate-keys': 'error',
      'json/no-empty-keys': 'error',
    },
  },
]
