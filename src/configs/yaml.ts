import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import { GLOB_YAML } from '@antfu/eslint-config'

export async function yaml(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      files: [GLOB_YAML],
      rules: {
        'yaml/indent': ['off'],
        'style/no-multiple-empty-lines': ['off'],
      },
    },
  ]
}
