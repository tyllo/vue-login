const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    'standard',
    'stylelint'
  ],
  plugins: [
    'html',
    'pug',
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': isProduction ? 2 : 0,
    // allow console during development
    'no-console': isProduction ? 2 : 1,
    quotes: ['error', 'single', { 'allowTemplateLiterals': true }]
  }
}
