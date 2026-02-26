let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// users.forEach(function (value) {
//     console.log(value);
// });

// users.forEach(value => console.log(value));

// let filteredUsers = users.filter(function (value) {
//     return value.age > 30;
// })
//
// console.log(filteredUsers);

// let filteredUsers = users.filter(value => value.age > 30);
// console.log(filteredUsers);
// console.log(users);
//
// let mapedUsers = users.map(function (value, index) {
//     let newUser = {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1
//     }
//     return newUser;
// });
//
// console.log(mapedUsers);

// let find = users.find(value => value.name === 'max');
// console.log(find);
//
// console.log(users.every(value => value.status === true));
// console.log(users.some(value => value.status === true));

// let sort = users.sort((u1, u2) => {
//     return u1.age - u2.age;
// });
// console.log(sort);

// console.log(users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// }));

let reduce = users.reduce((acc, user) => {
    if (user.status === true) {
        acc.statT.push(user);
    } else {
        acc.statF.push(user);
    }
    return acc;
}, {statT: [], statF: []})

console.log(reduce);

// console.log(users);









