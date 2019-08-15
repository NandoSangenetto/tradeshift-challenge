const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { APP_PORT } = require('./src/config');

const production = process.env.NODE_ENV === 'production';

const config = {
  target: 'web',

  name: 'web',

  mode: production ? 'production' : 'development',

  devtool: production ? '' : 'eval',

  // webpack-dev-server config
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    contentBase: resolve(__dirname, './dist/client'),
    open: true,
    https: false,
    compress: true,
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

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 8,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
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
  ].filter(Boolean),
};

module.exports = config;
