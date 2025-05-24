// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettierPlugin from 'eslint-plugin-prettier'

export default withNuxt(
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': 'warn',
      'vue/multi-word-component-names': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn'
    },
    ignores: ['node_modules', '.nuxt', 'dist']
  }
)
