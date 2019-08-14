const { resolve } = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const { APP_PORT } = require('./src/config');

const production = process.env.NODE_ENV === 'production';

const config = {
  target: 'web',

  name: 'web',

  mode: production ? 'production' : 'development',

  devtool: production ? '' : 'eval',

  // All configs about the webpack-dev-server
  devServer: {
    historyApiFallback: true, // required for react-router works
    publicPath: '/',
    contentBase: resolve(__dirname, './dist/client'),
    open: true, // open browser after compiling
    https: false, // turned off because we don't need it in dev
    compress: true, // turn gzip on
    port: APP_PORT,
  },

  // Our entry file, webpack will start compiling from here
  entry: './src/app/App.jsx',

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  // Here are the infos about where it'll put our compiled code
  output: {
    path: resolve(__dirname, `./dist/web`),
    publicPath: `/`,
    filename: '[hash].js',
    chunkFilename: '[chunkhash:8].js',
  },

  module: {
    rules: [
      {
        // Transpiling all js/jsx files with babel
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            caller: {
              target: 'web',
            },
          },
        },
      },
    ],
  },

  plugins: [
    // Remove/clean the build before building
    new CleanWebpackPlugin(),

    // Getting the HTML template and processing it
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, 'dist/web/index.html'),
      template: resolve(__dirname, 'src/app/index.html'),
    }),

    // // Compressing all files to gzip
    // production
    //   ? new CompressionPlugin({
    //       algorithm: 'gzip',
    //       test: /\.(js|css|html|svg)$/,
    //     })
    //   : null,

    // // Compressing all files to Brotli
    // production
    //   ? new CompressionPlugin({
    //       filename: '[path].br[query]',
    //       algorithm: 'brotliCompress',
    //       test: /\.(js|css|html|svg)$/,
    //     })
    //   : null,

    // Enabling hot module replace on development environment
    !production ? new HotModuleReplacementPlugin() : null,

    // Copying all images to the image folder
    new CopyPlugin([{ from: 'src/images/*', to: '[name].[ext]' }]),
  ].filter(Boolean),
};

module.exports = config;
