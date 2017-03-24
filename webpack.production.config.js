var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractFonts = new ExtractTextPlugin('../fonts.css');

module.exports = {
  context: path.join(__dirname),

  devtool: 'eval',

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ["src/style"]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loaders: ['raw-loader']
      },
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        loader: extractFonts.extract({
          loader: 'css-loader',
        }),
      },
      {
        test: /\.(ttf|otf|eot|svg|ico|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: ['file-loader'],
      },
    ],
  },

  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },

  plugins: [
    extractFonts,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
