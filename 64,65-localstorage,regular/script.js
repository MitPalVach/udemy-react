'use strict';
//// ===== localStorage ==============================================================================================64
// localStorage.setItem('number', 5);
// localStorage.removeItem('number');
// localStorage.clear();
// console.log(localStorage.getItem('number'));
//
// const checkbox = document.querySelector('#checkbox'),
//     form = document.querySelector('form'),
//     change = document.querySelector('#color');
//
// if (localStorage.getItem('isChecked')) {
//     checkbox.checked = true;
// }
//
// if (localStorage.getItem('bg') === 'changed') {
//     form.style.backgroundColor = 'red';
// }
//
// checkbox.addEventListener('change', () => {
//     localStorage.setItem('isChecked', true);
// });
//
// change.addEventListener('click', () => {
//     if (localStorage.getItem('bg') === 'changed') {
//         localStorage.removeItem('bg');
//         form.style.backgroundColor = 'white';
//
//     } else {
//         localStorage.setItem('bg', 'changed');
//         form.style.backgroundColor = 'red';
//     }
// });
//
// // =====
//
// const person = {
//     name: 'Alex',
//     age: 23
// };
//
// const serializedPerson = JSON.stringify(person);
// localStorage.setItem('alex', serializedPerson);
// console.log(JSON.parse(localStorage.getItem('alex')));
//
//// ===== regular expression ===================================================================================================65
// new RegExp('pattern', 'flags');  // не используемый
// /pattern/f  // используемый
// i - флаг поиска независимо от регистра
// g - флаг поиска нескольких вхождений
// m - флаг поиска в многострочном режиме
// \d - поиск цифр
// \w - слова/буквы
// \s - пробелы
// \D - не цифры
// \W - не буквы

// const ans = prompt('Введите ваше имя');
// const reg = /n/ig;

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');
// console.log(pass.replace(/\./g, '*'));

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i)); // Найти р2д2


























