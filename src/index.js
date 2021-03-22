const WindiCSSWebpackPlugin = require("windicss-webpack-plugin").default;
const defaultExclusions = ["node_modules", ".git", "public/index.html"];

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

    const windiCSSWebpackConfig = {
      ...pluginOptions,
      scan: {
        ...pluginOptions?.scan,
        exclude: pluginOptions?.scan?.exclude ?? defaultExclusions,
      },
    };

    webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
    webpackConfig.plugins.push(
      new WindiCSSWebpackPlugin({ ...windiCSSWebpackConfig })
    );

    return webpackConfig;
  },
};
