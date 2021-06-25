const { resolve } = require('path')

module.exports = (options, context) => ({
  name: 'vuepress-plugin-aplayer',
  enhanceAppFiles: resolve(__dirname, './enhanceAppFile.js'),
  globalUIComponents: 'APlayer'
})