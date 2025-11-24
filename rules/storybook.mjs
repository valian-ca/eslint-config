import { defineConfig } from 'eslint/config'
import storybookPlugin from 'eslint-plugin-storybook'

export const storybook = defineConfig([
  {
    name: 'valian/storybook/recommended',
    // eslint-disable-next-line import-x/no-named-as-default-member
    extends: [storybookPlugin.configs['flat/recommended']],
  },
])

export default storybook
