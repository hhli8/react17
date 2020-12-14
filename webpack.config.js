const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const prod = false;

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  // entry: "./src/index.js",
  entry: {
    index: './src/index.js',
    print: './src/print.js',
    react0: './react/main.js'
  },
  output: {
    // publicPath: ''
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist")
  },
  // devtool: 'inline-source-map',
  // none  production development
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: path.resolve(__dirname, "./src/index.html"),
      chunks: ['index', 'print'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./react/index.html"),
      filename: 'react.html',
      chunks: ['react0'],
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: !prod ? '[name].[contenthash:8].css' : 'static/css/[name].[hash].css',
      // chunkFilename: !prod ? '[id].css' : 'static/css/[id].[hash].css'
    })
  ],
  optimization: {
    // usedExports: true, 、、生产默认true
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 50000,
      minChunks: 1,
      automaticNameDelimiter: '~'
      /* chunks: 'async',
      // all, async表示只从异步加载得模块（动态加载import()）里面进行拆分, and initial表示只从入口模块进行拆分
      minSize: 20000, // 规定被提取的模块在压缩前的大小最小值，单位为字节
      minRemainingSize: 0,
      // 通过确保分割后剩余块的最小大小超过指定限制，从而避免了零大小的模块。
      maxSize: 50000,
      minChunks: 1, // 表示要被提取的模块最小被引用次数，引用次数超过或等于minChunks值，才能被提取。
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: { // 配置提取模块的方案
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 配置提取模块的方案
          reuseExistingChunk: true
          // 为true时，如果当前要提取的模块，在已经在打包生成的js文件中存在，则将重用该模块，而不是把当前要提取的模块打包生成新的js文件。
        },
        common: {
          // name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      } */
    }
  },
  devServer: {
    contentBase: "./dist",
    open: false,
    hot: true,
    hotOnly: true,
    // //即便HMR不⽣效，浏览器也不⾃动刷新，就开启hotOnly
    port: 8081
  },
  resolve:{
    modules: [path.resolve(__dirname, "./node_modules")],
    extensions: ['.js', '.json']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    strictExportPresence: true, // makes missing exports an error instead of warning
    noParse: /jquery|lodash/,
    rules: [
//    {
//      test: /regex/,
//      use: [loaders],
//      sideEffects: true
//    },
      {
        test: cssRegex,
        // exclude: cssModuleRegex,
        include: path.resolve(__dirname, "./src"),
        use: [{
          // loader: 'style-loader',
          loader: MiniCssExtractPlugin.loader,
          options: {
            // injectType: "singletonStyleTag"
          }
        }, 'css-loader']
      },
      {
        test: sassRegex,
        // exclude: sassModuleRegex,
        include: path.resolve(__dirname, "./src"),
        use: [{
          // loader: 'style-loader',
          loader: MiniCssExtractPlugin.loader, // 5979=>5970
          options: {
            // injectType: "singletonStyleTag"
          }
        }, 'css-loader', 'sass-loader']
      }
      // file-loader url-loader postcss-loader
    ]
  }
};