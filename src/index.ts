import type { ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Awaitable } from 'eslint-flat-config-utils'
import { antfu } from '@antfu/eslint-config'
import { FlatConfigComposer } from 'eslint-flat-config-utils'
import { stylistic } from './configs/stylistic'
import { tailwindcss } from './configs/tailwindcss'
import { typescript } from './configs/typescript'
import { vue } from './configs/vue'

type ConfigOptions = {
  /**
   * Enable vue support
   */
  vue?: boolean

  /**
   * Enable tailwindcss support
   *
   * Requires installing:
   * - eslint-plugin-tailwindcss
   *
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss
   */
  tailwindcss?: boolean

}

function afriwork(options: ConfigOptions = {}): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const composer = new FlatConfigComposer<TypedFlatConfigItem, ConfigNames>()
  composer.append(antfu({
    vue: options.vue || false,
  }))
  const configs: Awaitable<TypedFlatConfigItem[]>[] = [
    stylistic(),
    typescript(),
  ]
  if (options.vue) {
    configs.push(
      vue(),
    )
  }
  if (options.tailwindcss) {
    configs.push(
      tailwindcss(),
    )
  }
  composer.append(...configs)
  return composer
}

export default afriwork
