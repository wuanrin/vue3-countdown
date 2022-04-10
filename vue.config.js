const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  chainWebpack (config) {
    config
      .plugin('html')
      .tap(config => {
        config[0].title = 'Vue3Countdown Examples'
        return config
      })
      .end()
  }
})
