const { javascript, release } = require('projen')
const project = new javascript.NodeProject({
  packageName: '@valian/eslint-config',
  description: 'Valian ESLint Config',
  repository: 'git+https://github.com/valian-ca/eslint-config.git',

  minNodeVersion: '16.x',
  workflowNodeVersion: 'lts/hydrogen',

  authorName: 'Valian',
  authorUrl: 'https://valian.ca',
  authorOrganization: true,

  license: 'MIT',
  licensed: true,
  copyrightOwner: 'Valian',

  keywords: ['eslint'],

  gitignore: ['.idea'],

  releaseToNpm: true,
  npmAccess: 'public',
  defaultReleaseBranch: 'main',
  entrypoint: 'index.js',
  packageManager: javascript.NodePackageManager.NPM,

  prettier: true,
  prettierOptions: { settings: { semi: false, singleQuote: true, printWidth: 120 } },
  eslint: true,
  jest: false,

  depsUpgrade: false,
  renovatebot: true,
  renovatebotOptions: {
    overrideConfig: {
      packageRules: [
        {
          matchPackagePatterns: ['.*'],
          groupName: 'dependencies',
        },
        {
          matchUpdateTypes: ['patch', 'minor'],
          groupName: 'dependencies (non-major)',
        },
        {
          matchManagers: ['github-actions'],
          groupName: 'GitHub Actions Dependencies',
        },
      ],
    },
  },

  peerDeps: ['eslint@>=8.40.0', 'typescript@>=4.9.5'],
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

  devDeps: ['@commitlint/cli', '@commitlint/config-conventional', 'husky', 'markdownlint-cli', 'prettier'],
})

project.addTask('eslint', { description: 'Run eslint', exec: 'eslint .' })
project.addTask('lint:md', { description: 'Run markdownlint', exec: 'markdownlint *.md' })
project.addTask('lint:prettier', { description: 'check prettier format', exec: 'prettier . --check' })
project.addTask('prepare', { exec: 'husky install' })

project.prettier?.ignoreFile?.addPatterns('.github', '.mergify.yml', 'renovate.json5')

project.synth()
