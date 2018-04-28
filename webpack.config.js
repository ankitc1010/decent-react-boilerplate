const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')
const VENDOR_LIB = ['preact']
const paths = ['dist']
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
var WebpackPwaManifest = require('webpack-pwa-manifest')
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
			'/api': 'http://localhost:3000'
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
		new CleanWebpackPlugin(paths),
		new ExtractTextPlugin('css/styles.css'),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			inject: true,
			favicon: './public/favicon.ico'
		}),
		new WebpackPwaManifest({
			name: 'Decent Preact BoilerPlate',
			short_name: 'Decent BoilerPlate',
			description: 'Progressive Web App Boiler Plate',
			background_color: '#ffffff',
			icons: [
				{
					src: path.resolve('src/logo.png'),
					sizes: [120, 152, 167, 180, 1024],
					destination: path.join('icons', 'ios'),
					ios: true
				},
				{
					src: path.resolve('src/logo.png'),
					size: 1024,
					destination: path.join('icons', 'ios'),
					ios: 'startup'
				},
				{
					src: path.resolve('src/logo.png'),
					sizes: [36, 48, 72, 96, 144, 192, 512],
					destination: path.join('icons', 'android')
				}
			]
		}),
		new workboxPlugin.GenerateSW({
			importsDirectory: 'js',
			swDest: 'sw.js',
			clientsClaim: true,
			skipWaiting: true,
			runtimeCaching: [
				{
					// Match any request ends with .png, .jpg, .jpeg or .svg.
					urlPattern: /\.(?:png|jpg|jpeg|svg|json)$/,

					// Apply a cache-first strategy.
					handler: 'cacheFirst'
				}
			]
		})
	]
}
