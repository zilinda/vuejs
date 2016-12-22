var HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-disable */
const path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var projectRoot = path.resolve(__dirname, './')

module.exports = {

	//devtool: 'cheap-module-eval-source-map',

	devtool: 'inline-source-map',

	entry: [
		// necessary for hot reloading with IE:
		///'eventsource-polyfill',
		// listen to code updates emitted by hot middleware:
		//'webpack-hot-middleware/client',

		'./app/index.es6' // Your appʼs entry point
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/dist/",
		filename: 'js/xz.js'
	},

	devServer: {
		//     contentBase:'./dist/view',
		//     publicPath: "/assets/",
		//     hot: true,
		//     historyApiFallback: false,
		// headers: { "X-Custom-Header": "yes" },
		port: 3000,
		hot: true,
		historyApiFallback: true
	},

	plugins: [

		//new webpack.optimize.CommonsChunkPlugin('js/comm.js'),
		// 给js中剥离的css的文件指定名称


		// new webpack.optimize.UglifyJsPlugin({ //压缩代码
		// 	compress: {
		// 		warnings: false
		// 	},
		// 	except: ['$super', '$', 'exports', 'require'] //排除关键字
		// }),


		//new webpack.HotModuleReplacementPlugin(),

		// new HtmlWebpackPlugin({
		// 	//title: "无效",
		// 	filename: path.resolve(__dirname, 'index.html'),
		// 	template: "./pageTpl/index.html",
		// 	inject: "true", // body  head false 
		// 	//favicon :""
		// 	hash: true,
		// 	minify: { //压缩HTML文件
		// 		removeComments: true //移除HTML中的注释
		// 			//collapseWhitespace: true //删除空白符与换行符
		// 	}
		// }),

		new ExtractTextPlugin('css/xz.css'),
	],

	module: {

		loaders: [{
				test: /\.vue$/,
				loader: 'vue'
			}, {
				test: /\.es6$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'stage-2']
				},
				exclude: [nodeModulesPath]
			}, {
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style', 'css!less')
			}, {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css')
			}, {
				test: /\.(png|jpe?g|gif)(\?.*)?$/,
				loader: 'url?limit=2048&name=imgs/[name]_[hash:4].[ext]'
			}, {
				test: /\.(woff|eot|ttf|otf|svg)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: 'imgs/fonts/[name].[hash:4].[ext]'
				}
			}
			//,{test: /\.html$/,loader: 'vue-html'},

		]
	},

	 // vue-loader config:
  	// lint all JavaScript inside *.vue files with ESLint
  	// make sure to adjust your .eslintrc
	vue: {
	    loaders: {
	      js: 'babel-loader?presets[]=es2015'
	    }
 	},

	resolve: {
		extensions: ['', '.js', '.vue', '.es6','.less'],
		fallback: [path.join(__dirname, '../node_modules')],
		alias: {
			 
			//'src': path.resolve(__dirname, '../src'),
			//'assets': path.resolve(__dirname, '../src/assets'),
			//'components': path.resolve(__dirname, '../src/components')
		}
	},

	resolveLoader: {
		fallback: [path.join(__dirname, '../node_modules')]
	}

}