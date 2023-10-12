class BankAccount {
    // Приватное свойство для хранения баланса
    #balance = 0;

    // constructor(initialBalance) Конструктор для инициализации начального баланса
    constructor(initialBalance) {
        try {
            if (initialBalance > 0){
                this.#balance = initialBalance;
            } else {
                throw new Error("Баланс вашего счета не может быть отрицательным")
            }
        } catch (error) {
            console.log(error)
        } finally {
            console.log('Операция завершена') 
        }
    }
    
    // Геттер для получения текущего баланса
    get balance () {
        return this.#balance;
    }

    // Метод для внесения денег на счет
    deposit(amount) {
        try {
            if (amount > 0) {
                this.#balance += amount;
            } else {
                throw new Error("Некорректные данные. Укажите другую сумму")
            }
        } catch (error) {
            console.log(error)
        } finally {
            console.log('Операция завершена') 
        }
    }
    // withdraw(amount) Метод для снятия денег со счета
    withdraw(amount) {
        try {
            if (amount > 0) {
                if (this.deposit >= amount) {
                    this.#balance -= amount;
                } else {
                    throw new Error("Не достаточно средств на счете")
                }
            } else {
                throw new RangeError("Укажите корректную сумму")
            }
        } catch (error) {
            console.log(error)
        }
    }
    }
    
    // Создаем новый банковский счет с начальным балансом 500
    let account = new BankAccount(500);
    console.log(account.balance); // Выводит: 500
    
    account.deposit(200);
    console.log(account.balance); // Выводит: 700
    
    account.withdraw(100);
    console.log(account.balance); // Выводит: 600