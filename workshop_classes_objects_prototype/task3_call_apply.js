/** Создайте объект calculator с методами add(), subtract() и multiply(),
которые выполняют соответствующие математические операции над
двумя числами. Используйте методы call и apply для вызова этих
методов с передачей аргументов.
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
 */
const calculator = {
    add: function (a, b) {
        return a + b
    },

    subtract: function (a, b) {
        return a - b
    },

    multiply: function (a, b) {
        return a * b
    }
}

console.log(calculator.add.call(null, 5, 4));
console.log(calculator.add.apply(null, [5, 4]));