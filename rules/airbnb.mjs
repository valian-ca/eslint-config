import airbnbBestPractices from 'eslint-config-airbnb-base/rules/best-practices'
import airbnbErrors from 'eslint-config-airbnb-base/rules/errors'
import airbnbEs6 from 'eslint-config-airbnb-base/rules/es6'
import airbnbVariables from 'eslint-config-airbnb-base/rules/variables'

export const airbnb = {
  rules: {
    ...airbnbBestPractices.rules,
    ...airbnbErrors.rules,
    ...airbnbEs6.rules,
    ...airbnbVariables.rules,

    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-confusing-arrow': 'off',
  },
}
