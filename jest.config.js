const config = require("./app-configuration.json");

module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    APPLICATION: config,
  },
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
};
