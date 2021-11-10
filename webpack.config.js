const path = require('path')
module.exports = {
  // 模式
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'custom-utils-plugin.js',
    library: 'customUtils', // 向外暴露的对象名称
    libraryTarget: 'umd' // 打包生成库可通过esm(es6语法导入) | commonJs |requireJs 语法引入
  }
}
