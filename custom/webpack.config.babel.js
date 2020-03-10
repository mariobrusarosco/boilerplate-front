import path from "path";
const HtmlWebpackPlugin = require("html-webpack-plugin");

const developmentConfig = env => ({
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].development.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: "dist"
  },
  entry: ["./src/index.ts"],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.resolve("node_modules"), path.resolve("src")]
  },
  //   plugins: [...commonPlugins(env), ...developmentPlugins],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
    // rules: [...commonLoaders, ...developmenLoaders]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ]
});

module.exports = developmentConfig;
