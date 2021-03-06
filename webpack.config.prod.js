/*
* @Author: yangxiooping
* @Date:   2017-09-06 18:06:10
* @Last Modified by:   yangxiooping
* @Last Modified time: 2017-09-06 18:26:48
*/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            minimize: true
                        }
                    }
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].[contenthash].css"),
    	new CleanWebpackPlugin([__dirname + "/dist"]),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html",//new 一个这个插件的实例，并传入相关的参数
            minify: {
                removeComments: true, //是否去掉注释
                collapseWhitespace: true, //是否去掉空格
                minifyJS: true, //是否压缩html里的js（使用uglify-js进行的压缩）
                minifyCSS: true, //是否压缩html里的css（使用clean-css进行的压缩）
            },
        })
    ]
};