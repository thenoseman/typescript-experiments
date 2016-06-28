module.exports = {
  entry: './ts/app.ts',
  output: {
    filename: 'src/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
