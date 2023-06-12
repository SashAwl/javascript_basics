/**   Задание 1: ""Управление библиотекой книг""
Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
 */
class Book {
    title = 'Name_book';
    author = 'Name_author';
    pages = 150;

    displayInfo = () => {
        console.log(`Название книги: "${this.title}". Автор: ${this.author} ${this.pages} стр.`)
    }
}
const book1 = new Book();
book1.title = 'Поднятая целина'
book1.author = 'Шолохов М.А.';
book1.pages = 840;
book1.displayInfo();  //  Название книги: "Поднятая целина". Автор: Шолохов М.А. 840 стр.


/**    Задание 2: ""Управление списком студентов""
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
 */
class Student {

    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo = () => {
        console.log(`
            Name: ${this.name}
            Age: ${this.age}th grade
            Grade: ${this.grade} `)
    }
}
const student1 = new Student("Jane Doe", 17, "11th grade");
student1.displayInfo();