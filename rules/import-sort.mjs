import simpleImportSort from 'eslint-plugin-simple-import-sort'

export const importSort = [
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports.
            [String.raw`^\u0000`],
            // Node.js builtins prefixed with `node:`.
            ['^node:'],
            ['^react'],
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            [String.raw`^@?\w`],
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            ['^'],
            // Parent imports. Put `..` last.
            [String.raw`^\.\.(?!/?$)`, String.raw`^\.\./?$`],
            // Other relative imports. Put same-folder imports and `.` last.
            [String.raw`^\./(?=.*/)(?!/?$)`, String.raw`^\.(?!/?$)`, String.raw`^\./?$`],
            // Style imports.
            [String.raw`^.+\.?(css)$`],
          ],
        },
      ],
    },
  },
]

export default importSort
