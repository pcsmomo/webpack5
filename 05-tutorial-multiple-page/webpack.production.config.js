const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    ninja: './src/ninja.js'
  },
  output: {
    // default name is 'main'
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'auto'
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 3000
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024 // 3 kilobytes, The default size is 8kb
          }
        }
      },
      {
        test: /\.txt/,
        type: 'asset/source'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
            // plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.hbs/,
        use: ['handlebars-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*')
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      template: 'src/page-template.hbs',
      title: "Noah's Hello World",
      description: 'Hello world',
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'ninja.html',
      chunks: ['ninja'],
      template: 'src/page-template.hbs',
      title: 'Javascript Ninja',
      description: 'I am going to be a javascript ninja',
      minify: false
    })
  ]
};
