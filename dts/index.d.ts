import type { Linter } from 'eslint'

export const config: {
  base: Linter.Config[]
  typescript: Linter.Config[]
  importSort: Linter.Config[]
  noCycle: Linter.Config[]
  jest: Linter.Config[]
  react: Linter.Config[]
  node: Linter.Config[]
  json: Linter.Config[]
  vitest: Linter.Config[]
  zod: Linter.Config[]
}

export const base: Linter.Config[]
export const importSort: Linter.Config[]
export const jest: Linter.Config[]
export const json: Linter.Config[]
export const noCycle: Linter.Config[]
export const node: Linter.Config[]
export const react: Linter.Config[]
export const storybook: Linter.Config[]
export const typescript: Linter.Config[]
export const vitest: Linter.Config[]
export const zod: Linter.Config[]
