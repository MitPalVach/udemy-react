// "use strict";

const numberOfFilms = +prompt('Сколько фильмом посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const films = prompt('Один из последних фильмов?', ''),
    rate = +prompt('На сколько оцените его?', ''),
    films1 = prompt('Один из последних фильмов?', ''),
    rate1 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[films] = rate;
personalMovieDB.movies[films1] = rate1;

console.log(personalMovieDB);




































































