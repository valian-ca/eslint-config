import { defineConfig } from 'eslint/config'
import eslintPluginZodX from 'eslint-plugin-zod-x'

export const zod = defineConfig([
  eslintPluginZodX.configs.recommended,
  {
    name: 'valian/zod/custom',
    files: ['**/*.{ts,tsx}'],
    rules: {
      'zod-x/require-schema-suffix': ['error', { suffix: 'Zod' }],
      'zod-x/array-style': ['error', { style: 'method' }],
    },
  },
])

export default zod
