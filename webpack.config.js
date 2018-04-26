var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var VENDOR_LIB = ['preact']
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: {
		bundle: path.resolve(__dirname, 'src/index.js'),
		vendor: VENDOR_LIB
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets/'
						}
					},
					'image-webpack-loader'
				]
			}
		]
	},
	devServer: {
		proxy: {
			'/api': 'http://localhost:8080',
			'/socket.io': 'http://localhost:8080'
		},
		filename: 'bundle.js'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: 'initial',
					test: 'vendor',
					name: 'vendor',
					enforce: true
				}
			}
		}
	},
	plugins: [
		new ExtractTextPlugin('css/styles.css'),
		new HtmlWebpackPlugin({ template: './public/index.html', inject: true })
	]
}
