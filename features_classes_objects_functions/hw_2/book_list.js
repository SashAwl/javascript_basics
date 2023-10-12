/** Задание 1
 * Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения 
 * списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
 */
class Library {
    #books = [];

    constructor (bookList) {   // если в списке есть дубликаты, выдать ошибку
        try {
            const uniqueBooksList = new Set(bookList)
            if ([...uniqueBooksList].length === bookList.length) {
                this.#books = bookList
            } else {
                throw new Error("В списке есть дубликаты")
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    get allBooks () {
        return this.#books
    }

    hasBook(title) {
        return this.#books.indexOf(title) !== -1
    }

    addBook (title) {
        try {
            if (!this.hasBook(title)) {
                this.#books.push(title)
                console.log('Книга добавлена')
            } else {
                throw new Error("Такая книга уже есть в списке")
            }
        } catch (error) {
            console.log(error)
        }
    }

    removeBook(title) {
        try {
            const numBook = this.#books.indexOf(title)
            if (numBook !== -1) {
                this.#books.splice(numBook, 1)
                console.log('Книга удалена')
            } else {
                throw new Error("Такой книги в списке не найдено")
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const lib1 = new Library(['"Недоросль", Д.Фонвизин', '"Бедная Лиза", Н.Карамзин', '"Горе от ума", А.Грибоедов'])
console.log(lib1) // "Недоросль", Д.Фонвизин, "Бедная Лиза", Н.Карамзин, "Горе от ума", А.Грибоедов
lib1.addBook('"Палата №6", А.Чехов') // Книга добавлена
lib1.addBook('"Недоросль", Д.Фонвизин') // Error: Такая книга уже есть в списке
lib1.removeBook('"Недоросль", Д.Фонвизин') // Книга удалена
lib1.removeBook('"Недоросль", Д.Фонвизин') // Error: Такой книги в списке не найдено
lib1.hasBook('"Мцыри", М.Лермнотов') // false
lib1.allBooks // // "Бедная Лиза", Н.Карамзин, "Горе от ума", А.Грибоедов, "Палата №6", А.Чехов

const libWithDublicate = new Library('"Недоросль", Д.Фонвизин', '"Недоросль", Д.Фонвизин', 
                                    '"Бедная Лиза", Н.Карамзин', '"Горе от ума", А.Грибоедов') // Error: В списке есть дубликаты
console.log(libWithDublicate) // []