const WindiCSSWebpackPlugin = require("windicss-webpack-plugin").default;

module.exports = {
  overrideWebpackConfig: ({
    webpackConfig,
    pluginOptions,
    context: { env: paths },
  }) => {
    const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
      ({ constructor }) =>
        constructor && constructor.name === "ModuleScopePlugin"
    );

    webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
    webpackConfig.plugins.push(new WindiCSSWebpackPlugin({ ...pluginOptions }));

    return webpackConfig;
  },
};
