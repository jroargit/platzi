const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/', 
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			Component: path.resolve(__dirname, 'src/components/'),
			Containers: path.resolve(__dirname, 'src/containers/'),
			Cons: path.resolve(__dirname, 'src/icons/'),
			Logos: path.resolve(__dirname, 'src/logos/'),
			Pages: path.resolve(__dirname, 'src/pages/'),
			Routes: path.resolve(__dirname, 'src/routes/'),
			Styles: path.resolve(__dirname, 'src/styles/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|scss|sass)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(svg|png)$/,
				type: 'asset'
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
	devServer: {
		historyApiFallback: true,
	}, 
}
