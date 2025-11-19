import plugin from '@eslint/json'
import { defineConfig } from 'eslint/config'

export const json = defineConfig([
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    plugins: { json: plugin },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json: plugin },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.json5'],
    plugins: { json: plugin },
    language: 'json/json5',
    extends: ['json/recommended'],
  },
])

export default json
