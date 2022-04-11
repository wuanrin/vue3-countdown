const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  publicPath: '',
  chainWebpack (config) {
    config
      .plugin('html')
      .tap(config => {
        config[0].title = 'Vue3Countdown Examples'
        return config
      })
      .end()
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue3-countdown': path.resolve(__dirname, '../vue3-countdown/dist/index.js')
      }
    }
  }
})
