const commonLoaders = [
  {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/
  }
];

export default commonLoaders;
