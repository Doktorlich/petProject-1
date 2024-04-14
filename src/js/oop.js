"use strict";
const date = new Date();

const Person = function (firstName, birthDay) {
    this.firstName = firstName;
    this.birthDay = birthDay;
};

Person.prototype.printAge = function () {
    console.log(date.getFullYear() - this.birthDay);
};
const yura = new Person("Yura", "1900");
//1 создается новый пустой обьект
//2 вызывается функция this ={}(пустой обьект)
//3 Пустой обьект связывается с прототипом
//4 Функция автоматически возвращает созданный обьект
// console.log(yura.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(yura));


