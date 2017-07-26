const path = require('path');


module.exports = {
  devPort: 3000,
  apiUrl: 'https://jsonplaceholder.typicode.com',
  entryName: 'app.js',
  outputName: 'static/[name].js',
  outputPath: path.resolve(__dirname, '../dist'),
  rules: [{
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader'
    ]
  }, {
    test: /\.scss/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  }, {
    test: /\.*\.(png|jpg|svg|gif)$/,
    use: ['url-loader?limit=100000&name="[name]-[hash].[ext]"']
  }, {
    test: /\.(ttf|eot|svg|woff(2)?)$/,
    use: ['url-loader?limit=200000&name="[name]-[hash].[ext]"']
  }],
};
