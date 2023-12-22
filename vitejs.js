module.exports = {
  extends: [require.resolve('./react')],

  plugins: ['react-refresh'],

  rules: {
    'import/extensions': ['error', 'ignorePackages'],

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
}
