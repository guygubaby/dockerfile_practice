const CompressionPlugin = require("compression-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
const publicPath = "/";
const proxyTarget = "http://localhost:8080";

module.exports = {
  publicPath, // 部署环境的url,环境改变需要修改
  lintOnSave: true,
  devServer: {
    proxy: {
      "/api": {
        target: proxyTarget
      }
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      //  启用GZip压缩
      config
        .plugin("compression")
        .use(CompressionPlugin, {
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8,
          cache: true
        })
        .tap(args => {});
    }

    // use cdn start
    const externals = {
      vue: "Vue",
      axios: "axios",
      "element-ui": "ELEMENT",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      dayjs: "dayjs",
      xlsx: "XLSX",
    };

    config.externals(externals);
    const cdn = {
      css: ["//unpkg.com/element-ui/lib/theme-chalk/index.css"],
      js: [
        '//unpkg.com/xlsx@0.14.3/dist/xlsx.full.min.js',
        '//unpkg.com/dayjs@1.8.14/dayjs.min.js',
        '//unpkg.com/vue@2.6.6/dist/vue.min.js',
        '//unpkg.com/vue-router@3.0.2/dist/vue-router.min.js',
        '//unpkg.com/vuex@3.1.0/dist/vuex.min.js',
        '//unpkg.com/axios@0.18.0/dist/axios.min.js',
        '//unpkg.com/element-ui@2.8.2/lib/index.js'
      ]
    };
    config.plugin("html").tap(args => {
      args[0].cdn = cdn;
      return args;
    });
    // use cdn end

    config.resolve.symlinks(true);
    config.when(process.env.NODE_ENV === "development", config =>
      config.devtool("cheap-source-map")
    );
  },
  configureWebpack: {
    plugins: process.env.NODE_ENV === "production" ? [
      // new BundleAnalyzerPlugin()
    ] : []
  },
  productionSourceMap: process.env.NODE_ENV !== "production" // 打包时不生成.map文件
};