/* config-overrides.js */
const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@pages": "src/pages",
    "@store": "src/store",
    "@utils": "src/utils",
  })(config);
  //do stuff with the webpack config...
  return config;
};
