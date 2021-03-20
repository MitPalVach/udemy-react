'use strict';
//// ===== JSON формат передачи данных, глубокое клонирование объектов ===============================================51
// const person = {
//     name: 'Alex',
//     tel: '+72345234533',
//     parents: {
//         mom: 'Sarah',
//         dad: 'Bob'
//     }
//
// };
// const clone = JSON.parse(JSON.stringify(person));
// clone.parents.mom = 'Ann';
// console.log(person);
// console.log(clone);

//// ===== AJAX и общение с сервером =================================================================================52
//=== старый вариант через XMLHttpRequest
const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd'),
    inputEur = document.querySelector('#eur');
inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, password);  //  пример заполнения
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', ()=> {
       if (request.status === 200) {
           const data = JSON.parse(request.response);
           inputUsd.value=(+inputRub.value / data.current.usd).toFixed(2);
           inputEur.value=(+inputRub.value / data.current.eur).toFixed(2);
       } else {
           inputUsd.value = 'Что-то пошло не так';
           inputEur.value = 'Что-то пошло не так';
       }
    });
});









