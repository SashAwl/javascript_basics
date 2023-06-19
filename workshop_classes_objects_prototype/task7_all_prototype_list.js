/** Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта
obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом
Object.prototype. */

function getPrototypeChain(obj) {
    const arr = [];
    while (obj) {
        arr.push(obj);
        obj = Object.getPrototypeOf(obj);
    }
    return arr;
}

const person = {
    name: "John",
    age: 25,
    gender: "male"
}

const profi = {
    proffesion: "prof"
}

profi.__proto__ = person;

const protoListPerson = getPrototypeChain(person);
const protoListProfi = getPrototypeChain(profi);
