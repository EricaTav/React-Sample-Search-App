var webpack = require('webpack')

module.exports = {
  entry: "./src/scripts",
  output: {
    publicPath: "/dist/scripts/",
    path: __dirname + "/dist/scripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,

        loader: "babel",
        exclude: "/node_modules",
        query: {
          presets: ["es2015", "react"]
        }
      },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader'
        },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        exclude: "/node_modules"
      },
        {test: /\.(jpeg|png|gif|svg)$/i, loader: "file-loader?name=/src/images/[name].[ext]"}

    ]
  }
}
