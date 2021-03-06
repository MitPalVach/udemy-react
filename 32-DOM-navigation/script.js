// console.log(document.documentElement); // позволяет получить главный Html со всеми вложеностями
// console.log(document.body.childNodes); // позволяет получить все Ноды, которые есть внутри этого (body) родителя
// console.log(document.body.firstChild); // позволяет получить первую Ноду, этого (body) родителя
// console.log(document.body.lastChild); // позволяет получить последнюю Ноду, этого (body) родителя

// console.log(document.querySelector('#current').parentNode); // получаем родителя id current
// console.log(document.querySelector('#current').parentNode.parentNode); // получаем родителя родителя id current

// console.log(document.querySelector('[data-current="3"]').nextSibling); // получаем следующую Ноду после data-current
// console.log(document.querySelector('[data-current="3"]').previousSibling); // получаем предыдущую Ноду перед data-current
"use strict";

// for (let node of document.body.childNodes) {
//     if (node.nodeName === '#text') {
//         continue;
//     }
//     console.log(node);
// }

const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script); // подгрузка скрипта
}

loadScript('test.js');
loadScript('some.js');