// import webpack from 'webpack'
var webpack = require('webpack')
var ugfilyJsPlugin = webpack.optimize.UglifyJsPlugin

module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    plugins: [
        new ugfilyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}