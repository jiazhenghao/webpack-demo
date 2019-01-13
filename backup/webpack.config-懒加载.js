const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        index: './src/index.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Lazy'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};