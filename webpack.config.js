const HtmlWebPackPlugin = require("html-webpack-plugin");
let path = require("path");
let nodeExternals = require("webpack-node-externals");
const path = require("path");

const moduleObj = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    },
  ],
};

const client = {
  entry: {
    client: "./src/client/index.js",
  },
  target: "web",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/public"),
  },
  module: moduleObj,
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/client/index.html",
    }),
  ],
};

const server = {
  entry: {
    server: "./src/server/index.js",
  },
  target: "node",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: moduleObj,
  externals: [nodeExternals()],
};
module.exports = [client, server];
