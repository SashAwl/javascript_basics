/** Напишите рекурсивную функцию sumDigits, которая принимает
положительное целое число в качестве аргумента и возвращает сумму его цифр.
// Пример использования:
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9) */

let sum = 0
function sumDigits(num) {
    if (num < 1) {
        return 0
    }
    else {
        return sum + num % 10 + sumDigits((num - num % 10) / 10)
    }
}