<!-- markdownlint-disable -->

[![npm version](http://img.shields.io/npm/v/@valian/eslint-config.svg?style=flat)](https://npmjs.org/package/@valian/eslint-config 'View this project on npm')
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

<!-- markdownlint-restore -->

# eslint-config

Sharable eslint config created and used by [Valian](https://valian.ca)

## eslint plugins and config used

### Base configuration

- [`@eslint/js`](https://www.npmjs.com/package/@eslint/js) - Core ESLint rules
- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) - TypeScript-specific linting rules
- [`@stylistic/eslint-plugin`](https://www.npmjs.com/package/@stylistic/eslint-plugin) - Stylistic formatting rules
- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) - Disables conflicting ESLint rules with Prettier
- [`@eslint-community/eslint-plugin-eslint-comments`](https://www.npmjs.com/package/@eslint-community/eslint-plugin-eslint-comments) - Best practices for ESLint directive comments
- [`eslint-plugin-import-x`](https://www.npmjs.com/package/eslint-plugin-import-x) - ES6+ import/export syntax support
- [`eslint-plugin-jest`](https://www.npmjs.com/package/eslint-plugin-jest) - Jest testing framework rules
- [`eslint-plugin-jest-formatting`](https://www.npmjs.com/package/eslint-plugin-jest-formatting) - Formatting rules for Jest tests
- [`eslint-plugin-no-use-extend-native`](https://www.npmjs.com/package/eslint-plugin-no-use-extend-native) - Prevents extending native objects
- [`eslint-plugin-promise`](https://www.npmjs.com/package/eslint-plugin-promise) - Best practices for JavaScript promises
- [`eslint-plugin-simple-import-sort`](https://www.npmjs.com/package/eslint-plugin-simple-import-sort) - Auto-fixable import sorting
- [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn) - Various powerful ESLint rules

### JSON

- [`@eslint/json`](https://www.npmjs.com/package/@eslint/json) - JSON file linting

### Node.js TypeScript App

- [`eslint-plugin-n`](https://www.npmjs.com/package/eslint-plugin-n) - Node.js specific linting rules

### React TypeScript App

- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) - React-specific linting rules
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Rules of Hooks for React
- [`eslint-plugin-react-refresh`](https://www.npmjs.com/package/eslint-plugin-react-refresh) - Validates React Fast Refresh constraints

### Storybook

- [`eslint-plugin-storybook`](https://www.npmjs.com/package/eslint-plugin-storybook) - Best practices for Storybook

This plugin is an optional peer dependency. When writing Storybook stories, it provides best practices and catches common mistakes specific to Storybook usage. It includes rules for proper story structure, CSF (Component Story Format) compliance, and Storybook-specific patterns. Only install this plugin if you're using Storybook in your project.

To use it:

```sh
pnpm add -D eslint-plugin-storybook
```

Then include the storybook configuration in your ESLint config:

```js
import { config } from '@valian/eslint-config'
import { storybook } from '@valian/eslint-config/storybook'

export default [
  ...config.base,
  ...storybook,
  // ... other configs
]
```

### Vitest

- [`@vitest/eslint-plugin`](https://www.npmjs.com/package/@vitest/eslint-plugin) - Vitest testing framework rules

### Zod

- [`eslint-plugin-zod-x`](https://www.npmjs.com/package/eslint-plugin-zod-x) - Zod schema validation best practices

## Installation

```sh
pnpm add -D eslint @valian/eslint-config
```

or

```sh
npm install --save-dev eslint @valian/eslint-config
```

## Usage with ESLint Flat Config

This package uses ESLint's new flat configuration system (ESLint v9+). Create an `eslint.config.js` file in your project root.

### Basic Configuration

```js
// eslint.config.js
import { defineConfig } from 'eslint/config'
import { base } from '@valian/eslint-config'

export default defineConfig([
  ...base,
  {
    // Your project-specific overrides here
    rules: {
      // Example: override a rule
      'no-console': 'warn',
    },
  },
])
```

### Node.js TypeScript App Configuration

```js
// eslint.config.js
import { defineConfig } from 'eslint/config'
import { base } from '@valian/eslint-config'
import { typescript } from '@valian/eslint-config/typescript'
import { importSort } from '@valian/eslint-config/importSort'
import { node } from '@valian/eslint-config/node'

export default defineConfig([
  ...base,
  ...typescript,
  ...importSort,
  ...node,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
])
```

### React TypeScript App Configuration

```js
// eslint.config.js
import { defineConfig } from 'eslint/config'
import { base } from '@valian/eslint-config'
import { typescript } from '@valian/eslint-config/typescript'
import { importSort } from '@valian/eslint-config/importSort'
import { react } from '@valian/eslint-config/react'
import { zod } from '@valian/eslint-config/zod'

export default defineConfig([
  ...base,
  ...typescript,
  ...importSort,
  ...react,
  ...zod,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
])
```

### Available Exports

The package exports the following configurations:

- `config.base` - Base ESLint rules and plugins
- `config.typescript` - TypeScript-specific rules
- `config.importSort` - Import sorting rules
- `config.noCycle` - Circular dependency prevention
- `config.jest` - Jest testing rules
- `config.vitest` - Vitest testing rules (alternative to Jest)
- `config.react` - React-specific rules
- `config.node` - Node.js specific rules
- `config.json` - JSON file linting rules
- `config.zod` - Zod schema validation rules

### VS Code Integration

For VS Code users, ensure your ESLint extension supports flat config. If you're using an older version of the ESLint extension, you may need to enable experimental flat config support in your VS Code settings:

```json
{
  "eslint.experimental.useFlatConfig": true
}
```
