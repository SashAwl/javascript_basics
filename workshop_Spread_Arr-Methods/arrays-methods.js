// Task 1  -  удалить дубликаты из массива
function removeDuplicates(...rest) {
    return rest.filter((item, index) => indexOf(item) === index) // indexOf находит первый такой элемент.Если такой элемент уже встречался в списке, он выдаст его номер, а не текущий. Тем самым вернет False
}
console.log(removeDuplicates([1, 2, 4, 5, 3, 2, 1, 4, 5])); // [1,2,4,5,3]

// Task 2 - получить массив только с четными значениями
function getEvenNumbers(array) {
    return array.filter(item => item % 2 === 0)
}
console.log(getEvenNumbers([1, 5, 3, 4, 6, 2, 7, 9, 7]));  // [4,6,2]

// Task 3  - найти среднее арифметическое
function calculateAverage(arr) {
    return arr.reduce((currentSum, currentItem) => currentSum + currentItem, 0);
}
console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7])); // 28

// Task 4  - во всех словах сделать буквы заглавными
function capitalizeFirstLetter(string) {
    return string.split("").reduce((strResult, item, index) => strResult + `${string[index - 1] === " " ? item.toUpperCase() : item}`, string[0].toUpperCase());
    // return string.split(" ").reduce((strResult, word) => strResult + ' ' + word[0].toUpperCase() + word.slice(1), "");   - вариант 2
    // return string.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");   - вариант 3
}
console.log(capitalizeFirstLetter('dfg dfbvdf dvdfsd f')); //Ddfg Dfbvdf Dvdfsd F

// Task 5 - функция приветствия
function createGreeting(name) {
    return () => console.log(`Привет, ${name}!`);
}
const greeting = createGreeting("Alex");
greeting();
