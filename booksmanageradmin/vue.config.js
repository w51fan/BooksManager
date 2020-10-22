module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8089,
    https: false,
    hotOnly: false,
    // open: true, // 设置true为打开默认浏览器，也可以指定
    // proxy: {
    //   '/api': { // 以 “/api” 开头的 代理到 下边的 target 属性 的值 中
    //     target: 'http://localhost:7000', // node.js服务器运行的地址
    //     // ws: true,//设置websocket
    //     changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，
    //     // 并同时接收请求的数据， 这样服务端和服务端进行数据的交互就不会有跨域问题
    //     //
    //     pathRewrite: { // 路径重写
    //       '^/api': '', // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
    //     },
    //   },
    // },
    proxy: 'http://localhost:7000',
  },
};
