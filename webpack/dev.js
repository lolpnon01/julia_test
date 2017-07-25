const webpackConfig = require('./config');
const webpack = require('webpack');


const rules = webpackConfig.rules;
rules.push({
  test: /\.jsx?$/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [[
        "es2015", {
          "modules": false,
          "loose": true
        }],
        "stage-2",
        "react"
      ],
      plugins: [
        "transform-runtime",
        "transform-decorators-legacy",
        "react-hot-loader/babel"
      ]
    }
  },
  exclude: /node_modules/
});


module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    `./src/${webpackConfig.entryName}`,
  ],
  output: {
    filename: webpackConfig.outputName,
    path: webpackConfig.outputPath
  },
  devtool: 'inline-source-map',
  module: {
    rules
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: './src',
    host: 'localhost',
    port: webpackConfig.devPort,
    historyApiFallback: true,
    publicPath: '/',
    hot: true,
    proxy: {
      '/api': {
        target: webpackConfig.apiUrl,
        changeOrigin: true,
        secure: false
      },
      '/api2.5': {
        target: webpackConfig.apiUrl,
        changeOrigin: true,
        secure: false
      }
    }
  },
};
