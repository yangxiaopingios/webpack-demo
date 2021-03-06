/*
 * @Author: yangxiooping
 * @Date:   2017-09-05 17:18:22
 * @Last Modified by:   yangxiooping
 * @Last Modified time: 2017-09-06 18:18:24
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
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
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
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
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html",//new 一个这个插件的实例，并传入相关的参数
            minify: {
                removeComments: true, //是否去掉注释
                collapseWhitespace: true, //是否去掉空格
                minifyJS: true, //是否压缩html里的js（使用uglify-js进行的压缩）
                minifyCSS: true, //是否压缩html里的css（使用clean-css进行的压缩）
            },
        })
    ],
    devServer: {
        //一切服务都启用gzip 压缩：
        compress: true,
        port: 8080
    },
};