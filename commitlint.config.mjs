const ERROR = 2
const ALWAYS = 'always'

export default {
  defaultIgnores: true,
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      noteKeywords: ['See', 'Signed-off-by', 'Co-authored-by'],
    },
  },
  rules: {
    'footer-leading-blank': [ERROR, ALWAYS],
    'footer-max-line-length': [ERROR, ALWAYS, Number.POSITIVE_INFINITY],
  },
}
