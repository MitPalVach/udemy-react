"use strict";
//// ===== Передача по ссылке или по значению, Spread оператор (ES6-ES9) ===============================================
//
// let a = 5,
//     b = a;
// b += 5;
// console.log(b);
// console.log(a);
//
// const obj = {
//     a: 5,
//     b: 1
// };
//// ===
// const copy = obj; // ссылка на obj, а не сам obj
// copy.a = 10;
// console.log(copy);
// console.log(obj);
//
// function copy(mainObj) {
//   let objCopy = {};
//   let key;
//   for (key in mainObj) {
//       objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y:4
//     }
// };
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);
//// ===
// const add = {
//     d:17,
//     e:20
// };
//
// console.log(Object.assign(numbers, add)); // закидывает в обект numbers еще свойства (d, e)
// const clone = Object.assign({}, add);
// clone.d = 22;
// console.log(add);
// console.log(clone);
//
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // slice копирует старый массив
// newArray[1] = 'sacsdzcdc';
// console.log(newArray);
// console.log(oldArray);
//
////  === Spread оператор 'разварота' (новый стандарт ES6 и ES8) создания поверхносттной копии
//
// const video = ['youtube', 'vimeo', 'patreon'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'fb'];
//
// console.log(internet);
// // ==
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 44, 6];
// log(...num);
// // ==
// const array = ['a', 'b'];
// const newArray1 = [...array];
// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {...q};
// console.log(newArray1);
// console.log(newObj);
//
//// ==== ООП ==========================================================================================================
//
// let str = 'some';
// let strObj = new String(str);
//
// console.log(typeof (str));
// console.log(typeof (strObj));
//
// console.dir([1,2,3]);
//// ===
// const soldier = {
//   health: 400,
//   armor: 150
// };
// const john = Object.create(soldier);
// Object.setPrototypeOf(john, soldier)
// console.log(john.armor);
//
//// ==== Динамическая типизация =======================================================================================
// // == To string
// const fontSize = 26 + 'px';
// console.log(typeof (fontSize));
// // == To number
// let answ = +prompt('asdasd', ''); // унарный плюс
// console.log(typeof (answ))
//
//// ==== Ветвления ====================================================================================================


//// ==== Ветвления ====================================================================================================


//// ==== Ветвления ====================================================================================================


//// ==== Ветвления ====================================================================================================


//// ==== Ветвления ====================================================================================================


//// ==== Ветвления ====================================================================================================













































