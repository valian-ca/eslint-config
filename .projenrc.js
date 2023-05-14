const { javascript } = require('projen')
const { exec } = require('projen/lib/util')
const project = new javascript.NodeProject({
  packageName: '@valian/eslint-config',
  description: 'Valian ESLint Config',
  repository: 'https://github.com/valian-ca/eslint-config.git',

  authorName: 'Valian',
  authorUrl: 'https://valian.ca',
  authorOrganization: true,

  license: 'MIT',
  licensed: true,
  copyrightOwner: 'Valian',

  keywords: ['eslint'],

  releaseToNpm: true,
  npmAccess: 'public',
  defaultReleaseBranch: 'main',
  entrypoint: 'index.js',

  prettier: true,
  prettierOptions: { settings: { semi: false, singleQuote: true, printWidth: 120 } },
  eslint: true,
  jest: false,

  deps: [
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint-import-resolver-typescript',

    'eslint-config-airbnb-base',
    'eslint-config-airbnb',
    'eslint-config-airbnb-typescript',

    'eslint-config-prettier',
    'eslint-plugin-eslint-comments',
    'eslint-plugin-n',
    'eslint-plugin-promise',
    'eslint-plugin-unicorn',

    'eslint-plugin-import',
    'eslint-plugin-simple-import-sort',

    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',

    'eslint-plugin-jest',
    'eslint-plugin-jest-formatting',
  ],
})
project.addPeerDeps('eslint@>=8.40.0')
project.addPeerDeps('typescript@>=4.9.5')

const eslintTask = project.addTask('eslint', { description: 'Run eslint', exec: 'eslint .' })

project.synth()
