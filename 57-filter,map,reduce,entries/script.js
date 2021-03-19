'use strict';

// ==== filter - фильтрует элементы внутри массива (например, все у кого имя короче пяти букв)==========================

// const names = ['Ivan', 'Ann', 'Daria', 'Valdemar'];
// const shortNames = names.filter(function (name){
//     return name.length < 5;
// });
// console.log(shortNames);

// ==== map - позволяет взять массив и изменить каждый элемент внутри него и получить новый массив с измененными данными

// const answers = ['IvAn', 'AnnA', 'DARIA', 'VALDemaR'];
// const result = answers.map(item=> item.toLowerCase());
// console.log(result);

// ==== some - если хотя бы один элемент массива подходит под условие, то вернется true ================================

// const ino = [4, 'asas', 'sdfadsa'];
// console.log(ino.some(item => typeof (item) === 'number'));

// ==== every - если все элементы подходят под условие, то вернется true ===============================================

// const ino = [4, 'asas', 'sdfadsa'];
// console.log(ino.every(item => typeof (item) === 'number'));

// ==== reduce - собирает массив в одно единое целое (схлопывает элементы в одно значение) =============================

// const arr = [4, 2, 4, 6, 7, 3, 6, 9];
// const result = arr.reduce((sum,current)=> sum + current, 10);
// console.log(result);

// ===

// const arr = ['apple', 'banana', 'pear', 'pineapple', 'grape'];
// const result = arr.reduce((sum,current)=> `${sum}, ${current}`);
// console.log(result);

// ==== Пример всего выше перечисленного на практике ===================================================================

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item=> item[1] === 'person')
    .map(item => item[0]);

console.log(newArr);











