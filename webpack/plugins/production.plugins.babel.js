import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CompressionPlugin from "compression-webpack-plugin";

const productionPlugins = [
  new CleanWebpackPlugin(),
  new BundleAnalyzerPlugin({
    reportFilename: "../reports/bundle.html",
    analyzerMode: "static",
    openAnalyzer: false
  }),
  new CompressionPlugin({
    algorithm: "gzip"
  }),
  new CompressionPlugin({
    algorithm: "brotliCompress",
    compressionOptions: { level: 5 }
  })
];

export default productionPlugins;
