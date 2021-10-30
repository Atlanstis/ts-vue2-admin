module.exports = {
  /**
   * 向预处理器 Loader 传递选项
   * https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9
   */
  css: {
    loaderOptions: {
      scss: {
        // 共享全局样式变量
        prependData: '@import "~@/styles/variables.scss";',
      },
    },
  },
}
