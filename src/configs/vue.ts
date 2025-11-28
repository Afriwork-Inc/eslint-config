import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import { GLOB_VUE } from '@antfu/eslint-config'

export async function vue(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      files: [GLOB_VUE],
      rules: {
        'import/exports-last': 'off',
        'import/first': 'off',
        'vue/block-lang': ['error', {
          script: {
            lang: 'ts',
          },
        }],
        'vue/define-props-declaration': ['error', 'type-based'],
        'vue/define-emits-declaration': ['error', 'type-literal'],
        'ts/consistent-type-definitions': ['warn', 'type'],
        'ts/no-explicit-any': 'error',
        'node/prefer-global/process': ['error', 'always'],
        'jsdoc/no-multi-asterisks': ['warn', { allowWhitespace: true }],
        'unicorn/no-instanceof-builtins': ['off'], // FIXME: Disabled due to perf issues in vue files
      },
    },
  ]
}
