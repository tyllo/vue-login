module.exports = {
  plugins: {
    autoprefixer: {
      env: process.env.NODE_ENV,
      cascade: false,
    },
    'postcss-font-magician': {
      formats: 'woff2 woff',
      variants: {
        Roboto: {
          '300': [],
          '400': [],
          '700': [],
      }
      },
    },
    'postcss-css-variables': {
      preserve: 'computed',
    },
    'postcss-merge-rules': {},
  }
}
