const config = require('./config');
const webpack = require('webpack');
const ChunksPlugin = require('webpack-split-chunks');


const rules = config.rules;
rules.push({
  test: /\.jsx?$/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        [
          "es2015",
          {
            "modules": false,
            "loose": true
          }
        ],
        "stage-2",
        "react"
      ],
      plugins: [
        "transform-promise-to-bluebird",
        "transform-runtime",
        "transform-remove-console",
        "transform-react-remove-prop-types",
        "transform-react-constant-elements",
        "transform-react-inline-elements",
        "transform-decorators-legacy",
        "react-hot-loader/babel"
      ]
    }
  },
  exclude: /node_modules/
});


module.exports = {
  entry: `./src/${config.entryName}`,
  output: {
    filename: config.outputName,
    path: config.outputPath,
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules
  },
  plugins: [
    new ChunksPlugin({
      to: 'vendor',
      test: /node_modules/
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      drop_console: false,
      unused: true,
      sourceMap: true,
      comments: false
    }),
    new webpack.EnvironmentPlugin("NODE_ENV"),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: true,
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
