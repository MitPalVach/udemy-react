'use strict';

console.log('Запрос данных...');

const req = new Promise((resolve, reject) => {  // решить, отклонить (т.е. выполнилось, не выполнелось)
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 13000
        };
        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered';
            resolve(product);
            // reject();
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(()=> {  // reject
    console.error('Произошла ошибка!');
}).finally(()=> {
   console.log('Finally');
});

// ====== All, Race

const test = time => {
    return new Promise(resolve => {
        setTimeout(()=> resolve(),time);
    });
};

Promise.all([test(1000), test(2000)]).then(()=>{ // ждет выполнения всех промисов и после этого выполняет свои действия
   console.log('All');
});
Promise.race([test(1000), test(2000)]).then(()=>{ // выполняет свои действия после первого промиса
   console.log('All');
});






































