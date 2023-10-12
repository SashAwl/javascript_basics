/** У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а некоторые – нет.
Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о наличии 
премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof. */

class User {
    name = 'new user';
    email = 'user@email.com';
    phone = '12345678909';

    constructor (name) {
        this.name = name;
    }
}

class RegularUser extends User {
}

class PremiumUser extends User {
    premiumAccount = new Date(2030, 1, 1, 0, 0, 0, 0)
}

function getAccountInfo(someUser) {
    if (someUser instanceof PremiumUser) {
        console.log(`Вы владелец премиум-аккаунта. Срок действия аккаунта закончится ${someUser.premiumAccount}`);
        return someUser?.premiumAccount;
    } else {
        console.log("Вы не являетесь владельцем премиум-аккаунта. По вопросу подключения обратитесь к сотрудникам банка");
    }
}

// Проверка
const user1 = new User("Nicola");
getAccountInfo(user1);
const user2 = new RegularUser("Antony");
getAccountInfo(user2);
const user3 = new PremiumUser("Marta");
getAccountInfo(user3);