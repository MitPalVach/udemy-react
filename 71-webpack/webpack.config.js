'use strict';

let path = require('path');

module.exports = {
  mode: 'development', // - режим разработки, (2-ой режим production - финальный - набор плагинов для оптимизации)
  entry: './js/script.js', // файл в котором прописываются все зависимоти require, import
  output: { // файл выхода (объект)
    filename: 'bundle.js', // название файла
    path: __dirname + '/js' // куда будет класть
  },
  watch: true, // true - автоматически отслеживает изменение файлов и автоматически собирает проект

  devtool: "source-map", // хранит в себе исходники и место расположения кода

  module: {} // модули вп (CoffeeScript / TypeScript / ESNext (Babel) / Sass etc.)
};
