/*
* @Author: yangxiooping
* @Date:   2017-09-05 17:18:22
* @Last Modified by:   yangxiooping
* @Last Modified time: 2017-09-05 18:39:06
*/

const path = require('path');

module.exports = {
  	entry: './src/index.js',
  	output: {
    filename: 'bundle.js',
    	path: path.resolve(__dirname, 'dist')
  	},
  	module: {
	    rules: [
	        {
	            test: /(\.jsx|\.js)$/,
	            use: {
	                loader: "babel-loader"
	            },
	            exclude: /node_modules/
	        }
	    ]
	}
};