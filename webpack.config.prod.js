const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");

module.exports = {

    mode: 'production', // Режим сборки
    // target: 'web',

    entry: path.resolve(__dirname, './src/index.js'),
   
    output: {
        path: path.resolve(__dirname, './prod'),
        filename: '[name].[hash:8].js',
        clean: true
     },


  module: {
    rules: [
      {
        test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ['style-loader', "css-loader"], // Загрузчики, используемые для обработки CSS-файлов
        generator: {
            filename: 'style/[name]-[hash][ext]',
        } 
      },

      {
        test: /\.html$/, 
        use: 'html-loader', 
      },

      {
        test: /\.js$/,  
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
        }
      },

      {
        test: /\.(jpg|png|gif)$/, 
        type: 'asset/resource',
        generator: {
            filename: 'images/[name]-[hash][ext]',
        } 
      },

      {
      test: /\.(woff(2)?|eot|ttf|otf)$/, 
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name]-[hash][ext]',
        } 
      },

      {
        test: /\.svg$/, 
        type: 'asset/resource',
        generator: {
            filename: 'icons/[name]-[hash][ext]',
        }
      },


    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/index.html"),
        filename: "index.html",
    }),

    new MiniCss ({
      filename: "style.css"
    }),
  ],

  
  
  devServer: {
    static: {
      directory: path.join(__dirname, 'prod'), // Каталог для статики
    },
    compress: true,
    port: 5500,
    hot: true,
   
    open: true, // Автоматически открывать браузер
  },

 
};