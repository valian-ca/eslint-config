import { base } from './rules/base.mjs'
import { importSort } from './rules/import-sort.mjs'
import { jest } from './rules/jest.mjs'
import { json } from './rules/json.mjs'
import { noCycle } from './rules/no-cycle.mjs'
import { node } from './rules/node.mjs'
import { react } from './rules/react.mjs'
import { typescript } from './rules/typescript.mjs'

export const config = {
  base,
  typescript,
  importSort,
  noCycle,
  jest,
  react,
  node,
  json,
}
