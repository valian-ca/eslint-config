module.exports = {
  overrides: [
    {
      files: ['tests/**', '__tests__/**', '*.test.ts', '*.test.tsx', '*.spec.ts', '*.spec.tsx'],

      extends: ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:jest-formatting/recommended'],
    },
  ],
}
