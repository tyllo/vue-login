var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

var localIdentName = isProduction
  ? '[path][name]-[local]-[hash:base64:5]'
  : '[path][name]-[local]'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  cssModules: {
    localIdentName,
    camelCase: true
  }
}
