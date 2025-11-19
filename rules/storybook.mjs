// eslint-disable-next-line import-x/no-rename-default
import storybookPlugin from 'eslint-plugin-storybook'

export const storybook = [
  // eslint-disable-next-line import-x/no-named-as-default-member
  ...storybookPlugin.configs['flat/recommended'],
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      // Override or customize Storybook rules here if needed
    },
  },
]

export default storybook
