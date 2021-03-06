const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  entry: {
    main: "./react/src/components/index.js"
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd', // 不管在commonjs、AMD、CMD 引入，都能引入到
    library: 'utils' // 支持script标签引入，全局变量叫 utils
  },
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css"
    }),
  ],
  optimization: {
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
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          priority: 9,
          enforce: true
        }
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
        exclude: /(node_modules|bower_components)/,
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
            cacheCompression: false
          }
        }
      }
    ]
  }
};