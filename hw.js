/** Получение данных о пользователе */

function getUserData(idUser) {

    const dataJSON = fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => {

            let index;
            for (let i = 0; i < data.length; i++)
                if (data[i].id === idUser) {
                    index = i
                    break
                }

            if (!index) {
                throw new Error('Получены некорректные данные')
            }
            console.log(data[index])
        })
        .catch((error) => console.log(`Пользователь с таким ID не найден. Ошибка получения данных: ${error.name}: ${error.message}`))
}
getUserData(3);

/** Отправка данных на сервер" */

function saveUserData(obj) {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset = UTF-8"
        },
        body: JSON.stringify(obj)

    })
}

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.log(error.message);
    });

/** 3. Изменение стиля элемента через заданное время  */

function changeStyleDelayed(idElement, delay) {
    setTimeout(() => {
        const elem = document.querySelector(`#${idElement}`);
        elem.style.border = "3px solid red"
    }, delay)
}

changeStyleDelayed("mixer", 3000);
