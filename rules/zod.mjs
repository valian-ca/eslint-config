import { defineConfig } from 'eslint/config'
import eslintPluginZod from 'eslint-plugin-zod'

export const zod = defineConfig([
  eslintPluginZod.configs.recommended,
  {
    name: 'valian/zod/custom',
    files: ['**/*.{ts,tsx}'],
    rules: {
      'zod/require-schema-suffix': ['error', { suffix: 'Zod' }],
      'zod/array-style': ['error', { style: 'method' }],
    },
  },
])

export default zod
