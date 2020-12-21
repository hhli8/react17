const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const BuildRightPlugin = require('./plugins/BuildRightPlugin');
const webpack = require('webpack');

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  /* entry: {
    main: "./react/main.js"
  }, */
  entry: [
    // 'react-hot-loader/patch',
    './react/main.js'
  ],
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist/react")
  },
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./react/index.html"),
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css"
    }),
    /* new BuildRightPlugin({
      v: '1.0.0'
    }) */
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 50000,
      minChunks: 1,
      automaticNameDelimiter: '~'
    }
  },
  resolve:{
    modules: [path.resolve(__dirname, "./node_modules")],
    extensions: ['.js', '.json'],
    alias: {
      '@': path.join(__dirname, './react/src'),
      // 'react-dom': '@hot-loader/react-dom'
      // "@": "path.resolve(__dirname, "app/third/module.js")"
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: "./dist/react",
    open: false,
    hot: true,
    // hotOnly: true,
    port: 8081,
    overlay: true,
    inline: true
  },
  module: {
    strictExportPresence: true,
    noParse: /jquery|lodash/,
    rules: [
      {
        test: cssRegex,
        // include: path.resolve(__dirname, "./react"),
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, 'css-loader']
      },
      {
        test: sassRegex,
        include: path.resolve(__dirname, "./react"),
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        }, 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        include: path.resolve(__dirname, "./react"),
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash:6].[ext]",
            outputPath: "images/",
            limit: 12 * 1024
          },
        }
      },
      {
        test: /\.m?js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // loader: ['react-hot', 'babel-loader'],
          options: {
            // 会在正在被转录的文件的当前目录中查找一个 .babelrc 文件
            babelrc: false,
            presets: [
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env'), {modules: false}]
            ],
            // 将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程(recompilation process)
            cacheDirectory: true,
            // 退出缓存压缩
            cacheCompression: false,
            "plugins": [
              'react-hot-loader/babel',
              /* ["import", {
                libraryDirectory: 'es',
                style: 'css',
                libraryName: "antd-mobile"
              }], */
              ["import", {libraryDirectory: 'lib',libraryName: "rsnake"}]
            ]
          }
        }
      },
      {
        test: /\.jsx?$/, 
        enforce: 'pre',  
        loader: "eslint-loader",
        include: /react/
      }
    ]
  }
};