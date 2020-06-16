module.exports = {
  
  
  chainWebpack: config => {
    config.module
      .rule('feathersjs')
        .test(/\.jsx?$/)
        .exclude
        .add(/node_modules(\/|\\)(?!(@feathersjs|debug))/)
        .end()
      .use('babel-loader')
        .loader('babel-loader')
  }
  
}