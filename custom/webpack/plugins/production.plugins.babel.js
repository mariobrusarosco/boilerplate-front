import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const productionPlugins = [
  new CleanWebpackPlugin(),
  new BundleAnalyzerPlugin({
    reportFilename: "../reports/bundle.html",
    analyzerMode: "static"
  })
];

export default productionPlugins;
