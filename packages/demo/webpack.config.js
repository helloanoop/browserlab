const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  output: {
    globalObject: 'this',
    filename: "index.js",
    path: dist,
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: dist,
    },
    watchFiles: ['src/index.html'],
    hot: true,
    liveReload: true,
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
