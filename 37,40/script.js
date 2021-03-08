"use strict";
// // ==== ClassList ======================================================================================================
// const btns = document.querySelectorAll('button'),
//     wrapper = document.querySelector('.btn-block');
//
// // console.log(btns[0].classList.length);
// // console.log(btns[0].classList.item(0));
// // console.log(btns[1].classList.add('red', 'newClass'));
// // console.log(btns[0].classList.remove('blue'));
// // console.log(btns[0].classList.toggle('blue'));
//
// // if (btns[1].classList.contains('red')) {
// //     console.log('red');
// // }
//
// btns[0].addEventListener('click', () => {
//     // if(!btns[1].classList.contains('red')) {
//     //     btns[1].classList.add('red');
//     // }else {
//     //     btns[1].classList.remove('red');
//     // }
//     // == или toggle
//     // btns[1].classList.toggle('red'); // так быстрее, но в больших скриптах лучше вручную проверять
// });
// // ======= Делегирование событий =======================================================================================
// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName === 'BUTTON') {
//         console.log('Hello');
//     }
// });
//
// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);
// // ======= 40 урок - Работа с Датами =======================================================================================
const now = new Date();
// get
console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());
// console.log(now.getHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// // set
// console.log(now.setHours(22));
// console.log(now);
// // ===
// let start = new Date();
// for (let i = 0; i < 1000000000; i++) {
//     // let some = i ** 3;
// }
// let end = new Date();
// alert(`Цикл отработал за ${end - start} ms`);


