// ReSharper disable UseOfImplicitGlobalInFunctionScope
// ReSharper disable PossiblyUnassignedProperty

const isProduction = process.env.NODE_ENV === 'production';
const path = require("path");

module.exports = {
  publicPath: "/wwwroot/dist",

  outputDir: "../wwwroot/dist",
  assetsDir: "",

  filenameHashing: false,
  lintOnSave: !isProduction,

  runtimeCompiler: true,

  chainWebpack: (config) => {
    config.devtool('source-map')

    config.module
      .rule("eslint")
      .use("eslint-loader").options({fix: true});

    //config.resolve.alias.set("@@", path.resolve(__dirname, "../..", "ARC.Web"));

    //console.log(path.resolve(__dirname, "../..", "ARC.Web"));
  },

  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },

  css: {
    extract: true,
    sourceMap: true,
  }
}
