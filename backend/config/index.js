import path from 'path'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  isProduction,
  port: process.env.PORT || 3000,

  // https://github.com/koajs/generic-session
  session: {
    keys: [ 'a', 'b' ]
  },

  static: {
    path: path.resolve('static')
  },

  views: {
    path: path.resolve('src/templates'),
    options: {
      extension: 'pug',
      options: {
        pretty: !isProduction
      }
    }
  },

  json: {
    pretty: !isProduction
  }
}
