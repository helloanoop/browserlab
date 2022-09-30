const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    globalObject: 'this',
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
};
