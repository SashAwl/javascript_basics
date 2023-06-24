/** Создайте функцию delayedMessage(message, delay), которая принимает аргументы message (строка) и delay
(число). Функция должна выводить заданное сообщение в консоль через указанную задержку.
 */

function delayedMessage(message, delay) {
    return setTimeout(() => {
        console.log(message)
    }, delay);
}
delayedMessage("Сообщение 1", 2000)
delayedMessage("Сообщение 2", 1000)
delayedMessage("Сообщение 3", 3000)

console.log("Конец программы")