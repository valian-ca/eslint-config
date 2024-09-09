import { base } from './rules/base.mjs'
import { importSort } from './rules/import-sort.mjs'
import { jest } from './rules/jest.mjs'
import { node } from './rules/node.mjs'
import { react } from './rules/react.mjs'
import { tailwind } from './rules/tailwind.mjs'
import { typescript } from './rules/typescript.mjs'

export const config = {
  base,
  typescript,
  importSort,
  jest,
  react,
  tailwind,
  node,
}
