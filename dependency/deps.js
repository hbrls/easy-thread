const internal = ['@types', 'babel-preset-', 'eslint-plugin-'];


const pickable = [
  // NOTE: build
  "@babel/core", "@babel/types", "@babel/preset-env", "@babel/preset-react", "@babel/runtime", "@babel/runtime-corejs3",
  "@babel/generator", "@babel/plugin-proposal-async-generator-functions", "@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-decorators",
  "babel-loader",
  "webpack", "webpack-cli", "webpack-merge", "terser-webpack-plugin", "url-loader", "vue-loader",
  "assets-webpack-plugin", "css-loader", "cssnano", "mini-css-extract-plugin", "optimize-css-assets-webpack-plugin",
  "postcss", "postcss-calc", "postcss-import", "postcss-loader", "postcss-ordered-values", "postcss-simple-vars", "postcss-url",
  "gulp", "del",
  // NOTE: build < 2
  "babel-runtime", "babel-core", "babel-polyfill", "babel-plugin-syntax-jsx", "babel-plugin-transform-decorators", "babel-plugin-transform-regenerator", "babel-plugin-transform-runtime", "babel-plugin-transform-vue-jsx",
  "gulp-replace", "gulp-util",
  "autoprefixer", "json-loader", "uglify-js", ,
  // NOTE: dev
  "style-loader",
  "babel-eslint", "eslint", "eslint-config-airbnb", "eslint-config-airbnb-base", "eslint-import-resolver-node", "eslint-import-resolver-webpack", "eslint-loader",
  "stylelint", "stylelint-config-standard", "stylelint-config-standard", "stylelint-webpack-plugin",
  "webpack-bundle-analyzer", "webpack-dev-middleware", "webpack-dev-server",
  // NOTE: core
  "ajv", "axios", "core-js", "dayjs", "react", "react-dom", "prop-types", "react-redux", "react-router", "react-router-redux", "redux", "redux-saga", "immutable", "path-to-regexp",
  "lodash", "lodash-es", "head-http", "vanilla.js", "vue", "vue-router", "vuex",
  // NOTE: ui core
  "antd", "rc-form", "rc-menu", "rc-table", "rc-tabs", "react-contextmenu",
  "dva-core", "dva-react-router-3", "dva-loading", "antd-dayjs-webpack-plugin",
  "draft-js",
  // NOTE: deprecated
  "gulp-replace", "classnames", "happypack", "moment", "postcss-scss", "qiniu", "run-sequence", "uglifyjs-webpack-plugin",
  // NOTE: security risk
  "minimatch", "minimist", "graceful-fs",
];


module.exports = function (lib) {
  for (let i = 0; i < internal.length; i += 1) {
    if (lib.indexOf(internal[i]) === 0) {
      return true;
    }
  }
  return pickable.indexOf(lib) > -1;
};
