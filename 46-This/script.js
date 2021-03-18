'use strict';

// // 1) Обычная функция: this = window, но если 'use strict'; то будет undefined
// function showThis(a, b) {
//     console.log(this);
//
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
//
// // 2) Контекст у методов объекта - сам объект
// const obj = {
//   a: 20,
//   b:15,
//   sum: function () {
//       console.log(this);
//   }
// };
// obj.sum();
//
// // 3) this в конструкторах и классах - это новый экземаляр объекта   !!!   ГЛАВНОЕ
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
// }
// let Ivan = new User('Ivan', 24);
//
// // 4) Ручная привязка this: call, apply, bind
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
//
// const user = {
//     name: 'John'
// };
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);
// === bind
// function count(num) {
//     return this*num;
// }
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));
// // ==================================================================================================================
const btn = document.querySelector('button');

btn.addEventListener('click', function () {  // Если обычная функция то This обращается сам к себе (btn)
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {  // У стрелочной функции нет контекста вызова, она всего его берет у своего родителя
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();











