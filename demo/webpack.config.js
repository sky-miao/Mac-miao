var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './src/main.js'
    ],
    output: {
        path: './build',
        filename: 'budle,js'
    },
    module: {
        loaders: [
            {test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babek-loader'},
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    resolve: {
        extensions: ['', '.js', 'json']
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};