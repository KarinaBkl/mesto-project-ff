const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
<<<<<<< HEAD
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/components/cards.js', './src/components/index.js', './src/components/modal.js', './src/components/card.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  mode: 'production', // Изменено на production
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true // Отключен автоматический запуск браузера
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader'
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ]
};
=======
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 


module.exports = {
  entry: ['./src/components/cards.js', './src/components/index.js', './src/components/modal.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
                publicPath: ''
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'), 
        compress: true, 
        port: 8080,
    
        open: true 
      },
      module: {
        rules: [ 
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: '/node_modules/'
          },
          {
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource'
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, {
              loader: 'css-loader'
            }]
          }
          ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html' 
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
      ] 
    }
>>>>>>> ac26bc6393f9c575d7642aad66198ec14f7d4c3a
