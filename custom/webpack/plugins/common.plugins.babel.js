import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";

const commonPlugins = [
  new HtmlWebpackPlugin({
    template: resolve("src", "index.html")
  })
];

export default commonPlugins;
