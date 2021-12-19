const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "node",
  mode: "production",
  entry: {
    server: "/src/server.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "" }
      ]
    })
  ]
};
