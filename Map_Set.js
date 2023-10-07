/** Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. 
Клиенты приходят и делают заказы на разные блюда.
Необходимо создать систему управления этими заказами, которая позволит:
• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.*/

const dishes = new Map();
dishes.set({cookName: 'Виктор' , specialication: 'Пицца'},'Пицца "Маргарита"')
      .set({cookName: 'Виктор' , specialication: 'Пицца'},'Пицца "Пепперони"')
      .set({cookName: 'Ольга' , specialication: 'Суши'},'Суши "Филадельфия"')
      .set({cookName: 'Ольга' , specialication: 'Суши'}, 'Суши "Калифорния"')
      .set({cookName: 'Дмитрий' , specialication: 'Десерты'},'Тирамису')
      .set({cookName: 'Дмитрий' , specialication: 'Десерты'},'Чизкейк')

const orderAleks = new Set();
orderAleks.add('Пиццу "Пепперони"')
          .add('Тирамису')

const orderMaria = new Set();
orderMaria.add('Суши "Калифорния"')
          .add('Пиццу "Маргарита')

const orderIrina = new Set();
orderIrina.add('Чизкейк')

const clients = new Map();
clients.set('Алексей', orderAleks)
       .set('Мария', orderMaria)
       .set('Ирина', orderIrina)

console.log(Array.from(clients.keys()))

function defGender(name) {
    if (name[name.slice(-1)] == 'а' || name[name.slice(-1)]=='я') {
        return 'а'
    } else {
        return ''
    }
}

function printOrders(dataBase) {
    const clientsList = Array.from(dataBase.keys())
    
    clientsList.forEach(item => {
        console.log(`Клиент ${item} заказал${defGender(item)}: ${[...dataBase.get(item)]}`)
    })
}

printOrders(clients)