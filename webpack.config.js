const autoprefixer = require('autoprefixer');
const precss = require('precss');
module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.s(a|c)ss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};