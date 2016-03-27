var webpack = require('webpack');
var path = require('path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: [
 	'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
     $: 'jquery',
     jQuery: 'jquery',
   })
    // new ExtractTextPlugin("bundle.css")

  ],
  module: {
  	loaders : [
      {
        test : /\.jsx/,
        include : APP_DIR,
        loaders: [ 'react-hot-loader', 'babel-loader' ],
      },
      { test: /\.css$/, loader: 'style!css' },
      // { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      { test: /\.gif(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      { test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ],
  },

};

module.exports = config;
