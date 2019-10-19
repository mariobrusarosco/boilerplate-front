// Utils
const createShowPages = require('./src/utils/createDynamicPages').createShowPages

module.exports = {
  exportPathMap: async function() {
    const regularPaths = {
      "/": { page: "/" },
      "/post": { page: "/post" },
      "/shows": { page: "/shows" }
    }
    
    const showsPages = await createShowPages()

    return {
      ...regularPaths,
      ...showsPages
    }
  }
};
