// Vendors
// const withCSS = require("@zeit/next-css");
const path = require('path')

// Utils
const createShowPages = require('./src/utils/createDynamicPages').createShowPages

// module.exports = withCSS({
module.exports = {
  exportPathMap: async function() {
    const regularPaths = {
      "/": { page: "/" },
      "/shows": { page: "/shows" }
    }

    const showsPages = await createShowPages()

    return {
      ...regularPaths,
      ...showsPages
    }
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  webpack(config, options) {
    config.resolve.modules = [
      path.resolve('src'),
      path.resolve('node_modules'),
    ]

    return config
  }
}
