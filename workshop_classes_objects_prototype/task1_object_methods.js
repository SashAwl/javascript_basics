/**Создайте объект Person, представляющий человека, с
следующими свойствами: name, age и gender. Добавьте
также методы introduce и changeName. Метод introduce
должен выводить информацию о человеке, включая его
имя, возраст и пол. Метод changeName должен изменять
имя человека на новое заданное значение.
Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce(); // Ожидаемый результат: My name is
John. I'm 25 years old and I identify as male.
Person.changeName("Mike"); */

const person = {
    name: "John",
    age: 25,
    gender: "male",

    introduce: function () { console.log(`My name is ${this.name}. I'm ${this.age} years and I identity as male.`) },

    changeName: function (namePerson) { this.name = namePerson }
}

person.introduce();
person.changeName("Peter");