const path = require('path');

module.exports = {
    entry: './frontend/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },    
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            },
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}