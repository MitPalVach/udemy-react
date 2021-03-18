'use strict';

function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} съебнул`);
}
const Ivan = new User('Ivan', 25);
const Alex = new User('Alex', 29);
Ivan.hello();
Alex.hello();
console.log(Ivan);
console.log(Alex);
Ivan.exit();




















