import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import { GLOB_TS, GLOB_TSX } from '@antfu/eslint-config'

export async function typescript(): Promise<TypedFlatConfigItem[]> {
  return [{
    files: [GLOB_TS, GLOB_TSX],
    rules: {
      'ts/consistent-type-definitions': ['warn', 'type'],
      'ts/no-explicit-any': 'error',
      'node/prefer-global/process': ['error', 'always'],
      'jsdoc/no-multi-asterisks': ['warn', { allowWhitespace: true }],
    },
  }]
}
