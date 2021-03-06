const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');


let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i === 3) {
        btns[0].removeEventListener('click', deleteElement);
    }
}

btns[0].addEventListener('mouseenter', (e) => {
    console.log(e);
    // console.log('Hover');
});
// ===
btns[1].addEventListener('click', deleteElement);
const deleteElement1 = (e) => {
    console.log(e.target);
    console.log(e.type);
}
overlay.addEventListener('click', deleteElement1);
// ===

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement1);
});

// ================

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
   event.preventDefault(); // останавливает стандартное поведение браузера
   console.log(event.target);
});
















