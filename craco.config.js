const CracoLessPlugin = require('craco-less');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const htmlWebpackPluginInstance = webpackConfig.plugins.find(
        (webpackPlugin) => webpackPlugin instanceof HtmlWebpackPlugin,
      );
      htmlWebpackPluginInstance.options.version = gitRevisionPlugin.version();
      htmlWebpackPluginInstance.options.branch = gitRevisionPlugin.branch();
      htmlWebpackPluginInstance.options.commitHash = gitRevisionPlugin.commithash();
      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
