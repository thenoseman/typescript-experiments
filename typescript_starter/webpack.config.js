/*eslint-env node */
var path = require("path");

module.exports = {
  entry: {
    app: ['./ts/app.ts']
  },
  output: {
    path: path.resolve(__dirname, "app/js"),
    filename: 'app.js',
    publicPath: "/js/"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: "app"
  }
};
