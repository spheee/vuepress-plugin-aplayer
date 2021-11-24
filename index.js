const { resolve } = require('path')

module.exports = (options, context) =>{
  return {
    name: 'vuepress-plugin-aplayer',
    enhanceAppFiles: resolve(__dirname, './enhanceAppFile.js'),
    globalUIComponents: 'HskyAplayer',
    define: {
      MUSIC_SETTING: options.music
    }
  }
}
