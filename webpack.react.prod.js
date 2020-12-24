const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const BuildRightPlugin = require('./plugins/BuildRightPlugin');

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  entry: {
    main: "./react/main.js"
  },
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist/react")
  },
  mode: "production",
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
    /* new copyWebpackPlugin({
      patterns: [
        {
          from: __dirname + '/dist/react',
          to: './react'
        }
      ]
    }) */
  ],
  optimization: {
    chunkIds: "named",
    /* splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 50000,
      minChunks: 1,
      automaticNameDelimiter: '~'
    } */
    /* splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 50000,
      minChunks: 1,
      automaticNameDelimiter: '~'
    } */
    splitChunks:{
      cacheGroups: {
        vendors: {
          test: "vendors",
          name: 'vendors',
          priority:10,
        },
        common: {
          name: 'common',
          minChunks: 2,
          minSize: 30000,
          chunks: 'all'
        },
        /* styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          priority: 9,
          enforce: true
        } */
      }
    }
  },
  resolve:{
    modules: [path.resolve(__dirname, "./node_modules")],
    alias: {
      '@': path.join(__dirname, './react/src')
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    'react-redux': 'ReactRedux',
    'redux': 'Redux'
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
        }, 'css-loader', 'postcss-loader']
      },
      /* {
        test: /\.less$/,
        exclude: path.resolve(__dirname, "./react"),
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' }, 
          {
            loader: 'less-loader',
            options: {
              // javascriptEnabled: true
            }
          }
        ]
      }, */
      {
        test: sassRegex,
        include: path.resolve(__dirname, "./react/src/assets"),
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader',
        }, 'sass-loader', 'postcss-loader']
      },
      {
        test: sassRegex,
        include: path.resolve(__dirname, "./react/src/pages"),
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
              /* ["import", {
                libraryDirectory: 'es',
                style: 'css',
                libraryName: "antd-mobile"
              }], */
              ["import", {libraryDirectory: 'lib',libraryName: "rsnake"}]
            ]
          }
        }
      }
    ]
  }
};