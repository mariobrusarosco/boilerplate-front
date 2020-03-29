import packageJSON from "../package.json";

const commonConfiguration = {
  APP_NAME: "Front Boilerplate",
  ENVIRONMENT: process.env.NODE_ENV,
  VERSION: packageJSON.version,
  ROOT_URL: "/",
  API: {
    API_ROOT: "https://api.unsplash.com/"
  },
  LOCAL_STORAGE_KEY: `local__Boilerplate`
};

export default commonConfiguration;
