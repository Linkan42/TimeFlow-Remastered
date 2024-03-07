module.exports = {
    verbose: true,
    moduleFileExtensions: ["js", "jsx"],
    moduleDirectories: ["node_modules"],
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    }
  };