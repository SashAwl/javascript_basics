/**
 * Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 
степени + 3 ^ 3 степени
 */

function calcDegree(num) {
    return num ** 3;
}

console.log(calcDegree(2) + calcDegree(3));

/**
 * Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы 
за вычетом налогов равен значение"
 */

function getNetSalary(officialSalary) {
    console.log(`Размер заработной платы за вычетом налогов равен ${officialSalary * 0.87}`);
}

let officialSalaryUser = prompt("Введите заработную плату: ");
if (Number(officialSalaryUser) === Number(officialSalaryUser)) {
    getNetSalary(officialSalaryUser);
} else {
    console.log("Значение задано не верно");
}

/**
 * Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет 
максимальное значение среди этих чисел
 */

function getMaxValue(num1, num2, num3) {
    let max;
    if (num1 > num2) {
        max = num1;
    } else {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}

let number1 = Number(prompt("Введите число: "));
let number2 = Number(prompt("Введите число: "));
let number3 = Number(prompt("Введите число: "));
console.log(getMaxValue(number1, number2, number3));

/**
 * Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций 
(каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна 
вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, 
проверки на NaN, Infinity делать не нужно.
 */

let sum = (num1, num2) => num1 + num2;
let dif = (num1, num2) => Math.abs(num1 - num2);
let mult = (num1, num2) => num1 * num2;
let div = (num1, num2) => num1 / num2;

let numb1 = Number(prompt("Введите число: "));
let operation = prompt("Введите знак операции: ");
let numb2 = Number(prompt("Введите число: "));

if (operation === "+") {
    console.log(`Сумма чисел равна ${sum(numb1, numb2)}`);
}
else if (operation === "-") {
    console.log(`Модуль разности чисел равен ${dif(numb1, numb2)}`);
}
else if (operation === "*") {
    console.log(`Произведение чисел равно ${mult(numb1, numb2)}`);
}
else if (operation === "/") {
    console.log(`Частное чисел равно ${div(numb1, numb2)}`);
}
