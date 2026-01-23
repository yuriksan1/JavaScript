// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors.
// Поле “автори” – являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'JavaScript',
    pageCount: 111,
    genre: 'horror',
    authors: [
        {name: 'Yura', age: 26},
        {name: 'Oleg', age: 22}

    ],
}
console.log(book1);

let book2 = {
    title: 'HTML/CSS',
    pageCount: 222,
    genre: 'mystery',
    authors: [
        {name: 'Vasya', age: 2},
        {name: 'Alex', age: 44}

    ]
}
console.log(book2);

let book3 = {
    title: 'React',
    pageCount: 333,
    genre: 'horror',
    authors: [
        {
            name: 'Ivan',
            age: 3
        },
        {
            name: 'Oleg',
            age: 32
        }
    ]
}
console.log(book3);