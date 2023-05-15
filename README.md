[![npm version](http://img.shields.io/npm/v/@valian/eslint-config.svg?style=flat)](https://npmjs.org/package/@valian/eslint-config 'View this project on npm')
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

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
- 
### React Typescript App

- [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## Usage

```
yarn add -D eslint @valian/eslint-config
```

or

```
npm install --save-dev eslint @valian/eslint-config
```

## Node Typescript App

Add `.eslintrc.js`:

```js
module.exports = {
  env: {
    node: true,
  },
  extends: ['@valian/eslint-config/node'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  }
}
```

## React Typescript App

Add `.eslintrc.js`:

```js
module.exports = {
  env: {
    browser: true,
  },
  extends: ['@valian/eslint-config/react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
```
