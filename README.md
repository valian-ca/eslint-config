<!-- markdownlint-disable -->

[![npm version](http://img.shields.io/npm/v/@valian/eslint-config.svg?style=flat)](https://npmjs.org/package/@valian/eslint-config 'View this project on npm')
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

<!-- markdownlint-restore -->

# eslint-config

Sharable eslint config created and used by [Valian](https://valian.ca)

## eslint plugins and config used

### Base configuration

- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb)
- [`eslint-config-airbnb-typescript`](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)
- [`eslint-plugin-eslint-comments`](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
- [`eslint-plugin-jest`](https://www.npmjs.com/package/eslint-plugin-jest)
- [`eslint-plugin-jest-formatting`](https://www.npmjs.com/package/eslint-plugin-jest-formatting)
- [`eslint-plugin-promise`](https://www.npmjs.com/package/eslint-plugin-promise)
- [`eslint-plugin-simple-import-sort`](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
- [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn)

### Node Typescript App

- [`eslint-plugin-n`](https://www.npmjs.com/package/eslint-plugin-n)

### React Typescript App

- [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## Installation

```sh
pnpm add -D eslint @valian/eslint-config
```

or

```sh
npm install --save-dev eslint @valian/eslint-config
```

or

```sh
yarn add -D eslint @valian/eslint-config
```

## Usage with ESLint Flat Config

This package uses ESLint's new flat configuration system (ESLint v9+). Create an `eslint.config.js` file in your project root.

### Basic Configuration

```js
// eslint.config.js
import { defineConfig } from 'eslint/config'
import { config } from '@valian/eslint-config'

export default defineConfig([
  ...config.base,
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
import globals from 'globals'
import { config } from '@valian/eslint-config'

export default defineConfig([
  ...config.base,
  ...config.typescript,
  ...config.importSort,
  ...config.jest,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
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
import globals from 'globals'
import { config } from '@valian/eslint-config'

export default defineConfig([
  ...config.base,
  ...config.typescript,
  ...config.importSort,
  ...config.react,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
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
- `config.react` - React-specific rules
- `config.node` - Node.js specific rules
- `config.json` - JSON file linting rules

### VS Code Integration

For VS Code users, ensure your ESLint extension supports flat config. If you're using an older version of the ESLint extension, you may need to enable experimental flat config support in your VS Code settings:

```json
{
  "eslint.experimental.useFlatConfig": true
}
```
