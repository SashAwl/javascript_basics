/** Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции.*/

const musicCollection = [
    {group:'Nirvana', sound: 'Smells Like Teen Spirit'},
    {group:'Deep Purple', sound: 'Smoke On The Water'},
    {group:'Queen ', sound: 'We Will Rock You'},
    {group:'AC/DC', sound: 'Highway to Hell'},
    {group:'Metallica ', sound: 'Nothing Else Matters'},
    {group:'U2', sound: 'Sunday Bloody Sunday'}
]

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        last: musicCollection.length -  1,
        next() {
            return this.current <= this.last
                    ? {done: false, value: musicCollection[this.current++]}
                    : {done: true}
        }
    }
}

for (let sound of musicCollection) {
    console.log (`${sound.group} with composition "${sound.sound}"`)
}