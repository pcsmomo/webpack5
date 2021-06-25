const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'none',
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
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
};
