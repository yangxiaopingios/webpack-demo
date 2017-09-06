/*
 * @Author: yangxiooping
 * @Date:   2017-09-05 17:18:22
 * @Last Modified by:   yangxiooping
 * @Last Modified time: 2017-09-06 10:37:34
 */

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                     options: {
                        modules: true,
                        minimize: true
                     }
                }]
            }
        ]
    }
};