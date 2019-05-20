const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  // 插件项
  plugins: [
    // new MonacoWebpackPlugin({
    //   languages: ['javascript'],
    // }),
    // new CleanWebpackPlugin(['docs']),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'test',
      inject: 'body'
    }),
    // 编译时(compile time)插件
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': '"development"',
    // }),
  ],
  entry: {
    index: './src/app.js'
  },
  mode: 'development',
  // devtool: 'inline-source-map',
  devServer: {
    disableHostCheck: false,
    contentBase: path.join(__dirname, "docs"), //静态文件根目录
    port: 7000, // 端口
    host: 'localhost',
    overlay: true,
    compress: true, // 服务器返回浏览器的时候是否启动gzip压缩
    publicPath: '/'
  },
  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules|kos-form\/lib|kos\/lib|kos-form-antd\/lib/,
        // exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: false,
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              minimize: false,
              sourceMap: true,
              javascriptEnabled: true,
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', ".css", ".jsx", '.json', '.less', '.scss'],
    // modules: ['node_modules', 'antd/dist'],
    alias: {
      'lib': path.resolve('./lib'),
      'kos-core': path.resolve('../kos/lib/index.es.js'),
      'kos-form': path.resolve('../kos-form/lib/index.es.js'),
      'kos-form-antd': path.resolve('../kos-form-antd/lib/index.es.js')
    }
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
}
