import eslintPluginZodX from 'eslint-plugin-zod-x'

export const zod = [
  eslintPluginZodX.configs.recommended,
  {
    rules: {
      'zod-x/require-schema-suffix': ['error', { suffix: 'Zod' }],
      'zod-x/array-style': ['error', { style: 'method' }],
    },
  },
]

export default zod
