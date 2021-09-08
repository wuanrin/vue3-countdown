import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    exports: 'auto',
    format: 'cjs',
    name: 'Vue3Countdown'
  },
  external: [
    'vue'
  ],
  plugins: [
    typescript()
  ]
}
