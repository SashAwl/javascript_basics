/** Напишите программу, которая загружает данные с сервера с использованием объекта XMLHttpRequest и отображает полученную информацию в консоли.
1. Создайте функцию loadData(url), которая принимает аргумент url (строка) - адрес сервера для загрузки данных.
2. Внутри функции loadData() создайте объект XMLHttpRequest с помощью new XMLHttpRequest().
3. Зарегистрируйте обработчик события onreadystatechange, который будет вызываться при изменении состояния запроса. Проверьте,
если readyState равен 4 (успешно выполнен запрос) и status равен 200 (успешный статус ответа сервера), то выведите полученные
данные в консоль с помощью console.log(xhr.responseText). 
4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип запроса, url - адрес сервера, true - асинхронный режим запроса.
5. Отправьте запрос на сервер с помощью xhr.send().*/
function loadDataXML(url) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
        else {
            console.log(`Данные об ошибке: ${xhr.readyState} ${xhr.status}`)
        }
    }
    xhr.open('GEt', url, true);
    xhr.send();
}
console.log(loadDataXML('https://api.github.com/%20users/octocat'));

function loadDataFetch(url) {
    return fetch(url)
        .then(response => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(`Ошибка получения данных: ${error.name}: ${error.message}`))
}
loadDataFetch('https://api.github.com/%20users/octocat');

const loadDataAwaitFetch = async (url) => {
    let response = await fetch(url);

    if (response.ok) {
        let answer = await response.text();
        console.log(answer);
    }
    else {
        console.log(`Ошибка запроса: ${response.status}`);
    }
}
loadDataAwaitFetch('https://api.github.com/%20users/octocat')