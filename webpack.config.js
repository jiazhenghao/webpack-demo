const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "production",
    // entry: {
    //     index: './src/index.js'
    // },
    entry: {
        main: './src/index.js',
        vendor: [
            'lodash'
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Caching'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HashedModuleIdsPlugin() //使得vendor.js不要每次都变。
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest'
        // }) 这个鬼东西已经不用了，
    ],
    output: {
        filename: '[name].[chunkhash].js',
        //chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "manifest",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    }
};