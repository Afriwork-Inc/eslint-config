import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import { interopDefault } from '@antfu/eslint-config'

export async function tailwindcss(): Promise<TypedFlatConfigItem[]> {
  const pluginTailwind = await interopDefault(import('eslint-plugin-tailwindcss'))

  // Marking as any because types from tailwind plugin doesn't match
  return pluginTailwind.configs['flat/recommended'] as []
}
