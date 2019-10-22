const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: { src: path.resolve(__dirname, "src") }
  };
  config.plugins = config.plugins.concat([
    new HtmlWebpackPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      custom: {
         test: /\.js$/,
         attribute: "nonce",
         value: "{{ cspNonce }}"
       }
    })
 ])

  return config;
};

