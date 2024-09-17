const { javascript } = require('projen')
const project = new javascript.NodeProject({
  packageName: '@valian/eslint-config',
  description: 'Valian ESLint Config',
  repository: 'git+https://github.com/valian-ca/eslint-config.git',

  minNodeVersion: '20.x',
  workflowNodeVersion: 'lts/iron',

  authorName: 'Valian',
  authorUrl: 'https://valian.ca',
  authorOrganization: true,

  license: 'MIT',
  licensed: true,
  copyrightOwner: 'Valian',

  keywords: ['eslint'],
  majorVersion: 1,

  gitignore: ['.idea'],
  npmIgnoreOptions: {
    ignorePatterns: [
      '.github/*',
      '.editorconfig',
      '.eslintrc.js',
      '.husky/*',
      '.markdownlint.yml',
      '.nvmrc',
      'commitlint.config.js',
      'renovate.json5',
    ],
  },

  releaseToNpm: true,
  npmAccess: 'public',
  defaultReleaseBranch: 'main',
  entrypoint: 'index.mjs',
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: '9.10.0',

  prettier: true,
  prettierOptions: {
    settings: { semi: false, singleQuote: true, printWidth: 120 },
    ignoreFileOptions: { ignorePatterns: ['.github', '.mergify.yml', 'renovate.json5', 'pnpm-lock.yaml'] },
  },
  eslint: true,
  jest: false,

  depsUpgrade: true,
  depsUpgradeOptions: {
    workflow: false,
  },
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

  peerDeps: ['eslint@>=9.10.0', 'typescript@>=5.5.4'],
  deps: [
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'typescript-eslint',
    'eslint-import-resolver-typescript',

    'eslint-config-airbnb-base',

    '@eslint/compat',
    '@eslint/js',
    '@eslint/eslintrc',
    'globals',

    'eslint-config-prettier',
    '@eslint-community/eslint-plugin-eslint-comments',
    'eslint-plugin-n',
    'eslint-plugin-promise',
    'eslint-plugin-unicorn',

    'eslint-plugin-import-x',
    'eslint-plugin-simple-import-sort',

    // 'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks@5.1.0-rc-a03254bc-20240905',
    'eslint-plugin-react-refresh',

    'eslint-plugin-jest',
    'eslint-plugin-jest-formatting',

    'eslint-plugin-tailwindcss',
  ],

  devDeps: ['@commitlint/cli', '@commitlint/config-conventional', 'husky', 'markdownlint-cli', 'prettier'],
})

project.addTask('eslint', { description: 'Run eslint', exec: 'eslint .' })
project.addTask('lint:md', { description: 'Run markdownlint', exec: 'markdownlint *.md' })
project.addTask('lint:prettier', { description: 'check prettier format', exec: 'prettier . --check' })
project.addTask('prepare', { exec: 'husky' })

project.prettier?.ignoreFile?.addPatterns('.github', '.mergify.yml', 'renovate.json5')

project.package.addField('packageManager', 'pnpm@9.10.0')
project.npmrc.addConfig('package-manager-strict', 'false') // allow minor/patch version updates of pnpm on dev boxes

project.synth()
