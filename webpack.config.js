module.exports = {
	entry: ["./src/index.js"],
	output: {
    path: __dirname + '/dist',
		filename: "app.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				presets: ['es2015']
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}