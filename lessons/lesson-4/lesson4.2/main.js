// let user1 = {
//     id: 1,
//     name: "kokos",
//     age: 25,
//     status: true
// }
// let user2 = {
//     id: 2,
//     name: 'abrikos',
//     age: 234,
//     status: false
// }
// let user3 = {
//     id: 3,
//     name: 'tomat',
//     age: 345,
//     status: true
// }
// let user4 = {
//     id: 4,
//     name: 'ogirok',
//     age: 456,
//     status: false
// }
function userFActory(id, name, age, status) {
    let user = {
        id: id,
        name: name,
        age: age,
        status: status
    }
    return user;
}

let u1 = userFActory(1, 'kokos', 23, false);
console.log(u1);
let u2 = userFActory(2, 'abrikos', 44, true);
console.log(u2);