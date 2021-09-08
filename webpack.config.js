const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const src = path.resolve(__dirname, './src')
const dist = path.resolve(__dirname, './dist')

module.exports = function(env = {}) {
  const { prod } = env;
  const config = {
    mode: prod ? 'production' : 'development',
    devtool: prod ? 'source-map' : 'inline-source-map',
    context: src,
    entry: './index.ts',
    output: {
      path: dist,
      filename: prod ? 'countdown.min.js' : 'countdown.js',
      libraryTarget: 'commonjs',
      library: 'Vue3Countdown'
    },
    resolve: {
      extensions: ['.js', '.ts']
    },
    module: {
      rules: [
        {
          test: /\.vue$/i,
          loader: 'vue-loader',
          include: src
        },
        {
          test: /\.ts$/i,
          loader: 'ts-loader',
          include: src
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  }
  return Promise.resolve(config)
}
