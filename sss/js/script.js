"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмом посмотрели?', '');
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмом посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('malo');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('norm');
        } else if (personalMovieDB.count > 30) {
            console.log('mnogo');
        } else {
            console.log('error');
        }
    },
    showMyDB: function () {
        if (personalMovieDB["privat"] === false) {
            console.log(personalMovieDB["privat"])
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
            if (genre != null && genre !== '' && genre.length < 15) {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимы жанр ${i + 1} - это ${item}`);
        });
    }
};