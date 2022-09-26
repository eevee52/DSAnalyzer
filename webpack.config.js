const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

htmlPlugin = new HtmlWebpackPlugin({
  title: "Development",
  template: "index.html",
});

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: "./client/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /(node_modules)/,
        loader: "ts-loader",
      },
      // {
      //   test: /\.jsx?/,
      //   exclude: /(node_modules)/,
      //   loader: "babel-loader",
      //   options: {
      //     presets: ["@babel/env", "@babel/react"],
      //   },
      // },
      {
        test: /\.s?css/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [htmlPlugin],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
};
