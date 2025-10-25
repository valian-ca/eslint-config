import storybookPlugin from 'eslint-plugin-storybook'

export const storybook = [
  ...storybookPlugin.configs['flat/recommended'],
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      // Override or customize Storybook rules here if needed
    },
  },
]
