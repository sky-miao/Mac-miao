var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: 'main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
        {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }
    ]
  },
  plugins: [
      devFlagPlugin,
    // new HtmlwebpackPlugin({
    //     title: 'Webpack-demos',
    //     filename: 'index.html'
    // }),
    // new OpenBrowserPlugin({
    //     url: 'http://localhost:8080'
    // })
  ]
};
