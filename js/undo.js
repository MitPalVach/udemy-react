"use strict";
//// ===================================================================================================================
//
// function createCounter() {
//     let counter = 0;
//     const myFunction = function () {
//         counter = counter + 1;
//         return counter
//     }
//     return myFunction
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);
//
//// ===
// let val =7;
// function createAdder() {
//     function addNumbers(a,b) {
//         let ret = a + b;
//         return ret
//     }
//     return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val, 8);
// console.log('example of function returning a function: ', sum);
//
//// ===
//
// let vall = 2;
// function multiplyThis(n) {
//     let ret = n * vall;
//     return ret
// }
// let multiplied = multiplyThis(6);
// console.log('example of scope:', multiplied);
//
//// ===
//
// let a = 3;
// function addTwo(x) {
//     let ret = x + 2;
//     return ret
// }
// let b = addTwo(a)
// console.log(b)
//
//
//
//// ==== Ветвления ====================================================================================================
//
// const num = 50;
// if (num < 44) {
//     console.log('net');
// } else if (num > 111) {
//     console.log('net');
// } else {
//     console.log('da');
// }
// (num < 60) ? console.log('da') : console.log('net');

//// ===

// const numb = 50;
// switch (numb) {
//     case 49:
//         console.log('net');
//         break;
//     case 100:
//         console.log('net');
//         break;
//     case 50:
//         console.log('da');
//         break;
//     default:
//         console.log('---');
//         break;
// }

//// ===== Циклы =======================================================================================================

// let number1 = 50;
// while (number1 < 55) {
//     console.log(number1);
//     number1++;
// }

//// ====

// for (let i = 1; i < 10; i++) {
//     if (i) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

//// ====

// do {
//     console.log(number1);
//     number1++;
// } while (number1 < 55);
//
//// ==== Функции ======================================================================================================
//
// let num = 20;
//
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 12;
//     console.log(num);
// }
//
// showFirstMessage('Hello world!');
// console.log(num);
//
//// ===
//
// function calc(a, b) {
//     return (a + b);
// }
//
// console.log(calc(4, 3));
// console.log(calc(7, 5));
// console.log(calc(11, 12));
//
//// ===
//
// function ret() {
//     let num = 50;
//     return num;
// }
//
// const anotherNum = ret();
// console.log(anotherNum);
//
//// ===
//
// const logger = function () {
//     console.log('hi');
// };
//
// logger();
//
//// ===
//
// const calc = (a, b) => {
//    return  a + b
// };
//
//// ==== Функции для строк и чисел ====================================================================================
//
// const fd = 'teSt-tEst-111';
// const ddd = [1,2,3,4];
//
// console.dir(fd.toLowerCase());
// console.log(ddd.length);
//
// let fruit = 'Some 23 fruit - is apple'
// console.log(fruit.indexOf('uit'));
//
// const logg = '1234 5678 4321 8765 309';
// const loog = (logg).slice(-8, -4);
// console.log('XXXX ' + loog);
// console.log(logg.substr(10, 3));
//
// const num = 12.2;
// const numb = Math.round(num);
// console.log(numb);
//
// const test = '12.3px';
// console.log(parseFloat(test));
//
//// ====== Callback ===================================================================================================
//
// function first(y) {
//     console.log(1);
//     y();
// }
//
// function second(a, b) {
//     console.log(a * b);
// }
//
// first(function (){
//     second(5,7)
// });
// second(4, 7);
//
//// ====== Задачка на поиск натуральных чисел =========================================================================
//
// let n = 10;
// nextPrime:
//     for (let i = 2; i <= n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//         console.log(i);
//     }
//
//// ==== Объекты ======================================================================================================
//
// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//       border: 'black',
//       bg: 'red'
//   },
//     makeTest: function () { // Созданная функция внутри объекта
//       console.log('Test');
//     }
// };
//
// options.makeTest();
// console.log(Object.keys(options).length);
//
// const {border, bg} = options.colors; // деструктуризация объекта
// console.log(border);
//
// delete options.name;
// console.log(options['colors']["border"]);
//
// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for(let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             // counter++;
//         }
//     } else  {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//     }
// }
// console.log(counter);
//// ===== Массивы =====================================================================================================
//
// const arr = [1, 3, 5, 6, 7, 9];
// arr.pop();
// arr.push(22);
//
// console.log(arr.length);
//
// for (let i =0; i < arr.length;i++) {
//     console.log(arr[i]);
// }
//
// for (let value of arr) {  // for of используется, когда нужны прерывания break / continue
//     console.log(value);
// }
//
// arr.forEach(function (item, index, arr){ // forEach - простой перебор, используется почти всегда
//     console.log(`${index}: ${item} внутри массива ${arr}`);
// });
//
// const str = prompt('', '');
// const products = str.split(', '); // получение массива
// products.sort(); // сортирует элименты массива как строки (если просто sort() то по алфавитному порядку)
// console.log(products. join('; ')); // получение строки
// ===
// const arr1 = [1, 23, 45, 16, 27, 9];
// function compareNum(a, b) {
//     return a-b;
// }
// arr1.sort(compareNum);
// console.log(arr1);
































