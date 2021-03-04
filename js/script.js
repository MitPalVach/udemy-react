"use strict";

const numberOfFilms = +prompt('Сколько фильмом посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const films = prompt('Один из последних фильмов?', ''),
        rate = +prompt('На сколько оцените его?', '');

    if (films != null && rate != null && films != '' && rate != '' && films.length < 50) {
        personalMovieDB.movies[films] = rate;
        console.log('Yes');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('malo');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('norm');
} else if (personalMovieDB.count > 30) {
    console.log('mnogo');
} else {
    console.log('error');
}

console.log(personalMovieDB);


// =====================================================================================================================

// const num = 50;
// if (num < 44) {
//     console.log('net');
// } else if (num > 111) {
//     console.log('net');
// } else {
//     console.log('da');
// }
// (num < 60) ? console.log('da') : console.log('net');
//
// const numb = 50;
// switch (numb) {
//     case 49:
//         console.log('net');
//         break;
//     case 100:
//         console.log('net');
//         break;
//     case 50:
//         console.log('da');
//         break;
//     default:
//         console.log('---');
//         break;
// }

// =====================================================================================================================

// let number1 = 50;
// while (number1 < 55) {
//     console.log(number1);
//     number1++;
// }

// do {
//     console.log(number1);
//     number1++;
// } while (number1 < 55);

// for (let i = 1; i < 10; i++) {
//     if (i) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }




















































