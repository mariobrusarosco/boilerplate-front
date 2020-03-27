import { resolve } from "path";

import commonConfigurtion from "../configuration/common.configuration.babel";
import commonPlugins from "../plugins/common.plugins.babel";
import commonLoaders from "../loaders/common.loaders.babel";

const developmentConfig = env => ({
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].development.bundle.js",
    path: resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: "dist"
  },
  ...commonConfigurtion,
  module: {
    rules: [...commonLoaders]
  },
  plugins: [...commonPlugins]
});

export default developmentConfig;
