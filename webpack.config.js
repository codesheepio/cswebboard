var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: ['react-hot-loader/patch', path.resolve('src/index.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
}
