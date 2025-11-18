import eslintJavascript from '@eslint/js'
import eslintPluginComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import confusingBrowserGlobals from 'confusing-browser-globals'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import { flatConfigs as eslintPluginImportX } from 'eslint-plugin-import-x'
// eslint-disable-next-line import-x/no-rename-default
import eslintPluginNoUseExtendNative from 'eslint-plugin-no-use-extend-native'
import eslintPluginPromise from 'eslint-plugin-promise'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

export const base = [
  eslintJavascript.configs.recommended,
  eslintPluginUnicorn.configs.all,
  eslintPluginPromise.configs['flat/recommended'],
  eslintPluginImportX.recommended,
  eslintPluginImportX.warnings,
  eslintPluginComments.recommended,
  eslintPluginNoUseExtendNative.configs.recommended,
  {
    rules: {
      // best-practices.js (deduped from @eslint/js recommended)
      'array-callback-return': ['error', { allowImplicit: true }],
      'block-scoped-var': 'error',
      'class-methods-use-this': ['error', { exceptMethods: [] }],
      'consistent-return': 'error',
      curly: ['error', 'multi-line'],
      'default-case': ['error', { commentPattern: '^no default$' }],
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-notation': ['error', { allowKeywords: true }],
      'dot-location': ['error', 'property'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'grouped-accessor-pairs': 'error',
      'guard-for-in': 'error',
      'max-classes-per-file': ['error', 1],
      'no-alert': 'warn',
      'no-caller': 'error',
      'no-constructor-return': 'error',
      'no-div-regex': 'off',
      'no-else-return': ['error', { allowElseIf: false }],
      'no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions', 'functions', 'methods'],
        },
      ],
      'no-eq-null': 'off',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-floating-decimal': 'error',
      'no-global-assign': ['error', { exceptions: [] }],
      'no-native-reassign': 'off',
      'no-implicit-coercion': ['off', { boolean: false, number: true, string: true, allow: [] }],
      'no-implicit-globals': 'off',
      'no-implied-eval': 'error',
      'no-invalid-this': 'off',
      'no-iterator': 'error',
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-magic-numbers': [
        'off',
        {
          ignore: [],
          ignoreArrayIndexes: true,
          enforceConst: true,
          detectObjects: false,
        },
      ],
      'no-multi-spaces': ['error', { ignoreEOLComments: false }],
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: [
            'acc',
            'accumulator',
            'e',
            'ctx',
            'context',
            'req',
            'request',
            'res',
            'response',
            '$scope',
            'staticContext',
          ],
        },
      ],
      'no-proto': 'error',
      'no-restricted-properties': [
        'error',
        {
          object: 'arguments',
          property: 'callee',
          message: 'arguments.callee is deprecated',
        },
        {
          object: 'global',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'self',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'window',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'global',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          object: 'self',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          object: 'window',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        { property: '__defineGetter__', message: 'Please use Object.defineProperty instead.' },
        { property: '__defineSetter__', message: 'Please use Object.defineProperty instead.' },
        { object: 'Math', property: 'pow', message: 'Use the exponentiation operator (**) instead.' },
      ],
      'no-return-assign': ['error', 'always'],
      'no-return-await': 'error',
      'no-script-url': 'error',
      'no-self-assign': ['error', { props: true }],
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'off',
      'no-unused-expressions': [
        'error',
        { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false },
      ],
      'no-useless-call': 'off',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
      'prefer-named-capture-group': 'off',
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      radix: 'error',
      'require-await': 'off',
      'require-unicode-regexp': 'off',
      'vars-on-top': 'error',
      'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
      yoda: 'error',

      // errors.js (deduped from @eslint/js recommended)
      'getter-return': ['error', { allowImplicit: true }],
      'no-await-in-loop': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-console': 'warn',
      'no-constant-condition': 'warn',
      'no-extra-parens': [
        'off',
        'all',
        {
          conditionalAssign: true,
          nestedBinaryExpressions: false,
          returnAssign: false,
          ignoreJSX: 'all',
          enforceForArrowConditionals: false,
        },
      ],
      'no-extra-semi': 'error',
      'no-inner-declarations': 'error',
      'no-promise-executor-return': 'error',
      'no-template-curly-in-string': 'error',
      'no-unreachable-loop': ['error', { ignore: [] }],
      'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
      'no-unused-private-class-members': 'off',
      'no-negated-in-lhs': 'off',
      'require-atomic-updates': 'off',
      'valid-jsdoc': 'off',
      'valid-typeof': ['error', { requireStringLiterals: true }],

      // es6.js (rules only, deduped)
      'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'generator-star-spacing': ['error', { before: false, after: true }],
      // no-confusing-arrow: handled by local override below
      'no-duplicate-imports': 'off',
      'no-new-symbol': 'error',
      'no-restricted-exports': [
        'error',
        {
          restrictedNamedExports: ['default', 'then'],
        },
      ],
      'no-restricted-imports': [
        'off',
        {
          paths: [],
          patterns: [],
        },
      ],
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': [
        'error',
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      'no-var': 'error',
      'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
      'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: { array: false, object: true },
          AssignmentExpression: { array: true, object: false },
        },
        { enforceForRenamedProperties: false },
      ],
      'prefer-numeric-literals': 'error',
      'prefer-reflect': 'off',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'rest-spread-spacing': ['error', 'never'],
      'sort-imports': [
        'off',
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      'symbol-description': 'error',
      'template-curly-spacing': 'error',
      'yield-star-spacing': ['error', 'after'],

      // variables.js (rules only, deduped)
      'init-declarations': 'off',
      'no-catch-shadow': 'off',
      'no-label-var': 'error',
      'no-restricted-globals': [
        'error',
        {
          name: 'isFinite',
          message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
        },
        {
          name: 'isNaN',
          message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
        },
        ...confusingBrowserGlobals,
      ],
      'no-shadow': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'off',
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

      // Local overrides (preserve project preferences)
      'no-nested-ternary': 'off',
      'no-plusplus': 'off',
      'no-underscore-dangle': 'off',
      'no-use-before-define': 'off',
      'no-confusing-arrow': 'off',
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: {
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  },
  {
    rules: {
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-negated-condition': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-nested-ternary': 'off',

      'unicorn/switch-case-braces': ['error', 'avoid'],

      'import-x/extensions': [
        'error',
        'always',
        {
          mjs: 'never',
          cjs: 'never',
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import-x/no-self-import': 'error',
      'import-x/no-useless-path-segments': 'error',
      'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import-x/first': 'error',
      'import-x/no-relative-packages': 'error',

      'class-methods-use-this': 'off',
    },
  },
  eslintConfigPrettier,
]

export default base
