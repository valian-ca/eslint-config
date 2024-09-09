import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'

export const comments = fixupConfigRules(new FlatCompat().extends('plugin:eslint-comments/recommended'))
