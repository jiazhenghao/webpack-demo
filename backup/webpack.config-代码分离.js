const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

//const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js'
        //another: './src/another-module.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Lazy'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }

    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 name: "commons",
    //                 chunks: "initial",
    //                 minChunks: 2
    //             }
    //         }
    //     }
    // }
};