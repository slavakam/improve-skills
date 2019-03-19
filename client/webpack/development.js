const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const configureDevServer = require('./settings/devServer');

module.exports = () => {
  const devServer = configureDevServer();

  return {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      filename: 'assets/scripts/main-bundle.js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
    },
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.less'],
    },
    devServer,
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|tsx?)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
        },
        {
          test: /\.(png|gif|jpg|svg)$/,
          exclude: /node_modules/,
          use: 'url-loader?limit=20480&name=assets/images/[name]-[hash].[ext]',
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&name=assets/fonts/[name]-[hash].[ext]&mimetype=application/font-woff',
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&name=assets/fonts/[name]-[hash].[ext]&mimetype=application/font-woff',
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=65000&name=assets/fonts/[name]-[hash].[ext]&mimetype=application/octet-stream',
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&name=assets/fonts/[name]-[hash].[ext]&mimetype=application/vnd.ms-fontobject',
        },
        {
          test: /\.less$/,
          include: path.resolve(__dirname, '../src/styles'),
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer({
                  browsers: ['> 1%', 'last 2 versions'],
                })],
              },
            },
            { loader: 'less-loader' },
          ],
        },
        {
          test: /\.less$/,
          exclude: path.resolve(__dirname, '../src/styles'),
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                modules: true,
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer({
                  browsers: ['> 1%', 'last 2 versions'],
                })],
              },
            },
            { loader: 'less-loader' },
          ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        favicon: './public/favicon.ico',
      }),
    ],
    devtool: 'source-map',
  };
};
