import { defineConfig } from 'eslint/config'

export const noCycle = defineConfig([
  {
    name: 'valian/no-cycle',
    rules: {
      'import-x/no-cycle': 'error',
    },
  },
])

export default noCycle
