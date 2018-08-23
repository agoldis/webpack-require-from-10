const webpack = require("webpack");
const webpackRequireFrom = require("webpack-require-from");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    publicPath: "/webpack/"
  },
  entry: ["./setWRF", "webpack-hot-middleware/client", "./index.js"],
  plugins: [
    new webpackRequireFrom({
      replaceSrcMethodName: "getChunkURL"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin()
  ]
};
