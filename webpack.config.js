const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jpg$/i,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
};
