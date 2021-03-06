const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractFonts = new ExtractTextPlugin('fonts.css');

module.exports = {
  context: path.join(__dirname),

  devtool: 'inline-source-map',

  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    },
    hot: true,
  },

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    publicPath: '/',
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
        use: ['file-loader?name=[name].[ext]'],
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html'
    })
  ]
};
