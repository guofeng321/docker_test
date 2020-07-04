// vue.config.js
const pxtorem = require('postcss-pxtorem');

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/gf-test/' : '/',
  devServer: {
    port: 7000, // 端口
    overlay: {
        warnings: true,
        errors: true
      }
},
  chainWebpack: config => {
    config.module
      .rule('md-postcss')  // 新增规则，规则名自定义
      .test(/mand-mobile.*\.css$/)  // 用正则表达式匹配mand-mobile的组件目录下的所有css文件
      .use('css-loader')  // css加载器
      .loader('postcss-loader')  // css处理器
      .options({  // 这里的内容跟方法一中css.loaderOptions一样
        plugins: [
          pxtorem({
            rootValue: 30,
            minPixelValue: 2,
            propList: ['*'],
            selectorBlackList: []
          })
        ]
      });
  },
  runtimeCompiler: true,
  configureWebpack: config => {
    config.externals = {
      AMap: "window.AMap",
      layui: "window.layui",
    }
   }
};