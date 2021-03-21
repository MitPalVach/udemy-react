'use strict';

let path = require('path');

module.exports = {
  mode: 'development', // - режим разработки, (2-ой режим production - финальный - набор плагинов для оптимизации)
  // mode: 'production',
  entry: './js/script.js', // файл в котором прописываются все зависимоти require, import
  output: { // файл выхода (объект)
    filename: 'bundle.js', // название файла
    path: __dirname + '/js' // куда будет класть
  },
  watch: true, // true - автоматически отслеживает изменение файлов и автоматически собирает проект

  devtool: "source-map", // хранит в себе исходники и место расположения кода

  module: {  // модули вп (CoffeeScript / TypeScript / ESNext (Babel) / Sass etc.)
    rules: [
      {
        test: /\.m?js$/,  // находим js файлы
        exclude: /(node_modules|bower_components)/,  // файлы, которые будут исключены из выборки
        use: {
          loader: 'babel-loader',  // связывает вп с бабел
          options: {
            presets: [['@babel/preset-env', {  // используется пресет-env (самый популярный)
              debug: true,  // настройка пресета
              corejs: 3,  // стандартная библиотека js со всеми возможными полифилами
              useBuiltIns: "usage"  // автоматически используются только нужные полифилы
            }]]
          }
        }
      }
    ]
  }
};

// npm install --save-dev @babel/core @babel/cli @babel/preset-env   - установка бабеля
// npm install --save @babel/polyfill    - установка полифилов
// npm i --save-dev babel-loader    - установка сабжа
// npm i --save-dev core-js    - установка библиотеки со всеми возможными полифилами












