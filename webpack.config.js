const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  devtool: "cheap-eval-source-map",
  entry: {
    main: ["babel-polyfill", "react-hot-loader/patch", "./src/index.js"]
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve("./dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ["node_modules"],
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    // build optimization plugins
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "common.[hash].js"
    }),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};
