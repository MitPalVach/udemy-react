"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмом посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмом посмотрели?', '');
    }
}

start();

// ===

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// ===

function showMyDB() {
    if (personalMovieDB["privat"] === false) {
        console.log(personalMovieDB["privat"])
    }
}

showMyDB();

// ===

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let quest = prompt(`Ваш любимый жанр под номером ${i}`);
        if (quest != null && quest !== '' && quest.length < 15) {
            personalMovieDB.genres[i - 1] = quest;
        } else {
            i--;
        }
    }
}

writeYourGenres();

// ===

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const films = prompt('Один из последних фильмов?', ''),
            rate = +prompt('На сколько оцените его?', '');
        if (films != null && rate != null && films !== '' && rate !== '' && films.length < 30) {
            personalMovieDB.movies[films] = rate;
            console.log('Yes');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

// ======= или

// let p = 0;
// while (p < 2) {
//     const films = prompt('Один из последних фильмов?', ''),
//         rate = +prompt('На сколько оцените его?', '');
//     p++;
//     if (films != null && rate != null && films != '' && rate != '' && films.length < 50) {
//         personalMovieDB.movies[films] = rate;
//         console.log('Yes');
//     } else {
//         console.log('error');
//         p--;
//     }
// }

// ===

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('malo');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('norm');
    } else if (personalMovieDB.count > 30) {
        console.log('mnogo');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

console.log(personalMovieDB);











































