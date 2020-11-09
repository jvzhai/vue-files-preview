module.exports = {
    outputDir: './www',
    publicPath: './',
    assetsDir: './',
    lintOnSave: false,
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= 'File download and preview'
          return args
        })
    },
    devServer: {
      open: true, //是否自动弹出浏览器页面
      host: "127.0.0.1",//"localhost"
      port: '8080',
      https: false,
      hotOnly: false,
      proxy: {
        '/': {
          target: 'http://127.0.0.1:8888', //API服务器的地址 'http://localhost:3000'
          // ws: true,  //代理websockets
          changeOrigin: true, // 虚拟的站点需要更管origin
          pathRewrite: { //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
            '^/': ''
          }
        }
      },
    },
    css: {
      extract: false,
      sourceMap: true,
    },
  };