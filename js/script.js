'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'), // псевдомассив
    hearts = document.querySelectorAll('.heart'), // forEach используется только тут
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = '#3623c3';
// box.style.width = '500px';
box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = '#ccc';
// }
// тоже самое
hearts.forEach(item => {
    item.style.backgroundColor = '#ccc';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я'); // редко используется

div.classList.add('black');
wrapper.append(div); // вставляет div в конец родителя
wrapper.prepend(div); // вставляет div в начало родителя
btns[0].before(div); // ставит div перед 1-ым btns
btns[2].after(div); // ставит div после 3-его btns
circles[0].remove(); // удаляет конкретный элем
hearts[1].replaceWith(circles[0]); // заменили 2-ое hearts 1-ым circles

// === Устаревшее ===
























