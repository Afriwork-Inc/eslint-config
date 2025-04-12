import type { TypedFlatConfigItem } from '@antfu/eslint-config'

export async function stylistic(): Promise<TypedFlatConfigItem[]> {
  return [{
    rules: {
      'curly': ['error', 'all'],
      'style/max-statements-per-line': ['error', { max: 1 }],
      'style/brace-style': ['error', '1tbs'],
    },
  }]
}
