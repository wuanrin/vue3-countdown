import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const banner = `/**
 * ${pkg.name} v${pkg.version}
 * (c) 2021 ${pkg.author}
 * Released under the ${pkg.license} license.
 */`

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      exports: 'auto',
      name: 'Vue3Countdown',
      banner,
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: pkg.module,
      format: 'es',
      banner
    }
  ],
  external: Object.keys(pkg.peerDependencies),
  plugins: [
    typescript({
      typescript: require('typescript')
    })
  ]
}
